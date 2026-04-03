import { useState, useEffect, useCallback, RefObject } from "react";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, X, Play } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

const videoIds = [
  "P1UgHTA8DP8", "EBs2KYQk1Mw", "xkYiWUhd-Qw", "GF6qOeUbyhU",
  "kgIr6sUIglI", "K_Skn9w68wc", "kt9HqoJ7tmU",
];

interface SiteHeaderProps {
  onToggleCarousel?: () => void;
  carouselOpen?: boolean;
  scrollRef?: RefObject<HTMLDivElement>;
}

const SiteHeader = ({ onToggleCarousel, carouselOpen, scrollRef }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideState, setHideState] = useState<"" | "hide-cta" | "hide-videos" | "hide-all">("");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

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

  const [headerRetracted, setHeaderRetracted] = useState(false);

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = el.scrollTop;
      const viewportH = window.innerHeight;
      
      if (scrollY > viewportH * 0.3) {
        setHideState("hide-all");
        setHeaderRetracted(true);
      } else if (scrollY >= 80) {
        setHideState("hide-videos");
        setHeaderRetracted(false);
      } else if (scrollY >= 20) {
        setHideState("hide-cta");
        setHeaderRetracted(false);
      } else {
        setHideState("");
        setHeaderRetracted(false);
      }
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

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
        className="fixed top-0 left-0 right-0 z-[1000] flex flex-col overflow-hidden"
        style={{
          borderRadius: "0 0 20px 20px",
          boxShadow: headerRetracted ? "none" : "0 8px 32px rgba(0,0,0,0.45)",
          animation: "slideDown 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
          transform: headerRetracted ? "translateY(-100%)" : "translateY(0)",
          opacity: headerRetracted ? 0 : 1,
          transition: "transform 0.7s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Red Bar — top layer z-30 */}
        <div
          className="relative z-30 flex flex-col items-center px-4 py-2"
          style={{
            background: "rgba(172,32,20,0.78)",
            backdropFilter: "blur(20px) saturate(1.8)",
            WebkitBackdropFilter: "blur(20px) saturate(1.8)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.3)",
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

        {/* Gray Videos Bar — tucks under red bar */}
        <div
          className="relative z-20 overflow-hidden cursor-pointer"
          style={{
            background: "rgba(90,90,100,0.6)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.2)",
            maxHeight:
              hideState === "hide-videos" || hideState === "hide-all"
                ? "0px"
                : "80px",
            opacity:
              hideState === "hide-videos" || hideState === "hide-all"
                ? 0
                : 1,
            transition: "max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease",
          }}
          onClick={onToggleCarousel}
        >
          <div
            className="flex gap-0 py-1.5 w-max"
            style={{
              animation: "tickerScroll 40s linear infinite",
            }}
          >
            {[...videoIds, ...videoIds].map((id, i) => (
              <div
                key={`${id}-${i}`}
                className="flex-shrink-0 w-[82px] px-[1px]"
              >
                <div className="rounded-md overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt=""
                    className="w-full aspect-video object-cover block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar — tucks under carousel */}
        <div
          className="relative z-10 flex items-center justify-center px-4 py-2 overflow-hidden"
          style={{
            background: "rgba(18,18,22,0.65)",
            backdropFilter: "blur(20px) saturate(1.2)",
            WebkitBackdropFilter: "blur(20px) saturate(1.2)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
            maxHeight:
              hideState === "hide-cta" || hideState === "hide-videos" || hideState === "hide-all"
                ? "0px"
                : "50px",
            opacity:
              hideState === "hide-cta" || hideState === "hide-videos" || hideState === "hide-all"
                ? 0
                : 1,
            padding:
              hideState === "hide-cta" || hideState === "hide-videos" || hideState === "hide-all"
                ? "0 16px"
                : undefined,
            transition: "max-height 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease, padding 0.4s ease",
          }}
        >
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-16 whitespace-nowrap w-max"
              style={{ animation: "tickerScroll 25s linear infinite" }}
            >
              {[...Array(2)].flatMap((_, r) =>
                [
                  "✦ Vote Raya Ani for AIA President Elect",
                  "🏛️ Architects at Public Service",
                  "✦ Vote Raya Ani for AIA President Elect",
                  "🏛️ Leadership · Vision · Service",
                ].map((msg, i) => (
                  <span
                    key={`${r}-${i}`}
                    className="text-[clamp(13px,3.5vw,16px)] font-normal tracking-[0.08em] text-foreground/80"
                  >
                    {msg}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Expanded video overlay */}
      {carouselOpen && (
        <div
          className="fixed inset-0 z-[1100] flex flex-col items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <h3 className="font-display text-[clamp(22px,5vw,36px)] text-foreground tracking-[0.1em] mb-6">
            Videos
          </h3>
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-0 py-2 w-max"
              style={{ animation: "tickerScroll 50s linear infinite" }}
            >
              {[...videoIds, ...videoIds].map((id, i) => (
                <div
                  key={`overlay-${id}-${i}`}
                  className="flex-shrink-0 w-[284px] md:w-[364px] px-2"
                >
                  <div
                    className="rounded-xl overflow-hidden cursor-pointer relative group transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                    onClick={(e) => { e.stopPropagation(); setActiveVideoId(id); }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt=""
                      className="w-full aspect-video object-cover block"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/5 transition-all">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: "rgba(192,57,43,0.9)", boxShadow: "0 4px 16px rgba(192,57,43,0.5)" }}
                      >
                        <Play className="w-5 h-5 fill-foreground text-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onToggleCarousel}
            className="mt-8 w-14 h-14 rounded-full flex items-center justify-center text-foreground text-xl cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(192,57,43,0.85)",
              border: "2px solid rgba(255,255,255,0.25)",
              boxShadow: "0 6px 24px rgba(192,57,43,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Video player modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={() => setActiveVideoId(null)}
        >
          <div className="relative w-[92vw] max-w-[900px]" onClick={(e) => e.stopPropagation()}>
            <div
              className="absolute -top-10 right-0 text-foreground text-[13px] font-semibold tracking-[0.12em] cursor-pointer opacity-70 hover:opacity-100 flex items-center gap-1"
              onClick={() => setActiveVideoId(null)}
            >
              <X className="w-4 h-4" /> Close
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              className="w-full aspect-video border-none rounded-xl"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
