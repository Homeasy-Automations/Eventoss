"use client";

export default function Marquee({ text, speed = 30, reverse = false, className = "" }: { text: string; speed?: number; reverse?: boolean; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap border-y border-[#0F2A3D]/10 ${className}`}>
      <div
        className="flex w-max"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-8 pr-8">
            <span className="text-[14px] tracking-[0.28em] font-semibold uppercase">{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2A3D]/20" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
