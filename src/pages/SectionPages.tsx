import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";

import SectionHero from "@/components/sections/SectionHero";
import PublicSection from "@/components/sections/PublicSection";
import AIASection from "@/components/sections/AIASection";
import ServiceSection from "@/components/ServiceSection";

const SectionPageLayout = ({ children }: { children: React.ReactNode }) => {
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
        <div className="pt-[160px]">{children}</div>
      </div>
      
    </div>
  );
};

export const AIAPage = () => (
  <SectionPageLayout>
    <AIASection />
  </SectionPageLayout>
);

export const PublicPage = () => (
  <SectionPageLayout>
    <PublicSection />
  </SectionPageLayout>
);

export const ServicesPage = () => (
  <SectionPageLayout>
    <ServiceSection />
  </SectionPageLayout>
);
