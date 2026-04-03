interface CarouselItem {
  caption: string;
  year: string;
}

const AwardsCarousel = ({ label, items }: { label: string; items: CarouselItem[] }) => (
  <div>
    <div className="px-5 md:px-10 pt-6 pb-3">
      <h3 className="text-[9px] font-semibold tracking-[0.28em] uppercase" style={{ color: "hsl(0 0% 40%)" }}>
        {label}
      </h3>
    </div>
    <div
      className="flex gap-3 overflow-x-auto px-5 md:px-10 pb-6"
      style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(0 0% 12%) transparent" }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex-shrink-0 w-[200px] md:w-[240px]">
          <div
            className="w-full aspect-video rounded-md flex items-center justify-center mb-2"
            style={{
              background: "hsl(0 0% 8%)",
              border: "1px dashed hsl(0 0% 15%)",
            }}
          >
            <span className="text-[9px] tracking-[0.12em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>
              Image / Media
            </span>
          </div>
          <div className="text-[11px] text-foreground/50 tracking-[0.04em] font-medium">
            {item.caption}
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "hsl(0 0% 27%)" }}>
            {item.year}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AwardsCarousel;
