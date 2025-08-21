import Gallery from "@/components/Gellery";
import HeroSection from "@/components/HeroSection";

export default function VideosPage() {
  return (
    <div>
      <HeroSection
        title="Video Collection"
        subtitle="Experience our adventures through stunning video content"
      />
      <div className="pt-16">
        <Gallery defaultMediaType="videos" />
      </div>
    </div>
  );
} 