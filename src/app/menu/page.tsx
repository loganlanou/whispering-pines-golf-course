import { Metadata } from "next";
import { courseInfo } from "@/lib/course-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Menu | Whispering Pines Golf Course",
  description:
    "View our restaurant and bar menu at Whispering Pines Golf Course. Enjoy food and drinks before or after your round. Open Monday through Sunday.",
};

export default function MenuPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Restaurant & Bar
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Enjoy delicious food and refreshing drinks at Whispering Pines.
              Open Monday through Sunday, 10 AM to Close.
            </p>
          </div>
        </div>
      </section>

      {/* Food Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={images.features.food}
                alt="Food at Whispering Pines"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Whispering Pines Now Serving Food!
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you&apos;re grabbing a quick bite before your round,
                enjoying a leisurely lunch, or relaxing with drinks after 18
                holes, our restaurant and bar has something for everyone.
              </p>
              <div className="bg-[var(--cream)] rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-[var(--pine-green)] mb-2">
                  Hours of Operation
                </h3>
                <p className="text-gray-700 text-lg">
                  Monday through Sunday: 10:00 AM to Close
                </p>
              </div>
              <p className="text-gray-600">
                Our menu features a variety of appetizers, sandwiches, burgers,
                and more. Full bar service available with beer, wine, and
                cocktails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Images Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Our Menu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              View our current menu offerings below. Menu items and prices
              subject to change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Menu Page 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://whisperingpinesgc.net/wp-content/uploads/2025/03/2025-menu-1.jpg"
                alt="Whispering Pines Menu Page 1"
                className="w-full h-auto"
              />
            </div>
            {/* Menu Page 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://whisperingpinesgc.net/wp-content/uploads/2025/03/2025-menu-2.jpg"
                alt="Whispering Pines Menu Page 2"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Specials */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[var(--pine-green)] mb-4">
                Weekly Specials
              </h3>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://whisperingpinesgc.net/wp-content/uploads/2025/05/wpg-specials-8-5-25.png"
                alt="Weekly Specials"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* On-Course Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              On-Course Beverage Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay refreshed during your round! Our beverage cart makes regular
              rounds throughout the course during peak hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--pine-green)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
                Cold Beverages
              </h3>
              <p className="text-gray-600">
                Beer, soda, water, and sports drinks available on the course.
              </p>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--pine-green)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
                Regular Service
              </h3>
              <p className="text-gray-600">
                Beverage cart circulates throughout the day during peak season.
              </p>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--pine-green)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
                Snacks & More
              </h3>
              <p className="text-gray-600">
                Grab a snack to keep your energy up during your round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dine?</h2>
          <p className="text-xl text-white/80 mb-8">
            Stop by the clubhouse before or after your round. No reservation
            needed!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
            >
              Book Tee Time
            </a>
            <a
              href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
              className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[var(--pine-green)] transition-all inline-flex items-center justify-center gap-2"
            >
              Call {courseInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
