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
      <div
        className="px-5 md:px-10 py-4"
        style={{
          background: "hsl(0 0% 5%)",
          borderBottom: "1px solid hsl(0 0% 15%)",
        }}
      >
        <h3
          className="font-display text-[clamp(14px,2vw,18px)] font-normal tracking-[0.12em] uppercase text-white"
        >
          {label}
        </h3>
      </div>
    )}
    <div className="px-5 md:px-10 py-6">
      <ImageLightbox
        src={src}
        alt={alt}
        className="w-full h-auto rounded-md"
      />
    </div>
  </div>
);

export default ImagePanel;
