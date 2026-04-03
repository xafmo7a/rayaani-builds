import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    label: "Members",
    icon: "◆",
    items: [
      { name: "Local Chapters", desc: "Community-level leadership" },
      { name: "International Chapters", desc: "Global architectural reach" },
      { name: "State Chapters", desc: "Statewide coordination" },
      { name: "Students (AIAS)", desc: "Next-generation architects" },
    ],
  },
  {
    label: "Councils & Forums",
    icon: "◈",
    items: [
      { name: "Strategic Council", desc: "Long-term vision & planning" },
      { name: "National Associates Committee", desc: "NAC representation" },
      { name: "Knowledge Advisory Forum", desc: "KAF research & insight" },
      { name: "Component Executives", desc: "CACE operations" },
      { name: "Young Architects Forum", desc: "YAF emerging leaders" },
      { name: "Former Presidents", desc: "Institutional memory" },
    ],
  },
  {
    label: "Board & Governance",
    icon: "◇",
    items: [
      { name: "Board of Directors", desc: "Executive oversight" },
      { name: "Architects Foundation", desc: "Philanthropic mission" },
      { name: "Board Committees", desc: "Focused governance" },
      { name: "AIA Trust", desc: "Member protection" },
      { name: "Staff", desc: "Operational excellence" },
      { name: "College of Fellows", desc: "Distinguished service" },
    ],
  },
];

const SectionCard = ({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) => (
  <div className="relative group">
    {/* Section header */}
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[16px] md:text-[18px] flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, hsl(var(--aia-red) / 0.25), hsl(var(--aia-red) / 0.08))",
          border: "1px solid hsl(var(--aia-red) / 0.3)",
          boxShadow: "0 4px 16px hsl(var(--aia-red) / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.1)",
          color: "hsl(var(--aia-red))",
        }}
      >
        {section.icon}
      </div>
      <div>
        <h3 className="font-display text-[16px] md:text-[20px] text-foreground tracking-[0.06em] leading-[1.2]">
          {section.label}
        </h3>
        <div
          className="w-12 h-[2px] mt-1.5 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--aia-red)), hsl(var(--aia-red) / 0.2))",
          }}
        />
      </div>
    </div>

    {/* Item cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
      {section.items.map((item, i) => (
        <div
          key={item.name}
          className="group/card relative rounded-xl p-3.5 md:p-4 cursor-default transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "hsl(0 0% 5% / 0.7)",
            border: "1px solid hsl(0 0% 100% / 0.06)",
            boxShadow: "0 2px 8px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "1px solid hsl(4, 75%, 38%, 0.3)";
            e.currentTarget.style.boxShadow = "0 4px 20px hsl(4, 75%, 38%, 0.15), inset 0 1px 0 hsl(0, 0%, 100%, 0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid hsl(0, 0%, 100%, 0.06)";
            e.currentTarget.style.boxShadow = "0 2px 8px hsl(0, 0%, 0%, 0.3), inset 0 1px 0 hsl(0, 0%, 100%, 0.04)";
          }}
        >
          {/* Card accent line */}
          <div
            className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.5), transparent)",
            }}
          />

          <div className="flex items-start gap-3">
            {/* Number badge */}
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold tracking-wider"
              style={{
                background: "hsl(var(--aia-red) / 0.12)",
                color: "hsl(var(--aia-red))",
                border: "1px solid hsl(var(--aia-red) / 0.15)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  className="text-[10px] font-bold tracking-[0.15em] uppercase"
                  style={{ color: "hsl(var(--aia-red) / 0.8)" }}
                >
                  AIA
                </span>
              </div>
              <div className="text-[13px] md:text-[14px] font-bold text-foreground/90 leading-[1.3] tracking-[0.01em]">
                {item.name}
              </div>
              <div className="text-[10px] md:text-[11px] font-medium text-foreground/40 mt-1 tracking-[0.03em]">
                {item.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

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
          <div className="flex items-center justify-center gap-3 mb-3">
            <button
              onClick={() => navigate("/")}
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 flex-shrink-0"
              style={{
                background: "hsl(var(--aia-red) / 0.12)",
                border: "1px solid hsl(var(--aia-red) / 0.25)",
                boxShadow: "0 2px 8px hsl(var(--aia-red) / 0.1)",
              }}
            >
              <ArrowLeft className="w-4 h-4" style={{ color: "hsl(var(--aia-red))" }} />
            </button>
            <div
              className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase"
              style={{ color: "hsl(var(--aia-red) / 0.7)" }}
            >
              Organizational Structure
            </div>
          </div>
          <h2 className="font-display text-[clamp(26px,5vw,44px)] text-foreground tracking-[0.06em] leading-[1.15] mb-4">
            The{" "}
            <span className="relative inline-block" style={{ color: "hsl(var(--aia-red))" }}>
              AIA
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--aia-red)), hsl(var(--aia-red-glow)), hsl(var(--aia-red)))",
                  boxShadow: "0 0 8px hsl(var(--aia-red) / 0.4)",
                }}
              />
            </span>{" "}
            Leadership + Network
          </h2>
          <div
            className="w-20 h-[2px] mx-auto rounded-full"
            style={{
              background: "repeating-linear-gradient(90deg, hsl(var(--aia-red)) 0px, hsl(var(--aia-red)) 4px, transparent 4px, transparent 9px)",
            }}
          />
        </div>

        {/* Main glass container */}
        <div
          className="relative rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 overflow-hidden"
          style={{
            background: "hsl(0 0% 3% / 0.7)",
            backdropFilter: "blur(30px) saturate(1.6)",
            WebkitBackdropFilter: "blur(30px) saturate(1.6)",
            border: "1px solid hsl(0 0% 100% / 0.07)",
            boxShadow:
              "0 24px 80px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.06), inset 0 -1px 0 hsl(0 0% 0% / 0.3)",
          }}
        >
          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l rounded-tl-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r rounded-tr-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l rounded-bl-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r rounded-br-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />

          {/* Shine */}
          <div
            className="absolute top-0 left-0 w-[400px] h-[200px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at top left, hsl(var(--aia-red) / 0.05), transparent 70%)",
            }}
          />

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {sections.map((section, i) => (
              <div key={section.label}>
                <SectionCard section={section} index={i} />
                {i < sections.length - 1 && (
                  <div
                    className="h-px mt-8 md:mt-10"
                    style={{
                      background: "linear-gradient(90deg, transparent 5%, hsl(var(--aia-red) / 0.2) 30%, hsl(var(--aia-red) / 0.35) 50%, hsl(var(--aia-red) / 0.2) 70%, transparent 95%)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
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
