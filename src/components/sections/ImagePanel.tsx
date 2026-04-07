import ImageLightbox from "@/components/ui/ImageLightbox";

const ImagePanel = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) => (
  <div className="w-full" style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}>
    {label && (
      <div className="px-5 md:px-10 pt-6 pb-3">
        <div
          className="h-px mb-5"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--aia-red)), transparent 60%)",
          }}
        />
        <h3
          className="text-[9px] font-semibold tracking-[0.28em] uppercase"
          style={{ color: "hsl(0 0% 45%)" }}
        >
          {label}
        </h3>
      </div>
    )}
    <div className="px-5 md:px-10 pb-6">
      <ImageLightbox
        src={src}
        alt={alt}
        className="w-full h-auto rounded-md"
      />
    </div>
  </div>
);

export default ImagePanel;
