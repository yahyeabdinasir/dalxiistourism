"use client";
import React, { useMemo } from "react";
import OptimizedImage from "./OptimizedImage";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "/images/Laas.jpg",
  height = "50vh",
}) => {
  // Memoize overlay classes - light mode only
  const overlayClasses = useMemo(() => "bg-black/40", []);
  const gradientClasses = useMemo(
    () => "bg-gradient-to-t from-black/20 to-transparent",
    []
  );

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Optimized background image with Next.js Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={backgroundImage}
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover"
          priority={true}
          quality={85}
          placeholder="blur"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 ${overlayClasses}`}></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl font-medium drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Optional decorative elements */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-16 ${gradientClasses}`}
      ></div>
    </div>
  );
};

export default HeroSection;
