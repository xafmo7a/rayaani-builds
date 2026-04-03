import { useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import Ticker from "@/components/Ticker";

const PlaceholderPage = ({ title }: { title: string }) => (
  <section
    className="relative w-full min-h-screen pt-[160px] pb-16 overflow-hidden"
    style={{
      background: "radial-gradient(ellipse at 50% 0%, hsl(var(--aia-red) / 0.04) 0%, transparent 50%), linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 3%) 30%, hsl(0 0% 2%) 70%, hsl(0 0% 0%) 100%)",
    }}
  >
    <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10 text-center">
      <h1 className="font-display text-[clamp(32px,6vw,52px)] text-foreground tracking-[0.06em] mb-4">
        {title}
      </h1>
      <p className="text-foreground/40 text-[15px]">Content coming soon.</p>
    </div>
  </section>
);

const BlogPageLayout = ({ title }: { title: string }) => {
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
        <PlaceholderPage title={title} />
      </div>
      <Ticker />
    </div>
  );
};

export const AIAPage = () => <BlogPageLayout title="AIA" />;
export const PublicPage = () => <BlogPageLayout title="Public" />;
export const ServicesPage = () => <BlogPageLayout title="Services" />;
