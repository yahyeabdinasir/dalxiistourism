"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { useMemo } from "react";
import { destinations } from "@/data/destinations";

export default function DynamicPage({ params }: { params: { slug: string } }) {
  // Memoize destination lookup to prevent unnecessary re-computations
  const destination = useMemo(
    () =>
      destinations.find(
        (d) => d.slug.toLowerCase() === params.slug.toLowerCase()
      ),
    [params.slug]
  );

  // Handle case where destination is not found
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

        {/* Image with error handling */}
        <div className="relative w-full h-64 sm:h-96 mb-6 rounded-lg overflow-hidden bg-gray-200">
          {destination.image ? (
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Image not available
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center rounded-lg p-4 shadow-sm bg-gray-50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 bg-gray-100">
              <span className="text-xl">⏱️</span>
            </div>
            <div>
              <div className="text-sm text-gray-600">Duration</div>
              <div className="text-base font-semibold text-gray-800">
                {destination.duration || "Not specified"}
              </div>
            </div>
          </div>

          <div className="flex items-center rounded-lg p-4 shadow-sm bg-gray-50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 bg-gray-100">
              <span className="text-xl">🚐</span>
            </div>
            <div>
              <div className="text-sm text-gray-600">Transportation</div>
              <div className="text-base font-semibold text-gray-800">
                4W Drive
              </div>
            </div>
          </div>

          <div className="flex items-center rounded-lg p-4 shadow-sm bg-gray-50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 bg-gray-100">
              <span className="text-xl">🚶</span>
            </div>
            <div>
              <div className="text-sm text-gray-600">Tour Type</div>
              <div className="text-base font-semibold text-gray-800">
                Individual Tour
              </div>
            </div>
          </div>

          <div className="flex items-center rounded-lg p-4 shadow-sm bg-gray-50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 bg-gray-100">
              <span className="text-xl">👥</span>
            </div>
            <div>
              <div className="text-sm text-gray-600">Tour Type</div>
              <div className="text-base font-semibold text-gray-800">
                Group Tour
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            About {destination.name}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {destination.description}
          </p>
        </div>

        {/* Included/Excluded Sections */}
        <div className="space-y-8 mb-8">
          <div className="rounded-lg p-6 shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              What's Included
            </h3>
            <ul className="space-y-2 text-gray-600">
              {destination.included && destination.included.length > 0 ? (
                destination.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <>
                  <li>Professional tour guide</li>
                  <li>Transportation (4WD vehicle)</li>
                  <li>Accommodation (3-star hotels)</li>
                  <li>Daily breakfast</li>
                  <li>Lunch and dinner</li>
                  <li>Night events (qaaci)</li>
                  <li>Entrance fees to attractions</li>
                  <li>Local cultural experiences</li>
                </>
              )}
            </ul>
          </div>

          <div className="rounded-lg p-6 shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              What's Excluded
            </h3>
            <ul className="space-y-2 text-gray-600">
              {destination.excluded && destination.excluded.length > 0 ? (
                destination.excluded.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <>
                  <li>International flights</li>
                  <li>Travel insurance</li>
                  <li>Personal expenses</li>
                  <li>Lunch and dinner</li>
                  <li>Optional activities</li>
                  <li>Tips and gratuities</li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* 
        {/* Tour Highlights */}
        {/* <div className="mt-8">
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
        </div> */}

        {/* Action Button */}
        <div className="flex justify-center m-10">
          <Link href="/contact">
            <button className="px-8 py-3 rounded-full font-semibold text-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-300">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
