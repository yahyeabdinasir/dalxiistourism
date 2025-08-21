"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function Destinations() {
  const { isDark } = useTheme();

  const destinations = [
    {
      id: 1,
      name: "mudug",
      slug: "mudug",
      image: "/images/camelfor.jpg",
      description: "discover mudug in 4 days & one night",
      duration: "4 days",
      group: false,
    },
    {
      id: 2,
      name: "Muqdisho",
      slug: "muqdisho",
      image: "/images/muqdisho.jpg",
      description: "explore eyl in 2 days & one night",
      duration: "3 days",
      group: true,
    },
    {
      id: 3,
      name: "Garowe",
      slug: "garowe",
      image: "/images/garowe.png",
      description: "Ancient Incan citadel in the Andes",
      duration: "3 day one night",
      group: false,
    },
    {
      id: 4,
      name: "berbera",
      slug: "berbera",
      image: "/images/berbera.jpg",
      description: "Port city with golden beaches",
      duration: "5 days",
      group: true,
    },
    {
      id: 5,
      name: "Bosaso",
      slug: "bosaso",
      image: "/images/visitor.jpg",
      description: "Coastal city with stunning landscapes",
      duration: "Group Tour",
      group: true,
    },
    {
      id: 6,
      name: "Kismaayo",
      slug: "kismayo",
      image: "/images/kismayo.jpg",
      description: "Ancient Incan citadel in the Andes",
      duration: "6 days",
    },

    {
      id: 7,
      name: "Xaabo",
      slug: "Xaabo",
      image: "/images/xabo1.jpg",
      description: "Ancient Incan citadel in the Andes",
      duration: "3 days",
      // group: true,
    },
    {
      id: 8,
      name: "Mareero",
      slug: "mareero",
      image: "/images/owner.jpg",
      description: " mareero   the Maldives of Somalia",
      duration: "5 days",
    },
  ];

  return (
    <section
      id="destinations"
      className={`py-20 transition-colors duration-200 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Popular Destinations
          </h2>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-4xl mx-auto`}
          >
            Experience the top-rated journeys with Dalxiis tourism Puntland
            Tours, showcasing the unmatched beauty of Somalia's northeastern
            region. Discover the stunning white-sand beaches of eyl and Bosaso,
            the untouched landscapes of Caluula, Complete your adventure with a
            vibrant city tour of Garowe, the heart of Puntland's modern
            development. Don't miss out on these unforgettable experiences —
            plan your tour today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {destination.group && (
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 ${
                        isDark ? "bg-green-500" : "bg-green-600"
                      } text-white text-xs font-medium rounded-full shadow-lg`}
                    >
                      Group Tour
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <MapPin
                      className={`w-5 h-5 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      } mr-2`}
                    />
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      } group-hover:text-blue-600 transition-colors duration-200`}
                    >
                      {destination.name}
                    </h3>
                  </div>
                  <div
                    className={`flex items-center text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                </div>

                <p
                  className={`mb-4 ${
                    isDark ? "text-white" : "text-gray-600"
                  } leading-relaxed`}
                >
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`font-semibold text-sm ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    Request for Price
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    } transform group-hover:translate-x-1 transition-transform duration-200`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
