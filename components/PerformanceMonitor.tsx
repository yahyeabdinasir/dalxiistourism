"use client";
import React, { useEffect, useState } from "react";
import { performanceUtils, imagePreloader } from "@/lib/utils";

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    pageLoadTime: 0,
    imageLoadTimes: [] as number[],
    criticalImagesLoaded: false,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);
    
    // Measure page load time
    const pageLoadTime = performance.now();
    setMetrics(prev => ({ ...prev, pageLoadTime }));

    // Preload critical images
    imagePreloader.preloadCriticalImages().then(() => {
      setMetrics(prev => ({ ...prev, criticalImagesLoaded: true }));
    });

    // Monitor image loading performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "resource" && entry.name.includes("/images/")) {
          const loadTime = entry.duration;
          setMetrics(prev => ({
            ...prev,
            imageLoadTimes: [...prev.imageLoadTimes, loadTime]
          }));
        }
      });
    });

    observer.observe({ entryTypes: ["resource"] });

    return () => observer.disconnect();
  }, []);

  // Only show in development and after client-side hydration
  if (process.env.NODE_ENV !== "development" || !isClient) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Page Load: {metrics.pageLoadTime.toFixed(2)}ms</div>
      <div>Images Loaded: {metrics.imageLoadTimes.length}</div>
      <div>Avg Image Load: {metrics.imageLoadTimes.length > 0 
        ? (metrics.imageLoadTimes.reduce((a, b) => a + b, 0) / metrics.imageLoadTimes.length).toFixed(2)
        : "0"}ms</div>
      <div>Critical Images: {metrics.criticalImagesLoaded ? "✅" : "⏳"}</div>
    </div>
  );
};

export default PerformanceMonitor;
