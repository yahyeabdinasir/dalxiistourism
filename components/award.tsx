"use client";

import { useTheme } from "@/components/ThemeProvider";
import {
  FaAward,
  FaMapMarkedAlt,
  FaUserShield,
  FaHandsHelping,
} from "react-icons/fa";

const AwardSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`px-6 py-16 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome to Dalxiis Tourism
        </h2>
        <div className="max-w-3xl mx-auto">
          <p
            className={`text-xl leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            At Dalxiis Tourism, we pioneer authentic Somali travel experiences -
            connecting you with untouched landscapes and vibrant cultures
            through the eyes of those who know them best. Our expeditions are
            crafted by natives, for explorers seeking the road less traveled.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cultural Certification */}
        <div
          className={`p-8 rounded-lg shadow-sm text-center ${
            isDark ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <div className="flex justify-center mb-4">
            <FaAward className="text-4xl text-amber-600" />
          </div>
          <h3
            className={`text-xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Somtex-Recognized Itineraries
          </h3>
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            Our cultural tours are vetted by heritage experts, offering rare
            access to Somalia's living traditions and protected sites.
          </p>
        </div>

        {/* Community Partnership */}
        <div
          className={`p-8 rounded-lg shadow-sm text-center ${
            isDark ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <div className="flex justify-center mb-4">
            <FaHandsHelping className="text-4xl text-emerald-600" />
          </div>
          <h3
            className={`text-xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Community-Powered Travel
          </h3>
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            30% of proceeds directly fund local schools and conservation
            projects in the regions we visit.
          </p>
        </div>

        {/* Safety Assurance */}
        <div
          className={`p-8 rounded-lg shadow-sm text-center ${
            isDark ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <div className="flex justify-center mb-4">
            <FaUserShield className="text-4xl text-blue-600" />
          </div>
          <h3
            className={`text-xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Dedicated Safety Teams
          </h3>
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            Each journey includes our exclusive Safety Scout program - former
            peacekeepers who ensure secure passage through remote areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
