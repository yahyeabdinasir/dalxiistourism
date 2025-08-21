"use client";

import { useTheme } from "@/components/ThemeProvider";
import React from "react";
import HeroSection from "@/components/HeroSection";
import { CheckCircle } from "lucide-react";

export default function DynamicTravelPage() {
  const { isDark } = useTheme();

  const reasons = [
    {
      title: "Expert Local Knowledge",
      desc: "Our team is based in Somalia with deep understanding of local culture, history, and destinations.",
    },
    {
      title: "Exclusive Packages",
      desc: "We provide unique travel experiences across Puntland and all of Somalia, tailored to your needs.",
    },
    {
      title: "Trusted & Reliable",
      desc: "As a leading tourism provider, we ensure safety, comfort, and memorable journeys for all travelers.",
    },
    {
      title: "International & Local Reach",
      desc: "Whether you are traveling from abroad or within Somalia, our services are designed to meet your expectations.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Why Travel With Us"
        subtitle="Discover why we are the trusted choice for exploring Puntland and beyond"
      />

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h1
          className={`text-4xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          About Our Company
        </h1>
        <p
          className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We are a leading tourism provider in Somalia, offering both
          international and local travel services. With years of experience, we
          specialize in creating unforgettable travel packages across Puntland
          and the entire Somali region, showcasing the culture, history, and
          natural beauty of our homeland.
        </p>
      </section>

      <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Why Travelers Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CheckCircle className="text-green-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2
          className={`text-3xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Ready for Your Somali Adventure?
        </h2>
        <p className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Book your journey with us today and experience the beauty of Puntland
          and beyond.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
