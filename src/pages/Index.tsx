import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroPage from "@/components/HeroPage";
import BuildingPage from "@/components/BuildingPage";
import AIALeadershipSection from "@/components/AIALeadershipSection";
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
        className="h-screen overflow-y-auto"
      >
        <div className="snap-start snap-always">
          <HeroPage />
        </div>
        <div className="snap-start snap-always">
          <BuildingPage />
        </div>
        <div className="snap-start snap-always">
          <AIALeadershipSection />
        </div>
      </div>
      <Ticker />
    </div>
  );
};

export default Index;
