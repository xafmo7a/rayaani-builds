import { useState } from "react";

const practiceAreas = [
  {
    icon: "■",
    title: "Design Innovation & Competition Work",
    items: [
      { label: "Built Work", desc: "Cultural, institutional, and civic projects grounded in design excellence and contextual response." },
      { label: "Competition Work", desc: "International competitions addressing complex cultural and urban questions." },
      { label: "Conceptual & Proposal Work", desc: "Forward-looking architectural strategies testing new programmatic and social models." },
    ],
    selected: [
      "NYC Green School (P.S. 59)",
      "LEED-certified residential towers, Battery Park City",
      "Seton Hall University (NJ)",
      "Xin Hua School of Fine Arts (China)",
      "Iraq Pavilion (Expo 2020 Dubai)",
      "Guggenheim Helsinki (competition)",
      "Creek Mosque (UAE competition)",
      "Women's Building (NYC proposal)",
    ],
  },
  {
    icon: "■",
    title: "Technology & Emerging Systems",
    items: [
      { label: "AI & Digital Integration", desc: "Direct application of artificial intelligence and computational tools to inform urban density, environmental performance, and design iteration." },
      { label: "Advanced Fabrication", desc: "Integrating parametric design with large-scale 3D printing in architectural systems." },
      { label: "Computational Systems", desc: "Using parametric and data-driven systems to shape architectural and urban design outcomes." },
    ],
    selected: [
      "Liberland Master Plan (First Place)",
      "Creek Mosque (UAE – 3D-printed structural components)",
      "Sonic Union Bryant Park (NYC – digital fabrication)",
      "KSA Cultural, Sports & Entertainment Hubs (advanced parametric systems)",
    ],
  },
  {
    icon: "■",
    title: "Sustainability & Environmental Thinking",
    items: [
      { label: "Ecological Design", desc: "Moving beyond standard green building toward integrated environmental systems that respond to climate, context, and long-term performance." },
      { label: "Strategic Resilience", desc: "Large-scale master planning focused on environmental, economic, and social sustainability across urban systems." },
    ],
    selected: [
      "Liberland Master Plan (7 km², Europe, First Place)",
      "The Canal Condition (Vietnam, 190-hectare master plan)",
      "Green Bridge of Baghdad",
      "Algae Urban Farming",
      "Bawadi Park (Dubai)",
      "Al Khor Masterplan (Qatar)",
    ],
  },
  {
    icon: "■",
    title: "Global Practice & Strategic Initiatives",
    items: [
      { label: "Global Practice Leadership", desc: "Sustained engagement across regions through projects, partnerships, and long-term collaborations connecting North America, the Middle East, Europe, and Asia." },
      { label: "Institutional & Civic Engagement", desc: "Contributing to global platforms through conferences, juries, and advisory roles that connect professional practice with policy, culture, and public impact." },
    ],
    selected: [
      "Iraq Pavilion (Expo 2020 Dubai)",
      "UNESCO advisory role (Mosul)",
      "AIA Middle East Presidency",
      "International conferences and juries",
    ],
  },
];

const timeline = [
  {
    period: "1994–1998",
    title: "Civic, Educational, Healthcare & Urban Architecture",
    location: "Boston, MA",
    desc: "Professional formation across several practices including Elkus Manfredi Architects, Wood & Zapata, Ellenzweig Associates, and The Ritchie Organization. Work included schools, universities, healthcare facilities, hospital planning, civic buildings, and mixed-use urban development.",
  },
  {
    period: "1999–2005",
    title: "Institutional, Cultural & Public Architecture",
    location: "New York City, NY",
    org: "Perkins + Will — Associate / Senior Designer",
    desc: "University buildings, cultural institutions, corporate headquarters, and international projects including major cultural facilities in China.",
  },
  {
    period: "2005–2009",
    title: "Public Realm & Urban Design",
    location: "New York City, NY",
    org: "Ehrenkrantz Eckstut & Kuhn Architects — Associate Principal / Design Director",
    desc: "Large civic and urban projects including public schools, housing neighborhoods, transportation hubs, waterfront developments, and major urban master plans.",
  },
  {
    period: "2010–2012",
    title: "International Studio Architecture",
    location: "Dubai, UAE",
    org: "Design Worldwide Partnership — Head of Architecture / Design Director",
    desc: "Leadership of a multidisciplinary studio working on universities, hospitals, housing communities, and large regional master plans across the Middle East.",
  },
];

const PracticeAreaCard = ({
  area,
  index,
  expanded,
  onToggle,
}: {
  area: (typeof practiceAreas)[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) => (
  <div
    className="relative rounded-2xl overflow-hidden transition-all duration-500"
    style={{
      background: "hsl(0 0% 4% / 0.7)",
      border: expanded
        ? "1px solid hsl(var(--aia-red) / 0.3)"
        : "1px solid hsl(0 0% 100% / 0.06)",
      boxShadow: expanded
        ? "0 8px 40px hsl(var(--aia-red) / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.06)"
        : "0 4px 16px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.04)",
    }}
  >
    {/* Header */}
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-4 p-5 md:p-6 text-left cursor-pointer group"
    >
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-[14px] font-bold transition-all duration-300 group-hover:scale-105"
        style={{
          background: "linear-gradient(135deg, hsl(var(--aia-red) / 0.25), hsl(var(--aia-red) / 0.08))",
          border: "1px solid hsl(var(--aia-red) / 0.3)",
          boxShadow: "0 4px 12px hsl(var(--aia-red) / 0.12)",
          color: "hsl(var(--aia-red))",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] md:text-[17px] font-bold text-foreground tracking-[0.02em] leading-[1.3]">
          {area.title}
        </h3>
      </div>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-foreground/50 text-[18px] transition-transform duration-300"
        style={{
          background: "hsl(0 0% 100% / 0.04)",
          border: "1px solid hsl(0 0% 100% / 0.08)",
          transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        +
      </div>
    </button>

    {/* Expandable content */}
    <div
      className="overflow-hidden transition-all duration-500"
      style={{
        maxHeight: expanded ? "1200px" : "0px",
        opacity: expanded ? 1 : 0,
      }}
    >
      <div className="px-5 md:px-6 pb-6">
        {/* Divider */}
        <div
          className="h-px mb-5"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.3), transparent)" }}
        />

        {/* Items */}
        <div className="space-y-4 mb-6">
          {area.items.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span
                className="mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: "hsl(var(--aia-red))",
                  boxShadow: "0 0 6px hsl(var(--aia-red) / 0.4)",
                }}
              />
              <div>
                <span className="text-[13px] md:text-[14px] font-bold text-foreground/90">{item.label}: </span>
                <span className="text-[12px] md:text-[13px] text-foreground/55 leading-[1.6]">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected work */}
        <div
          className="rounded-xl p-4 md:p-5"
          style={{
            background: "hsl(var(--aia-red) / 0.04)",
            border: "1px solid hsl(var(--aia-red) / 0.1)",
          }}
        >
          <div
            className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: "hsl(var(--aia-red) / 0.7)" }}
          >
            Selected Work
          </div>
          <div className="flex flex-wrap gap-2">
            {area.selected.map((work) => (
              <span
                key={work}
                className="text-[10px] md:text-[11px] font-medium text-foreground/60 px-2.5 py-1 rounded-md"
                style={{
                  background: "hsl(0 0% 100% / 0.04)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                {work}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden py-16 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(var(--aia-red) / 0.04) 0%, transparent 50%), linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 3%) 20%, hsl(0 0% 2%) 80%, hsl(0 0% 0%) 100%)",
      }}
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 5%, hsl(var(--aia-red) / 0.5) 50%, transparent 95%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10">
        {/* ===== LEADERSHIP THROUGH PRACTICE ===== */}
        <div className="mb-16 md:mb-20">
          <div
            className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "hsl(var(--aia-red) / 0.7)" }}
          >
            Service & Practice
          </div>
          <h1 className="font-display text-[clamp(28px,6vw,48px)] text-foreground tracking-[0.05em] leading-[1.1] mb-6">
            Leadership Through{" "}
            <span style={{ color: "hsl(var(--aia-red))" }}>Practice</span>
          </h1>
          <div
            className="w-20 h-[2px] mb-8 rounded-full"
            style={{ background: "repeating-linear-gradient(90deg, hsl(var(--aia-red)) 0px, hsl(var(--aia-red)) 4px, transparent 4px, transparent 9px)" }}
          />
          <p className="text-[14px] md:text-[16px] text-foreground/55 leading-[1.8] max-w-3xl font-light tracking-[0.01em]">
            My work operates across regions, shaped through projects, collaborations, and leadership developed over three decades of practice. With a physical presence and strategic engagement in New York, Dubai, and India, I work within a global network connecting North America, the Middle East, Europe, and Asia. This practice is defined by the cross-pollination of ideas, knowledge, and practices across contexts—linking localized cultural intelligence with advanced design, technology, and delivery.
          </p>
        </div>

        {/* ===== ADVANCING THE PROFESSION ===== */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-[clamp(22px,4vw,36px)] text-foreground tracking-[0.06em] leading-[1.2] mb-3">
            Advancing the{" "}
            <span style={{ color: "hsl(var(--aia-red))" }}>Profession</span>
          </h2>
          <p className="text-[13px] md:text-[15px] text-foreground/45 leading-[1.7] max-w-2xl mb-10 font-light">
            I build platforms that advance the profession through design innovation, technology, environmental thinking, and global engagement.
          </p>

          {/* Practice area cards */}
          <div className="space-y-3">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.title}
                area={area}
                index={i}
                expanded={expandedIndex === i}
                onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* ===== 30 YEARS OF SERVICE ===== */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(var(--aia-red) / 0.2), hsl(var(--aia-red) / 0.06))",
                border: "1px solid hsl(var(--aia-red) / 0.25)",
                boxShadow: "0 8px 24px hsl(var(--aia-red) / 0.1)",
              }}
            >
              <span className="font-display text-[22px] md:text-[26px] text-foreground tracking-[0.05em]">30</span>
            </div>
            <div>
              <h2 className="font-display text-[clamp(22px,4vw,36px)] text-foreground tracking-[0.06em] leading-[1.2]">
                Years of <span style={{ color: "hsl(var(--aia-red))" }}>Service</span>
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 md:pl-8">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(180deg, hsl(var(--aia-red) / 0.5), hsl(var(--aia-red) / 0.1))" }}
            />

            <div className="space-y-8 md:space-y-10">
              {timeline.map((item, i) => (
                <div key={item.period} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-6 md:-left-8 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full"
                    style={{
                      background: "hsl(0 0% 0%)",
                      border: "2px solid hsl(var(--aia-red) / 0.6)",
                      boxShadow: "0 0 8px hsl(var(--aia-red) / 0.2)",
                    }}
                  />

                  <div
                    className="rounded-xl p-5 md:p-6"
                    style={{
                      background: "hsl(0 0% 4% / 0.5)",
                      border: "1px solid hsl(0 0% 100% / 0.05)",
                      boxShadow: "0 2px 12px hsl(0 0% 0% / 0.3)",
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] px-2.5 py-0.5 rounded-md"
                        style={{
                          background: "hsl(var(--aia-red) / 0.12)",
                          color: "hsl(var(--aia-red))",
                          border: "1px solid hsl(var(--aia-red) / 0.15)",
                        }}
                      >
                        {item.period}
                      </span>
                      <span className="text-[10px] md:text-[11px] text-foreground/40 tracking-[0.08em]">
                        {item.location}
                      </span>
                    </div>
                    <h4 className="text-[14px] md:text-[16px] font-bold text-foreground/90 leading-[1.3] mb-1.5">
                      {item.title}
                    </h4>
                    {item.org && (
                      <div className="text-[11px] md:text-[12px] font-semibold text-foreground/40 mb-2 italic">
                        {item.org}
                      </div>
                    )}
                    <p className="text-[12px] md:text-[13px] text-foreground/45 leading-[1.7] font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== RAW-NYC ARCHITECTS ===== */}
        <div
          className="relative rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden"
          style={{
            background: "hsl(0 0% 3% / 0.8)",
            backdropFilter: "blur(30px) saturate(1.6)",
            WebkitBackdropFilter: "blur(30px) saturate(1.6)",
            border: "1px solid hsl(var(--aia-red) / 0.15)",
            boxShadow: "0 24px 80px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
          }}
        >
          {/* Corner marks */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l rounded-tl-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r rounded-tr-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l rounded-bl-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r rounded-br-sm" style={{ borderColor: "hsl(var(--aia-red) / 0.3)" }} />

          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-md"
              style={{
                background: "hsl(var(--aia-red) / 0.12)",
                color: "hsl(var(--aia-red))",
                border: "1px solid hsl(var(--aia-red) / 0.15)",
              }}
            >
              2012–Present
            </span>
          </div>

          <h3 className="font-display text-[clamp(22px,4vw,34px)] text-foreground tracking-[0.05em] leading-[1.15] mb-2">
            RAW-NYC <span style={{ color: "hsl(var(--aia-red))" }}>Architects</span>
          </h3>
          <p className="text-[13px] md:text-[15px] text-foreground/50 leading-[1.8] max-w-3xl mb-8 font-light">
            Founded RAW-NYC Architects, a woman-founded and woman-led architectural practice, established independently without partners. The firm advances architecture, urbanism, and cultural projects through hands-on design and practice leadership, with a strong commitment to mentoring and empowering the next generation of leaders in architecture.
          </p>

          {/* Offices grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {[
              { city: "New York City", country: "USA", type: "Founding Office" },
              { city: "Dubai", country: "UAE", type: "Founding Office" },
              { city: "Kochi", country: "India", type: "Founding Office" },
            ].map((office) => (
              <div
                key={office.city}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "hsl(0 0% 100% / 0.03)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                <div className="text-[14px] md:text-[16px] font-bold text-foreground/85 tracking-[0.02em]">
                  {office.city}
                </div>
                <div className="text-[10px] text-foreground/40 tracking-[0.1em] uppercase mt-0.5">
                  {office.country} · {office.type}
                </div>
              </div>
            ))}
          </div>

          {/* Collaborations */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[10px] text-foreground/35 tracking-[0.1em] uppercase mr-2 self-center">Collaborations:</span>
            {["Belgrade, Serbia", "Bucharest, Romania"].map((c) => (
              <span
                key={c}
                className="text-[11px] font-medium text-foreground/55 px-3 py-1 rounded-md"
                style={{
                  background: "hsl(0 0% 100% / 0.04)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <div
            className="h-px mb-6"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--aia-red) / 0.2), transparent)" }}
          />

          <div className="space-y-4">
            <p className="text-[12px] md:text-[13px] text-foreground/45 leading-[1.8] font-light">
              Through RAW-NYC Architects, I have prioritized mentorship and leadership development, guiding students, recent graduates, and emerging professionals entering the field. While I have actively supported the advancement of women in architecture, management, and construction, my mentorship extends broadly across the profession.
            </p>
            <p className="text-[12px] md:text-[13px] text-foreground/45 leading-[1.8] font-light">
              Through my practice, I have also led site construction coordination, supervision, and project management, demonstrating the role of women in construction leadership and technical execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
