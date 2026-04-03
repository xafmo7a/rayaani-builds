
const cards = [
  {
    icon: "◆",
    title: "Membership",
    text: "Decades of active AIA membership and leadership across local and national chapters.",
  },
  {
    icon: "◈",
    title: "Vision",
    text: "A future where architects lead public discourse and shape policy at every level.",
  },
  {
    icon: "◇",
    title: "Network",
    text: "Connected to AIA chapters, councils, and international bodies worldwide.",
  },
];

const AIALeadershipSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center pt-[160px] pb-16 md:pb-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(var(--aia-red) / 0.06) 0%, transparent 50%), linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 3%) 30%, hsl(0 0% 2%) 70%, hsl(0 0% 0%) 100%)",
      }}
    >
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, hsl(var(--aia-red) / 0.5) 30%, hsl(var(--aia-red) / 0.7) 50%, hsl(var(--aia-red) / 0.5) 70%, transparent 95%)",
        }}
      />

      {/* Side accents */}
      <div
        className="absolute top-[10%] left-0 w-px h-[80%] hidden md:block"
        style={{
          background: "linear-gradient(180deg, transparent, hsl(var(--aia-red) / 0.2) 30%, hsl(var(--aia-red) / 0.2) 70%, transparent)",
        }}
      />
      <div
        className="absolute top-[10%] right-0 w-px h-[80%] hidden md:block"
        style={{
          background: "linear-gradient(180deg, transparent, hsl(var(--aia-red) / 0.2) 30%, hsl(var(--aia-red) / 0.2) 70%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-10">
        {/* Title block */}
        <div className="text-center mb-10 md:mb-14">
          <div
            className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "hsl(var(--aia-red) / 0.7)" }}
          >
            AIA
          </div>
          <h2 className="font-display text-[clamp(26px,5vw,44px)] text-foreground tracking-[0.06em] leading-[1.15] mb-4">
            Leadership &{" "}
            <span className="relative inline-block" style={{ color: "hsl(var(--aia-red))" }}>
              Commitment
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--aia-red)), hsl(var(--aia-red-glow)), hsl(var(--aia-red)))",
                  boxShadow: "0 0 8px hsl(var(--aia-red) / 0.4)",
                }}
              />
            </span>
          </h2>
          <p className="text-foreground/50 text-[13px] md:text-[15px] max-w-[520px] mx-auto leading-relaxed">
            to the American Institute of Architects
          </p>
          <div
            className="w-20 h-[2px] mx-auto rounded-full mt-5"
            style={{
              background: "repeating-linear-gradient(90deg, hsl(var(--aia-red)) 0px, hsl(var(--aia-red)) 4px, transparent 4px, transparent 9px)",
            }}
          />
        </div>

        {/* Cards — centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative group rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:scale-[1.03]"
              style={{
                background: "hsl(0 0% 4% / 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid hsl(0 0% 100% / 0.07)",
                boxShadow:
                  "0 16px 48px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid hsl(4, 75%, 38%, 0.35)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px hsl(4, 75%, 38%, 0.15), inset 0 1px 0 hsl(0, 0%, 100%, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid hsl(0, 0%, 100%, 0.07)";
                e.currentTarget.style.boxShadow =
                  "0 16px 48px hsl(0, 0%, 0%, 0.4), inset 0 1px 0 hsl(0, 0%, 100%, 0.06)";
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.6), transparent)",
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center text-[22px] mb-5"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--aia-red) / 0.2), hsl(var(--aia-red) / 0.06))",
                  border: "1px solid hsl(var(--aia-red) / 0.25)",
                  boxShadow: "0 4px 20px hsl(var(--aia-red) / 0.12)",
                  color: "hsl(var(--aia-red))",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[18px] md:text-[22px] text-foreground tracking-[0.04em] mb-3 font-semibold">
                {card.title}
              </h3>

              {/* Divider */}
              <div
                className="w-10 h-[2px] mx-auto rounded-full mb-4"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--aia-red) / 0.6), hsl(var(--aia-red) / 0.15))",
                }}
              />

              {/* Description */}
              <p className="text-[12.5px] md:text-[13.5px] text-foreground/45 leading-[1.8] font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 10%, hsl(var(--aia-red) / 0.3) 50%, transparent 90%)",
        }}
      />
    </section>
  );
};

export default AIALeadershipSection;
