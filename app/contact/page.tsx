import React from "react";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us for your next adventure"
      />
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
}
