const aiaMembers = [
  "AIA Local Chapters",
  "AIA International Chapters",
  "AIA State Chapters",
  "AIA Students (AIAS)",
];

const aiaCouncils = [
  "AIA Strategic Council",
  "AIA National Associates Committee (NAC)",
  "AIA Knowledge Advisory Forum (KAF)",
  "AIA Component Executives (CACE)",
  "AIA Young Architects Forum (YAF)",
  "AIA Former Presidents",
];

const aiaBoard = [
  "AIA Board of Directors",
  "AIA Architects Foundation",
  "AIA Board Committees",
  "AIA Trust",
  "AIA Staff",
  "AIA College of Fellows",
];

const Section = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <div className="relative">
    {/* Section label */}
    <div
      className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-center mb-4"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {label}
    </div>

    {/* Items grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
      {items.map((item) => {
        const withoutAIA = item.replace("AIA ", "");
        return (
          <div
            key={item}
            className="group flex items-start gap-2 py-1.5 px-3 rounded-lg transition-all duration-300 hover:bg-white/[0.04]"
          >
            <span
              className="mt-1 block w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-125"
              style={{
                background: "hsl(var(--aia-red))",
                boxShadow: "0 0 6px hsl(var(--aia-red-glow) / 0.5)",
              }}
            />
            <span className="text-[11px] md:text-[12px] font-medium text-foreground/70 leading-[1.5] tracking-[0.02em] group-hover:text-foreground/90 transition-colors duration-300">
              <span style={{ color: "hsl(var(--aia-red) / 0.9)" }}>AIA</span>{" "}
              {withoutAIA}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const AIALeadershipSection = () => {
  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 3%) 30%, hsl(0 0% 2%) 70%, hsl(0 0% 0%) 100%)",
      }}
    >
      {/* Subtle top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, hsl(var(--aia-red) / 0.4) 30%, hsl(var(--aia-red) / 0.6) 50%, hsl(var(--aia-red) / 0.4) 70%, transparent 95%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--aia-red) / 0.04) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-display text-[clamp(24px,5vw,40px)] text-foreground tracking-[0.08em] leading-[1.2] mb-3"
          >
            The{" "}
            <span
              className="relative"
              style={{ color: "hsl(var(--aia-red))" }}
            >
              AIA
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.6), transparent)",
                }}
              />
            </span>{" "}
            Leadership + Network
          </h2>
          <div
            className="w-24 h-[2px] mx-auto"
            style={{
              background:
                "repeating-linear-gradient(90deg, hsl(var(--aia-red)) 0px, hsl(var(--aia-red)) 4px, transparent 4px, transparent 8px)",
            }}
          />
        </div>

        {/* Glass container */}
        <div
          className="relative rounded-2xl p-6 md:p-10 overflow-hidden"
          style={{
            background: "hsl(0 0% 4% / 0.6)",
            backdropFilter: "blur(24px) saturate(1.6)",
            WebkitBackdropFilter: "blur(24px) saturate(1.6)",
            border: "1px solid hsl(var(--glass-border))",
            boxShadow:
              "inset 0 1px 0 hsl(0 0% 100% / 0.08), inset 0 -1px 0 hsl(0 0% 0% / 0.3), 0 16px 64px hsl(0 0% 0% / 0.5)",
          }}
        >
          {/* Shine */}
          <div
            className="absolute top-0 left-0 w-[300px] h-[120px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top left, hsl(var(--aia-red) / 0.08), transparent 70%)",
            }}
          />

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            <Section label="Members" items={aiaMembers} />

            <div
              className="h-px opacity-40"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.5), transparent)",
              }}
            />

            <Section label="Councils & Forums" items={aiaCouncils} />

            <div
              className="h-px opacity-40"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.5), transparent)",
              }}
            />

            <Section label="Board & Governance" items={aiaBoard} />
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, hsl(var(--aia-red) / 0.3) 50%, transparent 90%)",
        }}
      />
    </section>
  );
};

export default AIALeadershipSection;
