"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Star } from "lucide-react";

export default function Testimonials() {
  const { isDark } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment:
        "Amazing experience! The trip to Santorini was perfectly planned and exceeded all our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      comment:
        "Dalxiis Tourism made our Bali adventure unforgettable. Professional service and attention to detail.",
    },
    {
      id: 3,
      name: "Emma Davis",
      location: "London, UK",
      rating: 5,
      comment:
        "The Machu Picchu tour was incredible. Our guide was knowledgeable and the accommodations were perfect.",
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
