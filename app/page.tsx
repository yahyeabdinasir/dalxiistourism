import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Award from "@/components/award";

// Dynamically import heavy components for better performance
const Destinations = dynamic(() => import("@/components/Destinations"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading destinations...</div>,
  ssr: true,
});

const ServicesPage = dynamic(() => import("@/components/ServicesPage"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading services...</div>,
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading testimonials...</div>,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <Award />
      <Destinations />
      <ServicesPage />
      <Testimonials />
    </>
  );
}
