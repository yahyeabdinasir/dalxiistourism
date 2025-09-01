import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization utilities
export const imageOptimization = {
  // Default blur data URL for placeholders
  blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  
  // Generate responsive sizes for different screen sizes
  getResponsiveSizes: (containerWidth: number) => {
    if (containerWidth <= 640) return "100vw";
    if (containerWidth <= 1024) return "80vw";
    return "1200px";
  },
  
  // Get optimal quality based on image type
  getQuality: (isPriority: boolean = false) => {
    return isPriority ? 95 : 85;
  },
  
  // Get placeholder type based on image
  getPlaceholder: (isPriority: boolean = false) => {
    return isPriority ? "blur" : "blur";
  },
  
  // Generate sizes string for responsive images
  generateSizes: (breakpoints: { [key: string]: string } = {}) => {
    const defaultBreakpoints = {
      "(max-width: 640px)": "100vw",
      "(max-width: 1024px)": "80vw",
      "(max-width: 1536px)": "1200px",
      ...breakpoints
    };
    
    return Object.entries(defaultBreakpoints)
      .map(([query, size]) => `${query} ${size}`)
      .join(", ");
  }
};

// Performance monitoring utilities
export const performanceUtils = {
  // Measure image load time
  measureImageLoad: (src: string): Promise<number> => {
    return new Promise((resolve) => {
      const start = globalThis.performance.now();
      const img = new Image();
      img.onload = () => {
        const end = globalThis.performance.now();
        resolve(end - start);
      };
      img.onerror = () => resolve(0);
      img.src = src;
    });
  },
  
  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },
  
  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
};

// Image preloading utilities
export const imagePreloader = {
  // Preload critical images
  preloadImage: (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
      img.src = src;
    });
  },
  
  // Preload multiple images
  preloadImages: async (sources: string[]): Promise<void[]> => {
    return Promise.all(sources.map(src => imagePreloader.preloadImage(src)));
  },
  
  // Preload critical images for the app
  preloadCriticalImages: async (): Promise<void> => {
    const criticalImages = [
      "/images/dalxiis2.png",
      "/images/Laas.jpg",
      "/images/caluula1.jpg"
    ];
    
    try {
      await imagePreloader.preloadImages(criticalImages);
      console.log("Critical images preloaded successfully");
    } catch (error) {
      console.warn("Some critical images failed to preload:", error);
    }
  }
};
