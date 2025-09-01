import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import PerformanceMonitor from "@/components/PerformanceMonitor";

// Optimized font loading with better performance
const yanone = localFont({
  src: [
    {
      path: "../public/fonts/YanoneKaffeesatz-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YanoneKaffeesatz-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-yanone",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Dalxiis Tourism - Discover Amazing Destinations",
  description:
    "Discover amazing destinations with Dalxiis Tourism (kudalxiis dhulkaaga hooyo ee Somalia iyo fudeediyaha safarkaaga ee dalxiis tourism)",
  keywords: ["tourism", "Somalia", "travel", "destinations", "Puntland", "adventure"],
  authors: [{ name: "Dalxiis Tourism" }],
  creator: "Dalxiis Tourism",
  publisher: "Dalxiis Tourism",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dalxiistourism.com"),
  openGraph: {
    title: "Dalxiis Tourism - Discover Amazing Destinations",
    description: "Discover amazing destinations with Dalxiis Tourism",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dalxiis Tourism - Discover Amazing Destinations",
    description: "Discover amazing destinations with Dalxiis Tourism",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${yanone.variable} ${yanone.className} font-sans antialiased`}
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/dalxiis2.png" as="image" />
        <link rel="preload" href="/images/Laas.jpg" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="min-h-screen relative bg-white text-gray-900">
          <Navbar />
          <main className="relative z-10">{children}</main>
          <WhatsAppChat />
          <PerformanceMonitor />
          <Footer />
        </div>
      </body>
    </html>
  );
}
