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
            className="font-display text-[clamp(48px,12vw,96px)] tracking-[0.18em] uppercase text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 cursor-pointer leading-tight"
            style={{
              textShadow: "0 2px 24px rgba(192,57,43,0.3)",
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
