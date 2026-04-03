import { useState, useEffect, useCallback } from "react";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Menu, X } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

interface SiteHeaderProps {
  onToggleCarousel?: () => void;
  carouselOpen?: boolean;
}

const SiteHeader = ({ onToggleCarousel, carouselOpen }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideState, setHideState] = useState<"" | "hide-cta" | "hide-videos" | "hide-all">("");

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY >= 120) setHideState("hide-all");
      else if (scrollY >= 80) setHideState("hide-videos");
      else if (scrollY >= 20) setHideState("hide-cta");
      else setHideState("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <DropdownMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header
        className="fixed top-0 left-0 right-0 z-[1000] flex flex-col overflow-visible"
        style={{
          borderRadius: "0 0 20px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          animation: "slideDown 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
        }}
      >
        {/* Red Bar */}
        <div
          className="flex flex-col items-center px-4 py-2 transition-transform duration-300"
          style={{
            background: "rgba(172,32,20,0.78)",
            backdropFilter: "blur(20px) saturate(1.8)",
            WebkitBackdropFilter: "blur(20px) saturate(1.8)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.12)",
            transform: hideState === "hide-all" ? "translateY(-100%)" : "translateY(0)",
          }}
        >
          <div
            className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-1.5"
            style={{ color: "rgba(255,255,255,0.93)", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
          >
            Architects for Public Service
          </div>

          <div className="w-full flex items-center justify-between relative min-h-[58px]">
            {/* Social Links */}
            <div className="flex gap-2 items-center">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.65)",
                    background: "rgba(255,255,255,0.1)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <Icon className="w-[13px] h-[13px] text-foreground" strokeWidth={1.8} />
                </a>
              ))}
            </div>

            {/* Center Hamburger */}
            <button
              onClick={toggleMenu}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 cursor-pointer z-10 px-4 py-2 rounded-full transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <div className="flex flex-col gap-1 items-center">
                  <span className="block w-5 h-[1.5px] bg-foreground/90 rounded-sm" />
                  <span className="block w-5 h-[1.5px] bg-foreground/90 rounded-sm" />
                  <span className="block w-5 h-[1.5px] bg-foreground/90 rounded-sm" />
                </div>
              )}
            </button>

            {/* Contact Buttons */}
            <div className="flex gap-[7px] items-center">
              <a
                href="mailto:info@rayaaniforpresident.com"
                className="w-[33px] h-[33px] rounded-[7px] flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <Mail className="w-[15px] h-[15px] text-foreground" strokeWidth={1.6} />
              </a>
              <a
                href="tel:+1"
                className="w-[33px] h-[33px] rounded-[7px] flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <Phone className="w-[15px] h-[15px] text-foreground" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>

        {/* Gray Videos Bar */}
        <div
          className="flex items-center justify-center px-4 py-2.5 cursor-pointer select-none transition-all duration-300"
          style={{
            background: "rgba(90,90,100,0.6)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
            transform:
              hideState === "hide-videos" || hideState === "hide-all"
                ? "translateY(-100%)"
                : "translateY(0)",
          }}
          onClick={onToggleCarousel}
        >
          <span className="text-[clamp(15px,4vw,20px)] font-light tracking-[0.1em] text-foreground/70">
            Videos
          </span>
          <span
            className="ml-2 text-[10px] text-foreground/40 inline-block transition-transform duration-300"
            style={{ transform: carouselOpen ? "rotate(180deg)" : "rotate(0)" }}
          >
            ▼
          </span>
        </div>

        {/* CTA Bar */}
        <div
          className="flex items-center justify-center px-4 py-2 transition-transform duration-200"
          style={{
            background: "rgba(18,18,22,0.65)",
            backdropFilter: "blur(20px) saturate(1.2)",
            WebkitBackdropFilter: "blur(20px) saturate(1.2)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
            transform:
              hideState === "hide-cta" || hideState === "hide-videos" || hideState === "hide-all"
                ? "translateY(-100%)"
                : "translateY(0)",
          }}
        >
          <span className="text-[clamp(13px,3.5vw,16px)] font-normal tracking-[0.08em] text-foreground/80">
            Join the Movement
          </span>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
