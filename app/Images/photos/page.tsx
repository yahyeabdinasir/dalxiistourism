import Gallery from "@/components/Gellery";
import HeroSection from "@/components/HeroSection";

export default function GallerySubPage() {
  return (
    <div>
      <HeroSection
        title="Photo Collection"
        subtitle="Explore our stunning collection of travel photography"
      />
      <div className="pt-16">
        <Gallery defaultMediaType="images" />
      </div>
    </div>
  );
}
