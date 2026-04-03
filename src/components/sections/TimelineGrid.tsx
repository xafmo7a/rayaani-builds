interface TimelineItem {
  year: string;
  event: string;
  detail: string;
}

const TimelineGrid = ({ label, items }: { label: string; items: TimelineItem[] }) => (
  <div className="px-5 md:px-10 py-8 md:py-10" style={{ borderBottom: "1px solid hsl(0 0% 12%)" }}>
    <div
      className="flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.3em] uppercase mb-6"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {label}
      <span className="flex-1 h-px" style={{ background: "hsl(0 0% 12%)" }} />
    </div>

    <div
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ border: "1px solid hsl(0 0% 12%)" }}
    >
      {items.map((item, i) => (
        <div
          key={`${item.year}-${i}`}
          className="p-4 md:p-5"
          style={{
            borderRight: (i + 1) % 3 !== 0 ? "1px solid hsl(0 0% 12%)" : "none",
            borderBottom: i < items.length - 3 ? "1px solid hsl(0 0% 12%)" : "none",
          }}
        >
          <div className="font-display text-[28px] font-light leading-none mb-2" style={{ color: "hsl(var(--aia-red))" }}>
            {item.year}
          </div>
          <div className="text-[12.5px] font-semibold text-foreground mb-1 tracking-[0.02em]">
            {item.event}
          </div>
          <div className="text-[11.5px] text-foreground/50 leading-relaxed font-normal">
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TimelineGrid;
