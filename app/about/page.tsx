import HeroSection from "@/components/HeroSection";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        title="About  Us"
        subtitle="Discover the reasons to choose us for your next adventure"
      />
      <div className="">
        {" "}
        <About />
      </div>
    </div>
  );
}
