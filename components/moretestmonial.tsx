"use client";

import React from "react";
// theme provider removed; default to light mode
import { Star } from "lucide-react";

export default function Moreestimonials() {
  const isDark = false;

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Warsame",
      location: "Hargeisa, Somaliland",
      rating: 5,
      comment:
        "Our trip to Xaabo Beach was breathtaking! The team at Dalxiis Tourism made everything smooth from start to finish.",
    },
    {
      id: 2,
      name: "Liam O’Connor",
      location: "Cork, Ireland",
      rating: 5,
      comment:
        "I’ve traveled a lot, but the Puntland coastal tour was truly unique. Warm people, beautiful landscapes, and great service.",
    },
    {
      id: 3,
      name: "Fatima Noor",
      location: "Nairobi, Kenya",
      rating: 4,
      comment:
        "Loved visiting Eyl’s fishing villages and trying fresh seafood. The cultural experience was just as amazing as the views.",
    },
    {
      id: 4,
      name: "James Thompson",
      location: "Perth, Australia",
      rating: 5,
      comment:
        "Dalxiis Tourism gave us a perfect mix of relaxation and adventure. Highly recommended for anyone visiting Somalia.",
    },
    {
      id: 5,
      name: "Sofia Martins",
      location: "Lisbon, Portugal",
      rating: 5,
      comment:
        "The coastal mountains were even more stunning in person. Everything was well-organized and the guides were so friendly.",
    },
    {
      id: 6,
      name: "Hassan Abdi",
      location: "Djibouti City, Djibouti",
      rating: 4,
      comment:
        "Great value for money! I especially enjoyed the sunset boat trip. Couldn’t have asked for a better holiday.",
    },
  ];

  return (
    <section
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
            What Our Travelers Say
          </h2>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p
                className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                "{testimonial.comment}"
              </p>
              <div>
                <div
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.name}
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Links */}
    </section>
  );
}
