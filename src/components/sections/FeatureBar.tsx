const FeatureBar = ({ num, title, text }: { num: string; title: string; text: string }) => (
  <div
    className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-5 md:px-10 py-6 md:py-8"
    style={{
      background: "hsl(0 0% 5%)",
      borderTop: "1px solid hsl(0 0% 15%)",
      borderBottom: "1px solid hsl(0 0% 15%)",
    }}
  >
    <div
      className="font-display text-[clamp(36px,5vw,58px)] font-light leading-none flex-shrink-0 min-w-[70px] md:min-w-[90px]"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {num}
    </div>
    <div>
      <h3 className="font-display text-[clamp(18px,2.5vw,22px)] font-normal text-white mb-1">
        {title}
      </h3>
      <p className="text-[12.5px] text-white/50 leading-[1.75] max-w-[500px] font-normal">
        {text}
      </p>
    </div>
  </div>
);

export default FeatureBar;
