import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";

export default function WhyTravelWithUsPage() {
  return (
    <div>
      <HeroSection
        title="About  Us"
        subtitle="Discover the reasons to choose us for your next adventure"
      />
      <div className="py-10">
        {/* <h1 className="text-4xl font-bold mb-4">Why Travel With Us</h1> */}
        {/* <p className="text-lg text-gray-600">
          Discover the reasons to choose us for your next adventure with us !
        </p> */}

        <About />
      </div>
    </div>
  );
}
