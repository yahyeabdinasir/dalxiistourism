

"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { useMemo } from "react";

// Move destinations data outside component to prevent re-creation on every render
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

// Memoized component for destination info cards
const DestinationInfoCard = ({ icon, label, value }: {
  icon: string;
  label: string;
  value: string;
}) => (
  <div className="flex items-center rounded-lg p-4 shadow-sm bg-gray-50">
    <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 bg-gray-100">
      <span className="text-xl">{icon}</span>
    </div>
    <div>
      <div className="text-sm text-gray-600">
        {label}
      </div>
      <div className="text-base font-semibold text-gray-800">
        {value}
      </div>
    </div>
  </div>
);

export default function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  // Memoize destination lookup to prevent unnecessary re-computations
  const destination = useMemo(() => 
    destinations.find((d) => d.slug === params.slug), 
    [params.slug]
  );

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-gray-900">
          Destination not found
        </h1>
        <p className="text-gray-600 mt-2">
          Please go back and choose another destination.
        </p>
        <Link 
          href="/destinations" 
          className="text-blue-600 underline mt-4 inline-block hover:text-blue-800 transition-colors duration-200"
        >
          Back to destinations
        </Link>
      </div>
    );
  }

  return (
    <div>
      <HeroSection title={destination.name} />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          {`Discover the beauty of ${destination.name} with our guided tours`}
        </h1>

        {/* Optimized image with Next.js Image component */}
        <div className="relative w-full h-64 sm:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            className="object-cover"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <DestinationInfoCard
            icon="⏱️"
            label="Duration"
            value={destination.duration}
          />
          <DestinationInfoCard
            icon="🚐"
            label="Transportation"
            value="4W Drive"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            About {destination.name}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {destination.description}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              What to Expect
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Professional guided tours with local experts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Comfortable accommodation and transportation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Authentic cultural experiences and local cuisine</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Safety and security throughout your journey</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Tour Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <span className="mr-2">🏛️</span>
                <span>Historical sites and landmarks</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🏖️</span>
                <span>Beautiful beaches and coastal views</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🍽️</span>
                <span>Local cuisine and dining experiences</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🛍️</span>
                <span>Shopping and market exploration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="flex-1 text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book This Tour
          </Link>
          <Link
            href="/destinations"
            className="flex-1 text-center py-3 px-6 rounded-lg font-semibold border-2 transition-all duration-200 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}