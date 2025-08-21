import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Award from "@/components/award";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ServicesPage from "@/components/ServicesPage";

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <Award />
      <Destinations />
      {/* <About /> */}
      <ServicesPage />

      <Testimonials />
      {/* <Contact /> */}
    </>
  );
}
