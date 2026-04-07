interface ColumnData {
  tag: string;
  heading: string;
  body: React.ReactNode;
}

const TwoColumn = ({ left, right }: { left: ColumnData; right: ColumnData }) => (
  <div style={{ borderBottom: "1px solid hsl(0 0% 88%)" }}>
    {/* Black banner with both tags */}
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: "hsl(0 0% 5%)", borderBottom: "1px solid hsl(0 0% 15%)" }}
    >
      <div className="px-5 md:px-8 py-4">
        <h3 className="font-display text-[clamp(14px,2vw,18px)] font-normal tracking-[0.12em] uppercase text-white">
          {left.heading}
        </h3>
        <div className="text-[9px] font-semibold tracking-[0.28em] uppercase mt-1" style={{ color: "hsl(var(--aia-red))" }}>
          {left.tag}
        </div>
      </div>
      <div className="px-5 md:px-8 py-4 border-t md:border-t-0 md:border-l" style={{ borderColor: "hsl(0 0% 15%)" }}>
        <h3 className="font-display text-[clamp(14px,2vw,18px)] font-normal tracking-[0.12em] uppercase text-white">
          {right.heading}
        </h3>
        <div className="text-[9px] font-semibold tracking-[0.28em] uppercase mt-1" style={{ color: "hsl(var(--aia-red))" }}>
          {right.tag}
        </div>
      </div>
    </div>
    {/* White content */}
    <div
      className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="p-5 md:p-8">
        <div className="text-[12.5px] leading-[1.85] text-black/60 font-normal tracking-[0.015em]">
          {left.body}
        </div>
      </div>
      <div className="hidden md:block" style={{ background: "hsl(0 0% 88%)" }} />
      <div className="p-5 md:p-8 border-t md:border-t-0" style={{ borderColor: "hsl(0 0% 88%)" }}>
        <div className="text-[12.5px] leading-[1.85] text-black/60 font-normal tracking-[0.015em]">
          {right.body}
        </div>
      </div>
    </div>
  </div>
);

export default TwoColumn;
