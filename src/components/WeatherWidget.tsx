"use client";

import { useState, useEffect, useCallback } from "react";

// Cadott, WI coordinates (Whispering Pines Golf Course)
const LATITUDE = 44.9497;
const LONGITUDE = -91.0154;

interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  isDay: boolean;
  precipitation: number;
  cloudCover: number;
  pressure: number;
  uvIndex: number;
}

interface HourlyForecast {
  time: string;
  temperature: number;
  weatherCode: number;
  precipitationProbability: number;
  windSpeed: number;
}

interface DailyForecast {
  date: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: number;
  precipitationProbability: number;
  sunrise: string;
  sunset: string;
  windSpeedMax: number;
  uvIndexMax: number;
}

interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  lastUpdated: Date;
}

// Weather code to description and icon mapping
const weatherCodes: Record<number, { description: string; icon: string; iconNight?: string }> = {
  0: { description: "Clear sky", icon: "☀️", iconNight: "🌙" },
  1: { description: "Mainly clear", icon: "🌤️", iconNight: "🌙" },
  2: { description: "Partly cloudy", icon: "⛅", iconNight: "☁️" },
  3: { description: "Overcast", icon: "☁️" },
  45: { description: "Foggy", icon: "🌫️" },
  48: { description: "Depositing rime fog", icon: "🌫️" },
  51: { description: "Light drizzle", icon: "🌧️" },
  53: { description: "Moderate drizzle", icon: "🌧️" },
  55: { description: "Dense drizzle", icon: "🌧️" },
  56: { description: "Light freezing drizzle", icon: "🌨️" },
  57: { description: "Dense freezing drizzle", icon: "🌨️" },
  61: { description: "Slight rain", icon: "🌧️" },
  63: { description: "Moderate rain", icon: "🌧️" },
  65: { description: "Heavy rain", icon: "🌧️" },
  66: { description: "Light freezing rain", icon: "🌨️" },
  67: { description: "Heavy freezing rain", icon: "🌨️" },
  71: { description: "Slight snow", icon: "🌨️" },
  73: { description: "Moderate snow", icon: "🌨️" },
  75: { description: "Heavy snow", icon: "❄️" },
  77: { description: "Snow grains", icon: "🌨️" },
  80: { description: "Slight rain showers", icon: "🌦️" },
  81: { description: "Moderate rain showers", icon: "🌦️" },
  82: { description: "Violent rain showers", icon: "⛈️" },
  85: { description: "Slight snow showers", icon: "🌨️" },
  86: { description: "Heavy snow showers", icon: "❄️" },
  95: { description: "Thunderstorm", icon: "⛈️" },
  96: { description: "Thunderstorm with slight hail", icon: "⛈️" },
  99: { description: "Thunderstorm with heavy hail", icon: "⛈️" },
};

function getWeatherInfo(code: number, isDay: boolean = true) {
  const weather = weatherCodes[code] || { description: "Unknown", icon: "❓" };
  const icon = !isDay && weather.iconNight ? weather.iconNight : weather.icon;
  return { ...weather, icon };
}

function getWindDirection(degrees: number): string {
  const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

function formatTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
}

function formatDay(isoString: string): string {
  const date = new Date(isoString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

function getGolfConditionRating(weather: CurrentWeather): { rating: string; color: string; message: string } {
  const { temperature, windSpeed, precipitation, weatherCode } = weather;

  // Check for severe weather
  if (weatherCode >= 95) {
    return { rating: "Poor", color: "text-red-500", message: "Thunderstorms - Not recommended for golf" };
  }
  if (precipitation > 0.5 || (weatherCode >= 61 && weatherCode <= 67)) {
    return { rating: "Poor", color: "text-red-500", message: "Rain expected - Consider rescheduling" };
  }
  if (weatherCode >= 71 && weatherCode <= 77) {
    return { rating: "Poor", color: "text-red-500", message: "Snow conditions - Course may be closed" };
  }

  // Check temperature extremes
  if (temperature < 40 || temperature > 95) {
    return { rating: "Fair", color: "text-yellow-500", message: temperature < 40 ? "Cold conditions - Dress warmly" : "Hot conditions - Stay hydrated" };
  }

  // Check wind
  if (windSpeed > 20) {
    return { rating: "Fair", color: "text-yellow-500", message: "Windy conditions - Adjust your game" };
  }

  // Good conditions
  if (temperature >= 60 && temperature <= 80 && windSpeed < 10 && precipitation === 0) {
    return { rating: "Excellent", color: "text-green-500", message: "Perfect golf weather!" };
  }

  return { rating: "Good", color: "text-green-400", message: "Good conditions for golf" };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,is_day,uv_index&hourly=temperature_2m,weather_code,precipitation_probability,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,wind_speed_10m_max,uv_index_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=7`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();

      const currentWeather: CurrentWeather = {
        temperature: Math.round(data.current.temperature_2m),
        apparentTemperature: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        windDirection: data.current.wind_direction_10m,
        weatherCode: data.current.weather_code,
        isDay: data.current.is_day === 1,
        precipitation: data.current.precipitation,
        cloudCover: data.current.cloud_cover,
        pressure: Math.round(data.current.pressure_msl),
        uvIndex: Math.round(data.current.uv_index),
      };

      // Get next 24 hours of hourly data
      const now = new Date();
      const hourlyData: HourlyForecast[] = [];
      for (let i = 0; i < data.hourly.time.length && hourlyData.length < 24; i++) {
        const hourTime = new Date(data.hourly.time[i]);
        if (hourTime >= now) {
          hourlyData.push({
            time: data.hourly.time[i],
            temperature: Math.round(data.hourly.temperature_2m[i]),
            weatherCode: data.hourly.weather_code[i],
            precipitationProbability: data.hourly.precipitation_probability[i],
            windSpeed: Math.round(data.hourly.wind_speed_10m[i]),
          });
        }
      }

      const dailyData: DailyForecast[] = data.daily.time.map((time: string, i: number) => ({
        date: time,
        temperatureMax: Math.round(data.daily.temperature_2m_max[i]),
        temperatureMin: Math.round(data.daily.temperature_2m_min[i]),
        weatherCode: data.daily.weather_code[i],
        precipitationProbability: data.daily.precipitation_probability_max[i],
        sunrise: data.daily.sunrise[i],
        sunset: data.daily.sunset[i],
        windSpeedMax: Math.round(data.daily.wind_speed_10m_max[i]),
        uvIndexMax: Math.round(data.daily.uv_index_max[i]),
      }));

      setWeather({
        current: currentWeather,
        hourly: hourlyData,
        daily: dailyData,
        lastUpdated: new Date(),
      });
      setError(null);
    } catch (err) {
      setError("Unable to load weather data. Please try again later.");
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather();

    // Refresh every 15 minutes
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchWeather]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="bg-[var(--cream)] rounded-3xl p-8">
          <div className="h-32 bg-gray-200 rounded-xl mb-6"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-red-700 mb-2">Weather Unavailable</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchWeather}
          className="btn-primary px-6 py-2 rounded-full text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  const { current, hourly, daily } = weather;
  const weatherInfo = getWeatherInfo(current.weatherCode, current.isDay);
  const golfCondition = getGolfConditionRating(current);

  return (
    <div className="space-y-6">
      {/* Current Weather Card */}
      <div className="bg-gradient-to-br from-[var(--pine-green)] to-[var(--pine-green-dark)] rounded-3xl p-8 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Main Temperature */}
          <div className="flex items-center gap-6">
            <div className="text-7xl">{weatherInfo.icon}</div>
            <div>
              <div className="text-6xl font-bold">{current.temperature}°F</div>
              <div className="text-white/80 text-lg">{weatherInfo.description}</div>
              <div className="text-white/60 text-sm mt-1">
                Feels like {current.apparentTemperature}°F
              </div>
            </div>
          </div>

          {/* Golf Conditions Rating */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:text-right">
            <div className="text-white/60 text-sm uppercase tracking-wider mb-1">Golf Conditions</div>
            <div className={`text-2xl font-bold ${golfCondition.color}`}>{golfCondition.rating}</div>
            <div className="text-white/80 text-sm mt-1">{golfCondition.message}</div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Wind</div>
            <div className="text-xl font-semibold">{current.windSpeed} mph</div>
            <div className="text-white/60 text-sm">{getWindDirection(current.windDirection)}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Humidity</div>
            <div className="text-xl font-semibold">{current.humidity}%</div>
            <div className="text-white/60 text-sm">Relative</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wider mb-1">UV Index</div>
            <div className="text-xl font-semibold">{current.uvIndex}</div>
            <div className="text-white/60 text-sm">
              {current.uvIndex <= 2 ? "Low" : current.uvIndex <= 5 ? "Moderate" : current.uvIndex <= 7 ? "High" : "Very High"}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Cloud Cover</div>
            <div className="text-xl font-semibold">{current.cloudCover}%</div>
            <div className="text-white/60 text-sm">Coverage</div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-white/50 text-xs text-center mt-6">
          Last updated: {weather.lastUpdated.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
          {" · "}
          <button onClick={fetchWeather} className="underline hover:text-white/70">
            Refresh
          </button>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-[var(--pine-green)] mb-4">Hourly Forecast</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
          {hourly.slice(0, 12).map((hour, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[var(--cream)] rounded-xl p-4 text-center min-w-[80px]"
            >
              <div className="text-gray-500 text-sm mb-2">
                {index === 0 ? "Now" : formatTime(hour.time)}
              </div>
              <div className="text-2xl mb-2">{getWeatherInfo(hour.weatherCode).icon}</div>
              <div className="font-bold text-[var(--pine-green)]">{hour.temperature}°</div>
              {hour.precipitationProbability > 0 && (
                <div className="text-blue-500 text-xs mt-1">
                  💧 {hour.precipitationProbability}%
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-[var(--pine-green)] mb-4">7-Day Forecast</h3>
        <div className="space-y-3">
          {daily.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-4 w-32">
                <span className="text-2xl">{getWeatherInfo(day.weatherCode).icon}</span>
                <span className="font-medium text-[var(--pine-green)]">
                  {formatDay(day.date)}
                </span>
              </div>

              <div className="flex-1 text-center">
                <span className="text-gray-500 text-sm">
                  {getWeatherInfo(day.weatherCode).description}
                </span>
              </div>

              {day.precipitationProbability > 0 && (
                <div className="text-blue-500 text-sm w-16 text-center">
                  💧 {day.precipitationProbability}%
                </div>
              )}

              <div className="flex items-center gap-2 w-24 justify-end">
                <span className="font-bold text-[var(--pine-green)]">{day.temperatureMax}°</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500">{day.temperatureMin}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sunrise/Sunset for Today */}
      {daily[0] && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 flex items-center gap-4">
            <div className="text-4xl">🌅</div>
            <div>
              <div className="text-gray-500 text-sm">Sunrise</div>
              <div className="text-xl font-bold text-orange-600">
                {new Date(daily[0].sunrise).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 flex items-center gap-4">
            <div className="text-4xl">🌇</div>
            <div>
              <div className="text-gray-500 text-sm">Sunset</div>
              <div className="text-xl font-bold text-purple-600">
                {new Date(daily[0].sunset).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Attribution */}
      <div className="text-center text-gray-400 text-xs">
        Weather data provided by{" "}
        <a
          href="https://open-meteo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          Open-Meteo
        </a>
      </div>
    </div>
  );
}
