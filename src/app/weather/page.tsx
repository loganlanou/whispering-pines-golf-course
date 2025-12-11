import { Metadata } from "next";
import { courseInfo } from "@/lib/course-data";

export const metadata: Metadata = {
  title: "Weather | Whispering Pines Golf Course",
  description:
    "Check the current weather conditions at Whispering Pines Golf Course in Cadott, Wisconsin before your round.",
};

export default function WeatherPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--pine-green)]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Weather</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Check current conditions at Whispering Pines Golf Course before
              heading out for your round.
            </p>
          </div>
        </div>
      </section>

      {/* Weather Widget Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Current Conditions
            </h2>
            <p className="text-gray-600">Cadott, Wisconsin</p>
          </div>

          {/* Weather.com Widget Embed */}
          <div className="bg-[var(--cream)] rounded-3xl p-8 shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src="https://forecast.io/embed/#lat=44.9497&lon=-91.0154&name=Cadott,%20WI&color=#1a472a&font=Georgia&units=us"
                width="100%"
                height="400"
                style={{ border: "none" }}
                title="Weather Forecast for Cadott, WI"
              />
            </div>
          </div>

          {/* Additional Weather Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--cream)] rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[var(--pine-green)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--pine-green)] mb-2">
                Sunrise/Sunset
              </h3>
              <p className="text-gray-600 text-sm">
                Plan your tee time around the best daylight hours.
              </p>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[var(--pine-green)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--pine-green)] mb-2">
                Wind Conditions
              </h3>
              <p className="text-gray-600 text-sm">
                Wind can significantly affect your game. Check before you play!
              </p>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[var(--pine-green)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--pine-green)] mb-2">
                Rain Forecast
              </h3>
              <p className="text-gray-600 text-sm">
                Check the hourly forecast to avoid getting caught in the rain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Conditions Notice */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[var(--gold)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
                  Course Conditions
                </h3>
                <p className="text-gray-600 mb-4">
                  Weather conditions may affect course playability. Please call
                  the pro shop for current course conditions, especially after
                  heavy rain or during extreme weather.
                </p>
                <a
                  href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                  className="text-[var(--pine-green)] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Pro Shop: {courseInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking Good Out There?</h2>
          <p className="text-xl text-white/80 mb-8">
            Book your tee time now and enjoy a great day of golf!
          </p>
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Tee Time
          </a>
        </div>
      </section>
    </div>
  );
}
