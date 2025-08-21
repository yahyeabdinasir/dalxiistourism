import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";

import Moreestimonials from "@/components/moretestmonial";

export default function WhyTravelWithUsPage() {
  return (
    <div>
      <HeroSection
        title="testimonial "
        subtitle="Discover what our client say about Dalxiis tourism"
      />
      <div className="py-10">
        {/* <h1 className="text-4xl font-bold mb-4">Why Travel With Us</h1> */}
        {/* <p className="text-lg text-gray-600">
          Discover the reasons to choose us for your next adventure with us !
        </p> */}

        <Moreestimonials />
      </div>
    </div>
  );
}
