import portraitImage from "@/assets/raya-ani-portrait.png";

const HeroPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex-shrink-0 bg-background" id="page1">
      {/* Portrait */}
      <div className="absolute inset-0 z-[1] flex justify-center items-start pt-[140px]">
        <img
          src={portraitImage}
          alt="Raya Ani"
          className="h-[calc(100%-140px)] w-auto max-w-full object-contain object-top"
          style={{ filter: "brightness(1.05) contrast(1.02)" }}
        />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.92) 62%, rgba(0,0,0,0.98) 100%)",
        }}
      />

      {/* Text block */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] flex flex-col items-center text-center px-7 pb-[50px]">
        {/* Name */}
        <h1
          className="font-display font-normal text-[clamp(38px,10vw,58px)] text-foreground tracking-[0.14em] leading-[1.1] mb-2.5 opacity-0"
          style={{ animation: "fadeUp 0.9s ease 0.4s forwards" }}
        >
          RAYA ANI
        </h1>

        {/* Candidate badge */}
        <div
          className="relative p-[3px] rounded-[0.9em] mb-5 cursor-default opacity-0"
          style={{
            animation: "borderSpin 3s linear infinite, fadeUp 0.9s ease 0.7s forwards",
          }}
        >
          <div
            className="absolute inset-0 m-auto rounded-[0.9em] -z-[1]"
            style={{
              background: "linear-gradient(90deg, hsl(var(--aia-red)), hsl(var(--aia-red-glow)))",
              animation: "glowPulse 2.4s ease-in-out infinite",
            }}
          />
          <div className="bg-background rounded-[0.65em] px-[22px] py-2.5 flex flex-col items-center gap-1">
            <span className="font-light text-[clamp(13px,3.8vw,17px)] text-foreground/90 tracking-[0.07em]">
              Candidate
            </span>
            <span className="font-light text-[clamp(11px,3vw,14px)] text-foreground/65 tracking-[0.04em]">
              AIA President Elect | President 2027|2028
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-11 h-px mb-5 opacity-0"
          style={{
            background: "rgba(192,57,43,0.9)",
            animation: "fadeUp 0.9s ease 1.0s forwards",
          }}
        />

        {/* Tagline */}
        <p
          className="font-bold text-[clamp(15px,4.2vw,21px)] text-foreground tracking-[0.12em] uppercase leading-[1.35] opacity-0"
          style={{ animation: "fadeUp 0.9s ease 1.2s forwards" }}
        >
          ARCHITECTS at PUBLIC SERVICE
        </p>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-3.5 left-1/2 z-[5] flex flex-col items-center gap-1"
        style={{
          animation: "bounce 2s ease-in-out 2s infinite",
          opacity: 0,
          animationFillMode: "forwards",
          transform: "translateX(-50%)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
};

export default HeroPage;
