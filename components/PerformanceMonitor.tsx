"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;

  const getScore = (metric: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (metric === null) return 'N/A';
    if (metric <= thresholds.good) return '🟢 Good';
    if (metric <= thresholds.needsImprovement) return '🟡 Needs Improvement';
    return '🔴 Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>
          FCP: {metrics.fcp?.toFixed(0)}ms {getScore(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
        </div>
        <div>
          LCP: {metrics.lcp?.toFixed(0)}ms {getScore(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
        </div>
        <div>
          FID: {metrics.fid?.toFixed(0)}ms {getScore(metrics.fid, { good: 100, needsImprovement: 300 })}
        </div>
        <div>
          CLS: {metrics.cls?.toFixed(3)} {getScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
        </div>
        <div>
          TTFB: {metrics.ttfb?.toFixed(0)}ms {getScore(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
        </div>
      </div>
    </div>
  );
}
