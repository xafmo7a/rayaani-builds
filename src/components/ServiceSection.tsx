import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImagePanel from "@/components/sections/ImagePanel";

/* ═══ Shared layout components (same as Public/AIA pages) ═══ */

const BlackBanner = ({ title, showBack }: { title: string; showBack?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      className="px-5 md:px-10 py-4 text-center relative"
      style={{ background: "hsl(0 0% 0%)", borderBottom: "1px solid hsl(0 0% 15%)" }}
    >
      {showBack && (
        <button
          onClick={() => navigate("/")}
          className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200"
          style={{ color: "hsl(0 0% 100% / 0.5)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.5)")}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}
      <h2 className="font-display text-[clamp(16px,2.5vw,24px)] font-normal tracking-[0.12em] uppercase text-white">
        {title}
      </h2>
    </div>
  );
};

const ContentBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-8"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <div className="text-[12px] leading-[1.9] text-black font-normal space-y-4 text-justify font-body">
      {children}
    </div>
  </div>
);

const RedSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-4"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <h3
      className="font-display text-[clamp(14px,2vw,20px)] font-semibold tracking-[0.1em] uppercase"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {children}
    </h3>
  </div>
);

/* ═══ Data ═══ */

const practiceAreas = [
  {
    title: "Design Innovation & Competition Work",
    items: [
      "Built Work — Cultural, institutional, and civic projects grounded in design excellence and contextual response.",
      "Competition Work — International competitions addressing complex cultural and urban questions.",
      "Conceptual & Proposal Work — Forward-looking architectural strategies testing new programmatic and social models.",
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
    title: "Technology & Emerging Systems",
    items: [
      "AI & Digital Integration — Direct application of artificial intelligence and computational tools to inform urban density, environmental performance, and design iteration.",
      "Advanced Fabrication — Integrating parametric design with large-scale 3D printing in architectural systems.",
      "Computational Systems — Using parametric and data-driven systems to shape architectural and urban design outcomes.",
    ],
    selected: [
      "Liberland Master Plan (First Place)",
      "Creek Mosque (UAE – 3D-printed structural components)",
      "Sonic Union Bryant Park (NYC – digital fabrication)",
      "KSA Cultural, Sports & Entertainment Hubs (advanced parametric systems)",
    ],
  },
  {
    title: "Sustainability & Environmental Thinking",
    items: [
      "Ecological Design — Moving beyond standard green building toward integrated environmental systems that respond to climate, context, and long-term performance.",
      "Strategic Resilience — Large-scale master planning focused on environmental, economic, and social sustainability across urban systems.",
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
    title: "Global Practice & Strategic Initiatives",
    items: [
      "Global Practice Leadership — Sustained engagement across regions through projects, partnerships, and long-term collaborations connecting North America, the Middle East, Europe, and Asia.",
      "Institutional & Civic Engagement — Contributing to global platforms through conferences, juries, and advisory roles that connect professional practice with policy, culture, and public impact.",
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

/* ═══ Component ═══ */

const ServiceSection = () => {
  return (
    <div>
      {/* ═══ BLACK BANNER — Leadership Through Practice ═══ */}
      <BlackBanner title="Leadership Through Practice" showBack />

      <ContentBlock>
        <p>
          My work operates across regions, shaped through projects, collaborations, and leadership developed over three decades of practice. With a physical presence and strategic engagement in New York, Dubai, and India, I work within a global network connecting North America, the Middle East, Europe, and Asia. This practice is defined by the cross-pollination of ideas, knowledge, and practices across contexts—linking localized cultural intelligence with advanced design, technology, and delivery.
        </p>
      </ContentBlock>

      {/* ═══ BLACK BANNER — Advancing the Profession ═══ */}
      <BlackBanner title="Advancing the Profession" />

      {/* Practice Areas */}
      {practiceAreas.map((area) => (
        <div key={area.title}>
          <RedSubTitle>{area.title}</RedSubTitle>
          <ContentBlock>
            {area.items.map((item, i) => {
              const dashIdx = item.indexOf(" — ");
              if (dashIdx > -1) {
                return (
                  <p key={i}>
                    <strong className="text-black font-semibold">{item.substring(0, dashIdx)}</strong>
                    {" — "}{item.substring(dashIdx + 3)}
                  </p>
                );
              }
              return <p key={i}>{item}</p>;
            })}
            <div className="pt-2">
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "hsl(var(--aia-red))" }}
              >
                Selected Work:
              </span>
              <span className="text-[12px] text-black/70 ml-2">
                {area.selected.join(" · ")}
              </span>
            </div>
          </ContentBlock>
        </div>
      ))}

      {/* ═══ BLACK BANNER — 30 Years of Service ═══ */}
      <BlackBanner title="30 Years of Service" />

      {timeline.map((item) => (
        <div key={item.period}>
          <div
            className="px-5 md:px-10 py-4"
            style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span
                className="text-[11px] font-semibold tracking-[0.1em] px-2.5 py-0.5 rounded"
                style={{
                  background: "hsl(var(--aia-red) / 0.1)",
                  color: "hsl(var(--aia-red))",
                }}
              >
                {item.period}
              </span>
              <span className="text-[11px] text-black/40 tracking-[0.06em]">{item.location}</span>
            </div>
            <h4 className="text-[13px] font-semibold text-black tracking-[0.02em] mb-1">{item.title}</h4>
            {item.org && (
              <div className="text-[11px] text-black/50 italic mb-1">{item.org}</div>
            )}
            <p className="text-[12px] leading-[1.9] text-black font-normal text-justify font-body">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

      {/* ═══ RAW-NYC Architects ═══ */}
      <RedSubTitle>RAW-NYC Architects · 2012–Present</RedSubTitle>
      <ContentBlock>
        <p>
          Founded RAW-NYC Architects, a woman-founded and woman-led architectural practice, established independently without partners. The firm advances architecture, urbanism, and cultural projects through hands-on design and practice leadership, with a strong commitment to mentoring and empowering the next generation of leaders in architecture.
        </p>
        <div className="pt-2">
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: "hsl(var(--aia-red))" }}
          >
            Offices:
          </span>
          <span className="text-[12px] text-black/70 ml-2">
            New York City, USA · Dubai, UAE · Kochi, India
          </span>
        </div>
        <div>
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: "hsl(var(--aia-red))" }}
          >
            Collaborations:
          </span>
          <span className="text-[12px] text-black/70 ml-2">
            Belgrade, Serbia · Bucharest, Romania
          </span>
        </div>
        <p>
          Through RAW-NYC Architects, I have prioritized mentorship and leadership development, guiding students, recent graduates, and emerging professionals entering the field. While I have actively supported the advancement of women in architecture, management, and construction, my mentorship extends broadly across the profession.
        </p>
        <p>
          Through my practice, I have also led site construction coordination, supervision, and project management, demonstrating the role of women in construction leadership and technical execution.
        </p>
      </ContentBlock>

      {/* ═══ Selected Work Gallery ═══ */}
      <BlackBanner title="Selected Work" />
      <div
        className="px-5 md:px-10 py-8 space-y-6"
        style={{ background: "hsl(0 0% 100%)" }}
      >
        <ImagePanel src="/images/service/spheres.png" alt="Multiple Spheres of Influence" label="Multiple Spheres of Influence — Global Reach" />
        <ImagePanel src="/images/service/education.png" alt="Education & Institutional Projects" label="Education & Institutional Projects" />
        <ImagePanel src="/images/service/cultural.png" alt="Cultural & Sacred Architecture" label="Cultural & Sacred Architecture" />
        <ImagePanel src="/images/service/masterplan.png" alt="Master Planning & Urban Design" label="Master Planning & Urban Design" />
        <ImagePanel src="/images/service/corporate.png" alt="Corporate & Interior Architecture" label="Corporate & Interior Architecture" />
        <ImagePanel src="/images/service/innovation.png" alt="Innovation & Research" label="Innovation & Research" />
        <ImagePanel src="/images/service/urban.png" alt="Urban Development & Waterfront" label="Urban Development & Waterfront" />
        <ImagePanel src="/images/service/iraq-pavilion.png" alt="Iraq Pavilion" label="Iraq Pavilion — Built Work" />
        <ImagePanel src="/images/service/timeline.png" alt="Iraq Pavilion Timeline" label="Iraq Pavilion — Project Timeline" />
        <ImagePanel src="/images/service/nyc-cultural.png" alt="NYC Cultural Projects" label="NYC Cultural & Sustainability Projects" />
      </div>
    </div>
  );
};

export default ServiceSection;
