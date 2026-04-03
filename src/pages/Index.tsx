import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroPage from "@/components/HeroPage";
import BuildingPage from "@/components/BuildingPage";
import Ticker from "@/components/Ticker";

const Index = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background">
      <SiteHeader
        onToggleCarousel={() => setCarouselOpen((p) => !p)}
        carouselOpen={carouselOpen}
        scrollRef={scrollRef}
      />
      <div
        ref={scrollRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
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
