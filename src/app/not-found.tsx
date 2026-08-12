import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FCFCFB] px-6 text-center pt-20">
      <p className="label-sm opacity-40">404 — Not found</p>
      <h1 className="text-[42px] lg:text-[64px] leading-none tracking-[-0.04em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
        This page <span className="italic font-light">isn&apos;t</span> on the run-of-show.
      </h1>
      <p className="text-sm opacity-60 mt-6 max-w-[480px]">The page you&apos;re looking for doesn&apos;t exist or was moved. Let&apos;s get you back to the main programme.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="bg-[#0F2A3D] text-white px-8 h-11 inline-flex items-center label-sm">Back to home</Link>
        <Link href="/contact" className="border border-[#0F2A3D] px-8 h-11 inline-flex items-center label-sm">Contact us</Link>
      </div>
    </div>
  );
}
