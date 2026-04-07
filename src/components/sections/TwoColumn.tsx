interface ColumnData {
  tag: string;
  heading: string;
  body: React.ReactNode;
}

const TwoColumn = ({ left, right }: { left: ColumnData; right: ColumnData }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <div className="p-5 md:p-8">
      <div className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "hsl(var(--aia-red))" }}>
        {left.tag}
      </div>
      <h3 className="font-display text-[20px] font-normal text-black mb-3 leading-[1.3]">
        {left.heading}
      </h3>
      <div className="text-[12.5px] leading-[1.85] text-black/60 font-normal tracking-[0.015em]">
        {left.body}
      </div>
    </div>
    <div className="hidden md:block" style={{ background: "hsl(0 0% 88%)" }} />
    <div className="p-5 md:p-8 border-t md:border-t-0" style={{ borderColor: "hsl(0 0% 88%)" }}>
      <div className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "hsl(var(--aia-red))" }}>
        {right.tag}
      </div>
      <h3 className="font-display text-[20px] font-normal text-black mb-3 leading-[1.3]">
        {right.heading}
      </h3>
      <div className="text-[12.5px] leading-[1.85] text-black/60 font-normal tracking-[0.015em]">
        {right.body}
      </div>
    </div>
  </div>
);

export default TwoColumn;
