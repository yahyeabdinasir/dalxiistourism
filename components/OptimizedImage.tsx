"use client";
import React from "react";
import Image from "next/image";
import { imageOptimization } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  className = "",
  priority = false,
  quality,
  placeholder = "blur",
  blurDataURL,
  onClick,
  onLoad,
  onError,
}) => {
  // Use optimized settings
  const optimizedQuality = quality ?? imageOptimization.getQuality(priority);
  const optimizedPlaceholder = placeholder === "blur" ? "blur" : "empty";
  const optimizedBlurDataURL = blurDataURL ?? imageOptimization.blurDataURL;
  
  // Generate responsive sizes if not provided
  const optimizedSizes = sizes ?? imageOptimization.generateSizes();

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={optimizedSizes}
      className={className}
      priority={priority}
      quality={optimizedQuality}
      placeholder={optimizedPlaceholder}
      blurDataURL={optimizedBlurDataURL}
      onClick={onClick}
      onLoad={onLoad}
      onError={onError}
      loading={priority ? "eager" : "lazy"}
    />
  );
};

export default OptimizedImage;
