"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export default function About() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Discover <span>Dalxiis Tourism</span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Your trusted gateway to Puntland's stunning beaches and authentic
            Somali travel experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-20">
          {/* Welcome Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Welcome to <span>Dalxiis Tourism</span>
              </h2>
              <div
                className={`space-y-5 text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>
                  If you've found us, we know you have a passion for travel, a
                  love for the ocean, and a desire to explore Somalia's hidden
                  coastal gems. You're in the right place!
                </p>
                <p>
                  Dalxiis Tourism is a local tourism service provider operating
                  across Somalia, with a special focus on Puntland's beautiful
                  beaches such as <strong className="font-semibold">Eyl</strong>{" "}
                  and <strong className="font-semibold">Xaabo</strong>.
                </p>
                <p>
                  From relaxing on pristine shores to exploring fishing
                  communities and enjoying fresh seafood, we create experiences
                  you'll never forget.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/white.jpeg"
                alt="Puntland beach view"
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>

          {/* Who We Are */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/wonaward.jpg"
                alt="Tour guide in Puntland"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    isDark
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  Our Identity
                </span>
              </div>
              <h3
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Who We Are
              </h3>
              <div
                className={`space-y-5 text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>
                  We are a Somalia-based tourism company committed to connecting
                  travelers with authentic coastal experiences. Whether you're
                  visiting for relaxation or adventure, we provide safe,
                  reliable, and memorable travel packages tailored to your
                  needs.
                </p>
                <p>
                  Our deep local knowledge and passion for our country's natural
                  beauty set us apart from conventional tour operators.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values & Recognition */}
          <section className="space-y-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    isDark
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  Our Principles
                </span>
              </div>
              <h3
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Core Values & Recognition
              </h3>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We operate with integrity, passion, and a deep respect for our
                land and people.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className={`p-8 rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <h4
                  className={`text-xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Authenticity
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  We provide genuine experiences that reflect the true spirit of
                  Somali coastal life and culture.
                </p>
              </div>

              <div
                className={`p-8 rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <h4
                  className={`text-xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Sustainability
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  We promote tourism that benefits local communities and
                  preserves our natural beauty for future generations.
                </p>
              </div>

              <div
                className={`p-8 rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <h4
                  className={`text-xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Excellence
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  Our dedication to quality service has earned us recognition
                  from travelers across Somalia and beyond.
                </p>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    isDark
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  Behind the Scenes
                </span>
              </div>
              <h3
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Expert Team
              </h3>
              <div
                className={`space-y-5 text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>
                  Our team consists of local guides, travel planners, and
                  hospitality experts who know Puntland's coasts intimately.
                  Each member brings specialized knowledge that enhances your
                  travel experience.
                </p>
                <p>
                  From multilingual guides to safety-trained professionals, we
                  ensure every aspect of your journey is handled with care and
                  expertise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/wasiir.jpg"
                  alt="Tour guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/providers.jpg"
                  alt="Tour guide helping visitors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/owner.jpg"
                  alt="Tour guide explaining"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/awale.jpg"
                  alt="Tour guide group"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section
            className={`py-12 px-8 rounded-xl ${
              isDark ? "bg-gray-800" : "bg-blue-50"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3
                className={`text-3xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Why Travel With Dalxiis Tourism?
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div
                  className={`p-6 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-white shadow-sm"
                  }`}
                >
                  <h4
                    className={`text-xl font-semibold mb-3 flex items-center ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Local Expertise
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Deep knowledge of Puntland's hidden gems that only locals
                    can provide.
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-white shadow-sm"
                  }`}
                >
                  <h4
                    className={`text-xl font-semibold mb-3 flex items-center ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Safety First
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Rigorous safety protocols to ensure worry-free travel
                    experiences.
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-white shadow-sm"
                  }`}
                >
                  <h4
                    className={`text-xl font-semibold mb-3 flex items-center ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unique Experiences
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Access to authentic cultural interactions and
                    off-the-beaten-path locations.
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-white shadow-sm"
                  }`}
                >
                  <h4
                    className={`text-xl font-semibold mb-3 flex items-center ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Community Focus
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Tourism that directly benefits local communities and
                    preserves traditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h3
              className={`text-3xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Explore Puntland's Beauty?
            </h3>
            <p
              className={`text-xl max-w-2xl mx-auto mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Contact us today to start planning your unforgettable Somali
              coastal adventure.
            </p>
            <Link href="/contact">
              <button
                className={`px-8 py-3 rounded-full font-semibold text-lg ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white transition duration-300`}
              >
                Get in Touch
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
