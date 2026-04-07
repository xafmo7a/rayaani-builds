import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SectionHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  label: string;
  sublabel: string;
}

const SectionHero = ({ eyebrow, title, label, sublabel }: SectionHeroProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-5 md:px-10 pt-[200px] pb-8"
      style={{ background: "hsl(0 0% 5%)", borderBottom: "1px solid hsl(0 0% 15%)" }}
    >
      <div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase mb-6 cursor-pointer transition-colors duration-200"
          style={{ color: "hsl(0 0% 100% / 0.5)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.5)")}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>

        <div
          className="flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.35em] uppercase mb-4"
          style={{ color: "hsl(var(--aia-red))" }}
        >
          <span
            className="inline-block w-6 h-px"
            style={{ background: "hsl(var(--aia-red))" }}
          />
          {eyebrow}
        </div>

        <h1 className="font-display text-[clamp(28px,4.5vw,58px)] text-white tracking-[0.04em] leading-[1.08]">
          {title}
        </h1>
      </div>

      <div className="text-right flex-shrink-0 hidden md:block">
        <div
          className="font-display text-[64px] font-light leading-none tracking-tight"
          style={{ color: "hsl(0 0% 20%)" }}
        >
          {label}
        </div>
        <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "hsl(0 0% 50%)" }}>
          {sublabel}
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
