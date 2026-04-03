import { useEffect, useState, useRef } from "react";
import portraitImage from "@/assets/raya-ani-portrait.png";
import buildingImage from "@/assets/building.png";

const buildCards = [
  {
    title: "FUTURE SYSTEMS",
    sub: "Intelligence",
    items: ["Digital Fluency", "AI Integration", "Regenerative Knowledge", "Evolving Practice Models"],
    top: "8%",
    delay: 4.6,
    side: "left" as const,
  },
  {
    title: "ENVELOPE",
    sub: "Advocacy",
    items: ["Policy Leadership", "Value of Architects", "Strategic Partnerships", "Procurement Access"],
    top: "30%",
    delay: 3.4,
    side: "right" as const,
  },
  {
    title: "STRUCTURE",
    sub: "Alignment",
    items: ["Institutional Continuity", "Coordinated Systems", "Firm Support", "Shared Capability"],
    top: "52%",
    delay: 2.2,
    side: "left" as const,
  },
  {
    title: "FOUNDATION",
    sub: "Legitimacy",
    items: ["Standards & Ethics", "Governance & Oversight", "Equitable Access", "Public Responsibility"],
    top: "74%",
    delay: 1.2,
    side: "right" as const,
  },
];


const BuildingPage = () => {
  const [revealed, setRevealed] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.3) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (pageRef.current) observer.observe(pageRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    document.getElementById("page1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={pageRef}
      className="relative h-screen w-full overflow-hidden flex-shrink-0 bg-background"
      id="page2"
      onClick={() => setActiveCard(null)}
    >
      {/* Sweep line */}
      <div
        className="absolute top-0 w-[6px] h-full z-[30] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(var(--aia-red)) 30%, hsl(var(--aia-red-glow)) 50%, hsl(var(--aia-red)) 70%, transparent 100%)",
          boxShadow: "0 0 20px 6px rgba(192,57,43,0.7)",
          opacity: revealed ? 1 : 0,
          left: "-6px",
          animation: revealed ? "sweepAcross 0.8s cubic-bezier(0.4,0,0.2,1) forwards" : "none",
        }}
      />


      <div className="absolute inset-0 z-[2] flex items-end md:items-center justify-center pt-0 md:pt-[60px] pointer-events-none">
        <div
          style={{
            height: "100vh",
            width: "auto",
            clipPath: revealed ? undefined : "inset(100% 0% 0% 0%)",
            animation: revealed ? "buildReveal 5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
          }}
          className="max-w-[130%] md:!max-w-[50%]"
        >
          <img
            src={buildingImage}
            alt="Building evolution from foundation to full structure"
            className="h-full w-auto max-w-full object-contain"
            style={{ filter: "brightness(1.1) contrast(1.05)" }}
          />
        </div>
      </div>

      {/* Build stage lines */}
      <div className="absolute inset-0 z-[3] pointer-events-none pt-[60px] flex flex-col justify-around">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-full h-px"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(192,57,43,0) 10%, rgba(192,57,43,0.6) 30%, rgba(192,57,43,0.8) 50%, rgba(192,57,43,0.6) 70%, rgba(192,57,43,0) 90%, transparent 100%)",
              opacity: 0,
              transform: "scaleX(0)",
              transformOrigin: "center",
              animation: revealed ? `linePulse 0.6s ease ${[4.5, 3.4, 2.2, 1]![i]}s forwards` : "none",
            }}
          />
        ))}
      </div>

      {/* Blur overlay for active card */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none transition-all duration-300"
        style={{
          background: activeCard !== null ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        }}
      />

      {/* ALTERNATING CARDS */}
      {buildCards.map((card, i) => (
        <div
          key={card.title}
          className="absolute z-[15] pointer-events-auto"
          style={{
            [card.side === "left" ? "left" : "right"]: "2%",
            top: card.top,
            opacity: 0,
            animation: revealed ? `cardReveal 0.7s ease ${card.delay}s forwards` : "none",
          }}
          onClick={(e) => { e.stopPropagation(); setActiveCard(activeCard === i ? null : i); }}
        >
          <div
            className="relative rounded-xl p-[1.5px] cursor-pointer transition-all duration-300"
            style={{
              background: activeCard === i
                ? "linear-gradient(135deg, rgba(220,60,40,1) 0%, rgba(255,120,80,0.7) 40%, rgba(192,57,43,0.5) 100%)"
                : "linear-gradient(135deg, rgba(192,57,43,0.85) 0%, rgba(120,20,10,0.4) 50%, rgba(192,57,43,0.25) 100%)",
              boxShadow: activeCard === i
                ? "0 8px 36px rgba(192,57,43,0.6), 0 0 0 1px rgba(255,80,60,0.5)"
                : "0 4px 24px rgba(192,57,43,0.25)",
              transform: activeCard === i ? "scale(1.05)" : "scale(1)",
            }}
          >
            {/* Animated dot */}
            <div
              className="absolute w-[5px] aspect-square rounded-full z-[2]"
              style={{
                background: "rgba(255,110,90,0.95)",
                boxShadow: "0 0 8px rgba(192,57,43,1)",
                animation: "moveDot 4s linear infinite",
              }}
            />

            <div
              className="rounded-[11px] px-3 py-3 relative overflow-hidden w-[160px] md:w-[185px]"
              style={{
                background: "rgba(8,4,4,0.65)",
                backdropFilter: "blur(22px) saturate(1.9)",
                WebkitBackdropFilter: "blur(22px) saturate(1.9)",
                border: "1px solid rgba(255,80,60,0.14)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25)",
              }}
            >
              {/* Shine ray */}
              <div
                className="absolute w-[140px] h-[30px] rounded-full pointer-events-none"
                style={{
                  background: "rgba(255,120,100,0.18)",
                  filter: "blur(10px)",
                  transformOrigin: "10%",
                  top: 0, left: 0,
                  transform: "rotate(40deg)",
                }}
              />
              {/* Corner lines */}
              <div className="absolute w-full h-px" style={{ top: "12%", left: 0, background: "linear-gradient(90deg, rgba(192,57,43,0.6), rgba(192,57,43,0.05))" }} />
              <div className="absolute w-full h-px" style={{ bottom: "12%", left: 0, background: "linear-gradient(90deg, rgba(192,57,43,0.05), rgba(192,57,43,0.6))" }} />
              <div className="absolute w-px h-full" style={{ left: "12%", top: 0, background: "linear-gradient(180deg, rgba(192,57,43,0.6), rgba(192,57,43,0.05))" }} />
              <div className="absolute w-px h-full" style={{ right: "12%", top: 0, background: "linear-gradient(180deg, rgba(192,57,43,0.05), rgba(192,57,43,0.6))" }} />

              <div className="text-[11px] md:text-[13px] font-black tracking-[0.16em] uppercase text-foreground text-center mb-0.5 relative z-[1]" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                {card.title}
              </div>
              <div className="text-[9px] md:text-[10px] font-medium tracking-[0.1em] text-center mb-2 relative z-[1]" style={{ color: "rgba(255,140,120,0.95)" }}>
                ({card.sub})
              </div>
              <div className="h-[2px] mb-2 opacity-60" style={{ background: "repeating-linear-gradient(90deg, rgba(192,57,43,1) 0px, rgba(192,57,43,1) 4px, transparent 4px, transparent 8px)" }} />
              <div className="flex flex-col gap-0.5 relative z-[1]">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="text-[9px] md:text-[10px] font-medium text-foreground/85 pl-3 relative leading-[1.6] tracking-[0.04em]"
                    style={{ borderBottom: "1px solid rgba(192,57,43,0.12)" }}
                  >
                    <span className="absolute left-0 text-[9px]" style={{ color: "rgba(192,57,43,0.9)" }}>▪</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connector line toward building */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-px"
            style={{
              [card.side === "left" ? "right" : "left"]: "-28px",
              width: "26px",
              background: card.side === "left"
                ? "linear-gradient(90deg, rgba(192,57,43,0.8), transparent)"
                : "linear-gradient(270deg, rgba(192,57,43,0.8), transparent)",
            }}
          />
        </div>
      ))}


      {/* Back to top */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[25] cursor-pointer"
        onClick={scrollToTop}
        style={{
          opacity: 0,
          animation: revealed ? "cardReveal 0.5s ease 5.5s forwards" : "none",
        }}
      >
        <div
          className="w-[42px] h-[42px] rounded-full overflow-hidden transition-transform duration-200 hover:scale-110"
          style={{
            border: "2px solid rgba(255,255,255,0.4)",
            boxShadow: "0 0 0 1px rgba(192,57,43,0.4), 0 4px 16px rgba(0,0,0,0.6)",
          }}
        >
          <img
            src={portraitImage}
            alt="Back to top"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 8%", mixBlendMode: "lighten", filter: "brightness(1.3)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingPage;
