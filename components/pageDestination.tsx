// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MapPin, Clock, ArrowRight } from "lucide-react";
// import HeroSection from "@/components/HeroSection";
// import { destinations } from "@/data/destinations";

// export default function PageDestination() {
//   return (
//     <div className="bg-background text-foreground">
//       <HeroSection
//         title="Our Destinations"
//         subtitle="Explore the most beautiful and exciting destinations we offer"
//       />
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
//           All Destinations
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {destinations.map((destination) => (
//             <Link
//               key={destination.slug}
//               href={`/destinations/${destination.slug}`}
//               className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card`}
//             >
//               <div className="relative w-full h-64 overflow-hidden">
//                 <Image
//                   src={destination.image}
//                   alt={destination.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-4 right-4">
//                   <span
//                     className={`px-3 py-1 ${
//                       destination.group ? "bg-green-600" : "bg-blue-600"
//                     } text-white text-xs font-medium rounded-full shadow-lg`}
//                   >
//                     {destination.duration}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <div className="flex items-center">
//                     <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
//                     <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
//                       {destination.name}
//                     </h2>
//                   </div>
//                   {!destination.group && (
//                     <div className="flex items-center text-sm text-gray-500 dark:text-white">
//                       <Clock className="w-4 h-4 mr-1" />
//                       <span>{destination.duration}</span>
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-sm leading-relaxed mb-4 text-gray-600 dark:text-white">
//                   {destination.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span className="font-semibold text-sm text-blue-600 dark:text-blue-400">
//                     Request for Price
//                   </span>
//                   <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 transform group-hover:translate-x-1 transition-transform duration-200" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// components/PageDestination.js
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { destinations } from "@/data/destinations";
// theme provider removed; default to light mode

export default function PageDestination() {
  const isDark = false;

  return (
    <div className={isDark ? "bg-gray-900" : "bg-gray-50"}>
      <HeroSection
        title="Our Destinations"
        subtitle="Explore the most beautiful and exciting destinations we offer"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1
          className={`text-4xl font-bold mb-8 text-center ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          All Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 ${
                      destination.group ? "bg-green-600" : "bg-blue-600"
                    } text-white text-xs font-medium rounded-full shadow-lg`}
                  >
                    {destination.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <MapPin
                      className={`w-5 h-5 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      } mr-2`}
                    />
                    <h2
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      } group-hover:text-blue-600 transition-colors duration-200`}
                    >
                      {destination.name}
                    </h2>
                  </div>
                  {!destination.group && (
                    <div
                      className={`flex items-center text-sm ${
                        isDark ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isDark ? "text-gray-200" : "text-gray-600"
                  }`}
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
    </div>
  );
}
