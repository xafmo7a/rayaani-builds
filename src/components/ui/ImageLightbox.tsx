import { useState, useCallback } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageLightbox = ({ src, alt, className = "", style }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className}`}
        style={style}
        onClick={handleOpen}
      />
      {open && (
        <div
          className="fixed inset-0 z-[3000] flex items-center justify-center animate-fade-in"
          style={{
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={handleClose}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[92vw] max-h-[90vh] object-contain rounded-lg animate-scale-in cursor-zoom-out"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
            onClick={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
