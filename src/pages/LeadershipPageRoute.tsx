import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import AIALeadershipSection from "@/components/AIALeadershipSection";
import Ticker from "@/components/Ticker";

const LeadershipPageRoute = () => {
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
        <AIALeadershipSection />
      </div>
      <Ticker />
    </div>
  );
};

export default LeadershipPageRoute;
