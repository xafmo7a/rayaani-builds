import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Users, Globe, Shield, BookOpen, Building2, Landmark, Layers, ArrowRight } from "lucide-react";

interface DropdownMenuProps {
  open: boolean;
  onClose: () => void;
}

const tabs = [
  { id: "aia", label: "AIA" },
  { id: "public", label: "Public" },
  { id: "service", label: "Service" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const panelData: Record<
  TabId,
  {
    title: string;
    subtitle: string;
    cards: { icon: typeof Home; label: string; text: string }[];
  }
> = {
  aia: {
    title: "AIA",
    subtitle: "Leadership & commitment to the American Institute of Architects",
    cards: [
      {
        icon: Landmark,
        label: "Membership",
        text: "Decades of active AIA membership and leadership across local and national chapters.",
      },
      {
        icon: Globe,
        label: "Vision",
        text: "A future where architects lead public discourse and shape policy at every level.",
      },
      {
        icon: Users,
        label: "Network",
        text: "Connected to AIA chapters, councils, and international bodies worldwide.",
      },
    ],
  },
  public: {
    title: "Public",
    subtitle: "Architecture as a force for public good and civic engagement",
    cards: [
      {
        icon: Shield,
        label: "Advocacy",
        text: "Championing architects' role in public policy, equity, and community development.",
      },
      {
        icon: BookOpen,
        label: "Education",
        text: "Investing in the next generation through mentorship and programs.",
      },
      {
        icon: Globe,
        label: "Global Reach",
        text: "Bridging American and international architectural communities.",
      },
    ],
  },
  service: {
    title: "Service",
    subtitle: "A lifetime dedicated to architecture as public service",
    cards: [
      {
        icon: Building2,
        label: "Iraq Pavilion",
        text: "Designer of the acclaimed Iraq Pavilion — a landmark of cultural diplomacy.",
      },
      {
        icon: Layers,
        label: "RAW — NYC",
        text: "Founder of RAW, a New York practice at the intersection of innovation and identity.",
      },
      {
        icon: Shield,
        label: "Public Mission",
        text: "Every project rooted in service — to community, culture, and the built environment.",
      },
    ],
  },
};

const DropdownMenu = ({ open, onClose }: DropdownMenuProps) => {
  const [activeTab, setActiveTab] = useState<TabId>("aia");
  const panel = panelData[activeTab];

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col overflow-y-auto transition-opacity duration-300"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 -z-[1]"
        style={{
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(12px) saturate(1.4)",
          WebkitBackdropFilter: "blur(12px) saturate(1.4)",
        }}
      />

      <div className="mt-auto px-5 pb-10 pt-6 flex flex-col gap-0 min-h-screen justify-center">
        {/* Tab buttons */}
        <div className="flex justify-center gap-2.5 pb-7 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-7 py-2.5 rounded-full text-[13px] font-bold tracking-[0.22em] uppercase cursor-pointer transition-all duration-200"
              style={{
                border: `1px solid ${activeTab === tab.id ? "rgba(255,80,60,0.4)" : "rgba(255,255,255,0.18)"}`,
                background:
                  activeTab === tab.id
                    ? "linear-gradient(135deg, rgba(192,57,43,0.8), rgba(120,20,10,0.6))"
                    : "rgba(255,255,255,0.06)",
                color: activeTab === tab.id ? "white" : "rgba(255,255,255,0.65)",
                boxShadow:
                  activeTab === tab.id
                    ? "0 4px 16px rgba(192,57,43,0.4), inset 0 1px 0 rgba(255,255,255,0.15)"
                    : "inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="px-0" style={{ animation: "panelIn 0.3s ease" }} key={activeTab}>
          <h2
            className="font-display text-[clamp(32px,9vw,52px)] text-foreground tracking-[0.14em] text-center mb-2"
            style={{ textShadow: "0 2px 20px rgba(192,57,43,0.4)" }}
          >
            {panel.title}
          </h2>
          <p className="text-[13px] font-light text-foreground/60 tracking-[0.08em] text-center mb-6 leading-relaxed">
            {panel.subtitle}
          </p>

          {/* Cards carousel */}
          <div
            className="flex gap-2.5 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {panel.cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="flex-shrink-0 w-[75vw] max-w-[260px] snap-start rounded-[14px] p-[18px]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-2.5"
                    style={{
                      background: "rgba(192,57,43,0.3)",
                      border: "1px solid rgba(192,57,43,0.4)",
                    }}
                  >
                    <Icon className="w-[18px] h-[18px]" style={{ stroke: "rgba(255,150,130,0.9)" }} strokeWidth={1.6} />
                  </div>
                  <div className="text-[12px] font-semibold tracking-[0.12em] uppercase mb-1.5" style={{ color: "rgba(255,180,160,0.9)" }}>
                    {card.label}
                  </div>
                  <div className="text-[12px] font-light text-foreground/60 leading-relaxed">
                    {card.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Close */}
        <div
          className="text-center mt-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/30 cursor-pointer transition-colors duration-200 hover:text-foreground/60"
          onClick={onClose}
        >
          ✕ &nbsp; Close
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
