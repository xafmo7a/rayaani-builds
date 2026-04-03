
const memberGroups = [
  {
    title: "AIA Members",
    columns: [
      ["AIA Local Chapters", "AIA State Chapters"],
      ["AIA International Chapters", "AIA Students (AIAS)"],
    ],
  },
  {
    title: null,
    columns: [
      ["AIA Strategic Council", "AIA Knowledge Advisory Forum (KAF)", "AIA Young Architects Forum (YAF)"],
      ["AIA National Associates Committee (NAC)", "AIA Component Executives (CACE)", "AIA Former Presidents"],
    ],
  },
  {
    title: null,
    columns: [
      ["AIA Board of Directors", "AIA Board Committees", "AIA Staff"],
      ["AIA Architects Foundation", "AIA Trust", "AIA College of Fellows"],
    ],
  },
];

const AIALeadershipSection = () => {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden"
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

      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 md:px-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-display text-[clamp(26px,5vw,42px)] text-foreground tracking-[0.06em] leading-[1.15]">
            The{" "}
            <span style={{ color: "hsl(var(--aia-red))" }} className="font-bold">
              AIA
            </span>{" "}
            Leadership + Network
          </h2>
        </div>

        {/* Decorative dots row */}
        <div className="flex justify-center mb-8">
          <div
            className="h-[6px] w-full max-w-md"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--aia-red)) 1.5px, transparent 1.5px)",
              backgroundSize: "10px 6px",
            }}
          />
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-8">
          {memberGroups.map((group, gi) => (
            <div key={gi}>
              {group.title && (
                <div className="text-center mb-5">
                  <div
                    className="w-full h-px mb-5"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 20%), transparent)" }}
                  />
                  <h3
                    className="font-display text-[18px] md:text-[22px] font-bold tracking-[0.08em]"
                    style={{ color: "hsl(var(--aia-red))" }}
                  >
                    {group.title}
                  </h3>
                </div>
              )}

              {!group.title && (
                <div
                  className="w-full h-px mb-5"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 20%), transparent)" }}
                />
              )}

              <div
                className="rounded-xl p-5 md:p-6"
                style={{
                  background: "hsl(0 0% 4% / 0.6)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {group.columns.map((col, ci) => (
                    <div key={ci} className="flex flex-col gap-2.5">
                      {col.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-foreground/70 leading-relaxed">
                          <span
                            className="mt-[7px] w-[6px] h-[6px] rounded-sm flex-shrink-0"
                            style={{ background: "hsl(var(--aia-red))" }}
                          />
                          <span>
                            <span className="font-bold" style={{ color: "hsl(var(--aia-red))" }}>
                              AIA
                            </span>{" "}
                            {item.replace(/^AIA\s*/, "")}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative dots row bottom */}
        <div className="flex justify-center mt-10">
          <div
            className="h-[6px] w-full max-w-md"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--aia-red)) 1.5px, transparent 1.5px)",
              backgroundSize: "10px 6px",
            }}
          />
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
