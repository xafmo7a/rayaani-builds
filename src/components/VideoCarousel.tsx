import { useState } from "react";
import { X, Play } from "lucide-react";

const videos = [
  { id: "P1UgHTA8DP8" },
  { id: "EBs2KYQk1Mw" },
  { id: "xkYiWUhd-Qw" },
  { id: "GF6qOeUbyhU" },
  { id: "kgIr6sUIglI" },
  { id: "K_Skn9w68wc" },
  { id: "kt9HqoJ7tmU" },
];

// Duplicate for infinite scroll effect
const allVideos = [...videos, ...videos];

interface VideoCarouselProps {
  open: boolean;
  onClose: () => void;
}

const VideoCarousel = ({ open, onClose }: VideoCarouselProps) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const playVideo = (id: string) => {
    setActiveVideoId(id);
  };

  const closePlayer = () => {
    setActiveVideoId(null);
  };

  return (
    <>
      {/* Carousel panel */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "320px" : "0",
          background: "rgba(8,8,12,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: open ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div
          className="flex gap-3 px-4 py-4 overflow-x-auto snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {allVideos.map((video, i) => (
            <div
              key={`${video.id}-${i}`}
              className="flex-shrink-0 w-[200px] snap-start rounded-[10px] overflow-hidden cursor-pointer relative group transition-all duration-200 hover:scale-[1.02]"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,25,0.8)",
              }}
              onClick={() => playVideo(video.id)}
            >
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt=""
                  className="w-full aspect-video object-cover block"
                  style={{ background: "#111" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-200">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background: "rgba(192,57,43,0.85)",
                      boxShadow: "0 2px 12px rgba(192,57,43,0.5)",
                    }}
                  >
                    <Play className="w-3.5 h-3.5 fill-foreground text-foreground ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={closePlayer}
        >
          <div
            className="relative w-[90vw] max-w-[800px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute -top-9 right-0 text-foreground text-sm font-semibold tracking-[0.1em] cursor-pointer opacity-70 hover:opacity-100 flex items-center gap-1"
              onClick={closePlayer}
            >
              <X className="w-4 h-4" /> Close
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              className="w-full aspect-video border-none rounded-[10px]"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCarousel;
