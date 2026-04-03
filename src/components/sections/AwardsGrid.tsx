interface AwardItem {
  year: string;
  title: string;
  body: string;
}

const AwardsGrid = ({ label, items }: { label: string; items: AwardItem[] }) => (
  <div className="px-5 md:px-10 py-8 md:py-10" style={{ borderBottom: "1px solid hsl(0 0% 12%)" }}>
    <div
      className="flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.3em] uppercase mb-6"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {label}
      <span className="flex-1 h-px" style={{ background: "hsl(0 0% 12%)" }} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid hsl(0 0% 12%)" }}>
      {items.map((item, i) => (
        <div
          key={`${item.year}-${i}`}
          className="p-4 md:p-5"
          style={{
            borderRight: (i + 1) % 4 !== 0 ? "1px solid hsl(0 0% 12%)" : "none",
            borderBottom: "1px solid hsl(0 0% 12%)",
          }}
        >
          <div className="font-display text-[22px] font-light leading-none mb-1.5" style={{ color: "hsl(var(--aia-red))" }}>
            {item.year}
          </div>
          <div className="text-[11.5px] font-semibold text-foreground mb-0.5 leading-[1.4]">
            {item.title}
          </div>
          <div className="text-[11px] text-foreground/40 leading-[1.55] font-normal">
            {item.body}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AwardsGrid;
