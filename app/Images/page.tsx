import Gallery from "@/components/Gellery";
import HeroSection from "@/components/HeroSection";

export default function ImagesPage() {
  return (
    <div>
      <HeroSection
        title="Gallery Collection"
        subtitle="Discover breathtaking photos and videos from our adventures around the world"
      />
      <div className="pt-16">
        <Gallery defaultMediaType="images" />
      </div>
    </div>
  );
} 