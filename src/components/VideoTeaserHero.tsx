"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type VideoTeaserHeroProps = {
  src: string;
  alt: string;
  chipLeft?: string;
  chipRight?: string;
  quote?: string;
  quoteAttribution?: string;
  heightClassName?: string;
  className?: string;
  /**
   * Optional YouTube video ID. Leave unset for now — the play button
   * shows as a reserved, non-interactive placeholder. Once a video is
   * ready, just pass this prop and the button becomes clickable and
   * opens the video in an inline lightbox. No other changes needed.
   */
  videoId?: string;
};

/**
 * Same editorial "photo + overlapping caption" hero chrome as
 * HeroImageBand, plus a centered play-button affordance that reserves
 * an attractive space for video. Wire in `videoId` later to activate it.
 */
export function VideoTeaserHero({
  src,
  alt,
  chipLeft,
  chipRight,
  quote,
  quoteAttribution,
  heightClassName = "h-[340px] lg:h-[460px]",
  className,
  videoId,
}: VideoTeaserHeroProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative mt-8", quote ? "mb-10 lg:mb-16" : "", className)}>
      <div className={cn("overflow-hidden relative group", heightClassName)}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Subtle darken so the play button always reads clearly */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {chipLeft && (
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#0F2A3D]/10 px-3 py-1.5 label-sm">
            {chipLeft}
          </span>
        )}
        {chipRight && (
          <span className="absolute top-4 right-4 hidden lg:block bg-[#0F2A3D] text-white px-3 py-1.5 label-sm">
            {chipRight}
          </span>
        )}

        {/* PLAY BUTTON — reserved video space */}
        <button
          type="button"
          onClick={() => videoId && setOpen(true)}
          aria-label={videoId ? "Play video" : "Video coming soon"}
          className={cn(
            "absolute inset-0 m-auto w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center",
            "bg-white/90 backdrop-blur-sm border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
            "transition-transform duration-500",
            videoId ? "cursor-pointer hover:scale-110" : "cursor-default opacity-80"
          )}
        >
          <span
            className="w-0 h-0 border-y-[10px] lg:border-y-[12px] border-y-transparent border-l-[16px] lg:border-l-[19px] border-l-[#0F2A3D] ml-1"
            aria-hidden="true"
          />
        </button>
      </div>

      {quote && (
        <div className="lg:absolute lg:-bottom-10 lg:left-8 lg:max-w-[340px] bg-white border border-[#0F2A3D]/10 p-5 lg:p-6 mt-4 lg:mt-0 shadow-[0_18px_40px_rgba(15,42,61,0.10)]">
          <p
            className="text-[15px] leading-snug text-[#0F2A3D]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          {quoteAttribution && (
            <p className="label-sm opacity-40 mt-2">— {quoteAttribution}</p>
          )}
        </div>
      )}

      {open && videoId && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4 lg:p-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Eventoss video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white label-sm"
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
