interface Stat {
  value: string;
  label: string;
}

const StatsRow = ({ stats }: { stats: Stat[] }) => (
  <div
    className="grid grid-cols-2 md:grid-cols-4"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    {stats.map((stat, i) => (
      <div
        key={stat.label}
        className="py-6 px-4 md:px-6 text-center"
        style={{
          borderRight: i < stats.length - 1 ? "1px solid hsl(0 0% 88%)" : "none",
        }}
      >
        <div
          className="font-display text-[clamp(28px,4vw,40px)] font-light leading-none"
          style={{ color: "hsl(var(--aia-red))" }}
        >
          {stat.value}
        </div>
        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase mt-1.5" style={{ color: "hsl(0 0% 45%)" }}>
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

export default StatsRow;
