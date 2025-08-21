

"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { useTheme } from "@/components/ThemeProvider";

export const destinations = [
  {
    id: 1,
    name: "Eyl",
    slug: "eyl",
    image: "/images/camelfor.jpg",
    description: "Historic coastal town in Puntland ",
    duration: "4 days",
  },
  {
    id: 2,
    name: "Muqdisho",
    slug: "muqdisho",
    image: "/images/muqdisho.jpg",
    description:
      "Vibrant capital city with rich culture, beautiful beaches, and historic landmarks",
    duration: "3 days",
  },
  {
    id: 3,
    name: "Garowe",
    slug: "garowe",
    image: "/images/garowe.png",
    description:
      "Administrative capital of Puntland with modern developments and traditional markets",
    duration: "3 days",
  },
  {
    id: 4,
    name: "Berbera",
    slug: "berbera",
    image: "/images/berbera.jpg",
    description:
      "Key port city with pristine beaches, colonial architecture, and strategic importance",
    duration: "5 days",
  },
  {
    id: 5,
    name: "Bosaso",
    slug: "bosaso",
    image: "/images/visitor.jpg",
    description:
      "Bustling commercial port city with access to stunning coastal landscapes",
    duration: "6 days",
  },
  {
    id: 6,
    name: "Aluula",
    slug: "Aluulayo",
    image: "/images/Aluula.jpg",
    description:
      "Picturesque coastal town in Puntland known for fishing and scenic views",
    duration: "4 days",
  },
  {
    id: 7,
    name: "Qardho",
    slug: "Qardho",
    image: "/images/luudo.jpg",
    description:
      "Historic city in the mountains of Puntland with unique architecture",
    duration: "1 day",
  },
  {
    id: 8,
    name: "Mareero",
    slug: "mareero",
    image: "/images/owner.jpg",

    description: " mareero considered by some to be the Maldives of Somalia",
    duration: "5 days",
  },

  {
    id: 9,
    name: "mudug",
    slug: "mudug",
    image: "/images/camelfor.jpg",
    description: "discover mudug in 4 days & one night",
    duration: "4 days",
    group: false,
  },
  {
    id: 10,
    name: "Kismaayo",
    slug: "kismayo",
    image: "/images/kismayo.jpg",
    description:
      "Important commercial hub with access to the Jubba River and Indian Ocean",
    duration: "6 days",
  },
  {
    id: 11,
    name: "Xaabo",
    slug: "Xaabo",
    image: "/images/xabo1.jpg",
    description:
      "Small coastal town known for its fishing community and tranquil beaches",
    duration: "3 days",
  },
  {
    id: 12,
    name: "Falfal Nugaal",
    slug: "falfal",
    image: "/images/bulle.jpg",
    description:
      "Scenic location in the Nugaal valley with unique desert landscapes",
    duration: "8 days",
  },
];

export default function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const { isDark } = useTheme();

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Destination not found</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Please go back and choose another destination.</p>
        <Link href="/destinations" className="text-blue-600 dark:text-blue-400 underline mt-4 inline-block">
          Back to destinations
        </Link>
      </div>
    );
  }

  return (
    <div>
      <HeroSection title={destination.name} />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-16">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {`Discover the beauty of ${destination.name} with our guided tours`}
        </h1>

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 sm:h-96 object-cover rounded-lg mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div
            className={`flex items-center rounded-lg p-4 shadow-sm ${
              isDark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span className="text-xl">⏱️</span>
            </div>
            <div>
              <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Duration
              </div>
              <div className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                {destination.duration}
              </div>
            </div>
          </div>

          <div
            className={`flex items-center rounded-lg p-4 shadow-sm ${
              isDark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span className="text-xl">🚐</span>
            </div>
            <div>
              <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Transportation
              </div>
              <div className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                4W Drive
              </div>
            </div>
          </div>

          <div
            className={`flex items-center rounded-lg p-4 shadow-sm ${
              isDark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span className="text-xl">🚶</span>
            </div>
            <div>
              <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Tour Type
              </div>
              <div className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                indivisual Tour
              </div>
            </div>
          </div>

          <div
            className={`flex items-center rounded-lg p-4 shadow-sm ${
              isDark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span className="text-xl">👥</span>
            </div>
            <div>
              <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Tour Type
              </div>
              <div className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                Group Tour
              </div>
            </div>
          </div>
        </div>

        <p className={`text-base sm:text-lg mb-4 ${isDark ? "text-white" : "text-gray-600"}`}>
          {destination.description}
        </p>

        <p className={`mb-6 ${isDark ? "text-white" : "text-gray-500"}`}>
          Duration: {destination.duration}
        </p>

        <div className="space-y-8 mb-8">
          <div className={`rounded-lg p-6 shadow-sm ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">What's Included</h3>
            <ul className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <li>Professional tour guide</li>
              <li>Transportation (4WD vehicle)</li>
              <li>Accommodation (3-star hotels)</li>
              <li>Daily breakfast</li>
              <li>Lunch and dinner</li>
              <li>night events(qaaci)</li>
              <li>Entrance fees to attractions</li>
              <li>Local cultural experiences</li>
            </ul>
          </div>

          <div className={`rounded-lg p-6 shadow-sm ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">What's Excluded</h3>
            <ul className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <li>International flights</li>
              <li>Travel insurance</li>
              <li>Personal expenses</li>
              <li>Lunch and dinner</li>
              <li>Optional activities</li>
              <li>Tips and gratuities</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/contact">
            <button className={`px-8 py-3 rounded-full font-semibold text-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-300`}>
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
