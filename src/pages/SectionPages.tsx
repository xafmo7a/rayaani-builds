import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import Ticker from "@/components/Ticker";
import SectionHero from "@/components/sections/SectionHero";
import PublicSection from "@/components/sections/PublicSection";

const PlaceholderContent = () => (
  <div className="px-5 md:px-10 py-16 text-center">
    <p className="text-foreground/30 text-[15px]">Content coming soon.</p>
  </div>
);

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
      <Ticker />
    </div>
  );
};

export const AIAPage = () => (
  <SectionPageLayout>
    <SectionHero
      eyebrow="American Institute of Architects"
      title={
        <>
          A vision for <span className="italic text-foreground/60">architecture</span><br />and its future
        </>
      }
      label="AIA"
      sublabel="Presidential Candidate"
    />
    <PlaceholderContent />
  </SectionPageLayout>
);

export const PublicPage = () => (
  <SectionPageLayout>
    <PublicSection />
  </SectionPageLayout>
);

export const ServicesPage = () => (
  <SectionPageLayout>
    <SectionHero
      eyebrow="Community Service"
      title={
        <>
          Design as an <span className="italic text-foreground/60">act</span><br />of service
        </>
      }
      label="SVC"
      sublabel="Pro Bono & Advocacy"
    />
    <PlaceholderContent />
  </SectionPageLayout>
);
