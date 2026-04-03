import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroPage from "@/components/HeroPage";
import BuildingPage from "@/components/BuildingPage";
import Ticker from "@/components/Ticker";
import VideoCarousel from "@/components/VideoCarousel";

const Index = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);

  return (
    <div className="bg-background">
      <SiteHeader
        onToggleCarousel={() => setCarouselOpen((p) => !p)}
        carouselOpen={carouselOpen}
      />
      {/* Carousel sits below header */}
      <div className="fixed top-0 left-0 right-0 z-[995]" style={{ paddingTop: "130px" }}>
        <VideoCarousel open={carouselOpen} onClose={() => setCarouselOpen(false)} />
      </div>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>
        <div className="snap-start snap-always">
          <HeroPage />
        </div>
        <div className="snap-start snap-always">
          <BuildingPage />
        </div>
      </div>
      <Ticker />
    </div>
  );
};

export default Index;
