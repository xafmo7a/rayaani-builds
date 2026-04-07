import { useNavigate } from "react-router-dom";

interface DropdownMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "AIA", path: "/aia" },
  { label: "Public", path: "/public" },
  { label: "Service", path: "/services" },
] as const;

const DropdownMenu = ({ open, onClose }: DropdownMenuProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center transition-opacity duration-300"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 -z-[1]"
        style={{
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(16px) saturate(1.4)",
          WebkitBackdropFilter: "blur(16px) saturate(1.4)",
        }}
        onClick={onClose}
      />

      {/* Menu items */}
      <nav className="flex flex-col items-center gap-6">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => {
              navigate(item.path);
              onClose();
            }}
            className="w-[280px] md:w-[360px] py-5 rounded-full font-display text-[clamp(24px,5vw,36px)] tracking-[0.22em] uppercase text-white cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(var(--aia-red)), hsl(var(--aia-red-glow)))",
              border: "1px solid rgba(255,120,80,0.3)",
              boxShadow: "0 6px 24px hsl(var(--aia-red) / 0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Close */}
      <div
        className="absolute bottom-10 text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/30 cursor-pointer transition-colors duration-200 hover:text-foreground/60"
        onClick={onClose}
      >
        ✕ &nbsp; Close
      </div>
    </div>
  );
};

export default DropdownMenu;
