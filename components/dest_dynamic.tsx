"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { useMemo } from "react";
import { destinations } from "@/data/destinations";

// Memoized component for destination info cards
const DestinationInfoCard = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => (
  <div className="flex items-center rounded-lg p-4 shadow-sm bg-gray-50">
    <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 bg-gray-100">
      <span className="text-xl">{icon}</span>
    </div>
    <div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-base font-semibold text-gray-800">{value}</div>
    </div>
  </div>
);

// Checkmark icon component
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// X mark icon component
const XIcon = () => (
  <svg
    className="w-5 h-5 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export default function DynamicPage({ params }: { params: { slug: string } }) {
  // Memoize destination lookup to prevent unnecessary re-computations
  const destination = useMemo(
    () => destinations.find((d) => d.slug.toLowerCase() === params.slug.toLowerCase()),
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <DestinationInfoCard
            icon="⏱️"
            label="Duration"
            value={destination.duration || "Not specified"}
          />
          <DestinationInfoCard
            icon="🚐"
            label="Transportation"
            value="4W Drive"
          />
          <DestinationInfoCard
            icon="👥"
            label="Tour Type"
            value={destination.group !== undefined ? (destination.group ? "Group Tour" : "Private Tour") : "Private & Group"}
          />
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
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              What's Included
            </h3>
            <ul className="space-y-2 text-gray-700">
              {destination.included?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              )) || (
                <li className="text-gray-500">No information available</li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              What's Not Included
            </h3>
            <ul className="space-y-2 text-gray-700">
              {destination.excluded?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-0.5">
                    <XIcon />
                  </span>
                  <span>{item}</span>
                </li>
              )) || (
                <li className="text-gray-500">No information available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="mt-8">
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

        {/* Action Buttons */}
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
