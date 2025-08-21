"use client";
import React from "react";
import { useTheme } from "@/components/ThemeProvider";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "/images/laas.jpg",
  height = "50vh",
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-black/60" : "bg-black/40"}`}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl font-medium drop-shadow-md max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Optional decorative elements */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-16 ${
          isDark
            ? "bg-gradient-to-t from-black/40 to-transparent"
            : "bg-gradient-to-t from-black/20 to-transparent"
        }`}
      ></div>
    </div>
  );
};

export default HeroSection;
