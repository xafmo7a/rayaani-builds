import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import BuildingPage from "@/components/BuildingPage";
import Ticker from "@/components/Ticker";

const BuildingPageRoute = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background">
      <SiteHeader
        onToggleCarousel={() => setCarouselOpen((p) => !p)}
        carouselOpen={carouselOpen}
        scrollRef={scrollRef}
      />
      <div ref={scrollRef} className="h-screen overflow-y-auto">
        <BuildingPage />
      </div>
      <Ticker />
    </div>
  );
};

export default BuildingPageRoute;
