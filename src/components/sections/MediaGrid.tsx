interface MediaItem {
  year: string;
  title: string;
  outlet: string;
}

const MediaGrid = ({ items }: { items: MediaItem[] }) => (
  <div className="px-5 md:px-10 py-8" style={{ borderBottom: "1px solid hsl(0 0% 12%)" }}>
    <div
      className="flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.3em] uppercase mb-6"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      Publications & Media Coverage
      <span className="flex-1 h-px" style={{ background: "hsl(0 0% 12%)" }} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-4"
          style={{
            background: "hsl(0 0% 8%)",
            border: "1px solid hsl(0 0% 12%)",
          }}
        >
          <div className="text-[9px] tracking-[0.2em] uppercase font-semibold mb-1.5" style={{ color: "hsl(var(--aia-red))" }}>
            {item.year}
          </div>
          <div className="text-[12px] font-semibold text-foreground mb-1 leading-[1.4]">
            {item.title}
          </div>
          <div className="text-[11px] font-normal" style={{ color: "hsl(0 0% 40%)" }}>
            {item.outlet}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MediaGrid;
