import { cn } from "@/lib/utils";

type HeroImageBandProps = {
  src: string;
  alt: string;
  chipLeft?: string;
  chipRight?: string;
  quote?: string;
  quoteAttribution?: string;
  heightClassName?: string;
  className?: string;
};

/**
 * Full-bleed hero image with layered editorial chrome: a small corner
 * chip, an optional dark chip on the opposite corner, and a quote card
 * that overlaps the bottom edge of the photo. This is the recurring
 * "photo + overlapping caption" pattern used across every page hero —
 * an original layout built for Eventoss, not copied markup from any
 * third-party site.
 */
export function HeroImageBand({
  src,
  alt,
  chipLeft,
  chipRight,
  quote,
  quoteAttribution,
  heightClassName = "h-[340px] lg:h-[460px]",
  className,
}: HeroImageBandProps) {
  return (
    <div className={cn("relative mt-8", quote ? "mb-10 lg:mb-16" : "", className)}>
      <div className={cn("overflow-hidden relative", heightClassName)}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
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
    </div>
  );
}
