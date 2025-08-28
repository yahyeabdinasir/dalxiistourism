import dynamic from 'next/dynamic';
import React from 'react';

// Performance optimization utilities

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Debounce function for search inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Preload multiple images
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

// Optimized scroll handler
export function createScrollHandler(
  callback: (scrollY: number) => void,
  throttleMs: number = 16
): (event: Event) => void {
  return throttle(() => {
    const scrollY = window.scrollY;
    callback(scrollY);
  }, throttleMs);
}

// Check if element is in viewport
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Optimized resize handler
export function createResizeHandler(
  callback: (width: number, height: number) => void,
  throttleMs: number = 100
): (event: Event) => void {
  return throttle(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    callback(width, height);
  }, throttleMs);
}

// Add optimized event listener
export function addOptimizedEventListener(
  element: Element | Window,
  event: string,
  handler: EventListener,
  options: AddEventListenerOptions = {}
): () => void {
  const optimizedHandler = throttle(handler, 16);
  element.addEventListener(event, optimizedHandler, options);
  
  return () => {
    element.removeEventListener(event, optimizedHandler, options);
  };
}

// Batch DOM updates
export function batchDOMUpdates(updates: (() => void)[]): void {
  if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    requestAnimationFrame(() => {
      updates.forEach(update => update());
    });
  } else {
    updates.forEach(update => update());
  }
}

// Utility function for conditional classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Lazy load component with error boundary
export function lazyLoadComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType<any>
) {
  return dynamic(importFunc, {
    loading: fallback ? () => React.createElement(fallback) : undefined,
    ssr: true,
  });
}

// Performance monitoring
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
  } else {
    fn();
  }
}

// Memory optimization - cleanup function
export function cleanupResources(): void {
  // Clear any stored data that's no longer needed
  if (typeof window !== 'undefined') {
    // Clear any cached data
    sessionStorage.clear();
    
    // Force garbage collection if available
    if ('gc' in window) {
      (window as any).gc();
    }
  }
}

// Optimize images for different screen sizes
export function getOptimizedImageSrc(
  src: string,
  width: number,
  quality: number = 75
): string {
  // If using Next.js Image optimization
  if (src.startsWith('/')) {
    return `${src}?w=${width}&q=${quality}`;
  }
  return src;
}

// Prefetch critical routes
export function prefetchRoute(href: string): void {
  if (typeof window !== 'undefined' && 'prefetch' in window) {
    (window as any).prefetch(href);
  }
}

// Optimize fonts loading
export function optimizeFontLoading(): void {
  if (typeof window !== 'undefined' && 'fonts' in document) {
    (document as any).fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
}

// Reduce layout thrashing
export function batchReadWrite(read: () => void, write: () => void): void {
  read();
  if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    requestAnimationFrame(write);
  } else {
    write();
  }
}
