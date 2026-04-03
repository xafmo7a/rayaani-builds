import { useEffect, useState, useRef } from "react";
import portraitImage from "@/assets/raya-ani-portrait.png";

const BuildingPage = () => {
  const [revealed, setRevealed] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.3) {
            setRevealed(true);
            // Reset after animation completes so replay works
            setTimeout(() => setRevealed(false), 6000);
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

  const levels = [
    { id: "hb1", title: "FUTURE SYSTEMS", sub: "Innovation", top: "10vh", align: "left" },
    { id: "hb2", title: "ENVELOPE", sub: "Performance", top: "30vh", align: "right" },
    { id: "hb3", title: "STRUCTURE", sub: "Engineering", top: "50vh", align: "left" },
    { id: "hb4", title: "FOUNDATION", sub: "Core Values", top: "70vh", align: "right" },
  ];

  return (
    <div
      ref={pageRef}
      className="relative h-screen w-full overflow-hidden flex-shrink-0 bg-background"
      id="page2"
    >
      {/* Sweep line */}
      <div
        className="absolute top-0 w-[6px] h-full z-[30] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, hsl(var(--aia-red)) 30%, hsl(var(--aia-red-glow)) 50%, hsl(var(--aia-red)) 70%, transparent 100%)",
          boxShadow: "0 0 20px 6px rgba(192,57,43,0.7)",
          opacity: revealed ? 1 : 0,
          left: "-6px",
          animation: revealed ? "sweepAcross 0.8s cubic-bezier(0.4,0,0.2,1) forwards" : "none",
        }}
      />

      {/* Building placeholder */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center pt-[60px]">
        <div
          className="relative"
          style={{
            height: "92vh",
            width: "auto",
            maxWidth: "96%",
            clipPath: revealed ? undefined : "inset(100% 0% 0% 0%)",
            animation: revealed ? "buildReveal 5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
          }}
        >
          {/* Placeholder building silhouette */}
          <div className="h-full w-[300px] md:w-[400px] flex flex-col items-center justify-end relative">
            <div
              className="w-full h-full rounded-t-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, rgba(192,57,43,0.1) 0%, rgba(192,57,43,0.05) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-foreground/20 text-sm tracking-[0.2em] uppercase text-center px-4">
                Building Image<br />Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Level cards */}
      {levels.map((level, i) => (
        <div
          key={level.id}
          className="absolute left-0 right-0 z-[10] flex items-center pointer-events-none"
          style={{
            top: level.top,
            height: "20vh",
            justifyContent: level.align === "left" ? "flex-start" : "flex-end",
            paddingLeft: level.align === "left" ? "clamp(10px, 5vw, calc(50vw - 320px))" : undefined,
            paddingRight: level.align === "right" ? "clamp(10px, 5vw, calc(50vw - 320px))" : undefined,
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(8px)",
            transition: `opacity 0.7s ease ${1.2 + i * 0.3}s, transform 0.7s ease ${1.2 + i * 0.3}s`,
          }}
        >
          <div
            className="pointer-events-auto w-[185px] rounded-xl p-[1.5px] cursor-pointer transition-all duration-200 hover:scale-105 relative"
            style={{
              background: "var(--gradient-red)",
              boxShadow: "0 4px 24px rgba(192,57,43,0.25)",
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
              className="rounded-[11px] px-3.5 py-4 relative overflow-hidden"
              style={{
                background: "rgba(35,5,3,0.28)",
                backdropFilter: "blur(22px) saturate(1.9)",
                WebkitBackdropFilter: "blur(22px) saturate(1.9)",
                border: "1px solid rgba(255,80,60,0.14)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25)",
              }}
            >
              {/* Ray */}
              <div
                className="absolute w-[140px] h-[30px] rounded-full pointer-events-none"
                style={{
                  background: "rgba(255,120,100,0.22)",
                  filter: "blur(10px)",
                  transformOrigin: "10%",
                  top: 0,
                  left: 0,
                  transform: "rotate(40deg)",
                }}
              />
              <div className="text-[13px] font-black tracking-[0.18em] uppercase text-foreground text-center mb-1 relative z-[1]" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                {level.title}
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-center relative z-[1]" style={{ color: "rgba(255,160,140,1)" }}>
                {level.sub}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Back to top */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[25] cursor-pointer"
        onClick={scrollToTop}
        style={{
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.5s ease 1.9s",
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
