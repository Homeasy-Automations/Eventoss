import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2A3D] text-white">
      {/* Large editorial wordmark — reference has huge BOLLE */}
      <div className="border-b border-white/10 overflow-hidden">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 flex justify-center">
          <h2 className="text-[19vw] lg:text-[16vw] font-black leading-none tracking-[-0.05em] py-6 lg:py-8 whitespace-nowrap select-none text-center" style={{ fontFamily: "var(--font-inter)" }}>
            EVENTOSS
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-14 ">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 justify-center lg:max-w-[1100px] lg:mx-auto">
          <div className="col-span-2 lg:col-span-3">
            <p className="label-sm text-white/35 mb-6">Connect with us</p>
            <div className="space-y-2.5 text-[13px] leading-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative inline-block text-white/70 hover:text-white transition-colors duration-300">
                Instagram — @eventoss
                <span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">
                LinkedIn — Eventoss
                <span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">
                Pinterest
                <span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="https://wa.me/917061528401" target="_blank" rel="noopener noreferrer" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">
                WhatsApp — +91 70615 28401
                <span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" />
              </a>
            </div>
            <div className="mt-8 flex gap-2.5">
              <a href="https://instagram.com" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#FF3D00] hover:text-white hover:border-[#FF3D00] hover:-translate-y-1 transition-all duration-300 text-[10px]">IG</a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#FF3D00] hover:text-white hover:border-[#FF3D00] hover:-translate-y-1 transition-all duration-300 text-[10px]">IN</a>
              <a href="https://wa.me/917061528401" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#FF3D00] hover:text-white hover:border-[#FF3D00] hover:-translate-y-1 transition-all duration-300 text-[10px]">WA</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="label-sm text-white/35 mb-6">Navigate</p>
            <div className="space-y-2 text-[13px]">
              <Link href="/about" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">About<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/services" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Services<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/work" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Projects<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/team" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Team<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/press" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Press<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/blog" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Blog<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/contact" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Contact<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="label-sm text-white/35 mb-6">Legal</p>
            <div className="space-y-2 text-[13px]">
              <Link href="#" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">FAQ<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="/contact" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Contact Us<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="#" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Credits<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
              <Link href="#" className="group relative block w-fit text-white/70 hover:text-white transition-colors duration-300">Legal Terms<span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" /></Link>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-5 lg:pl-6">
            <p className="label-sm text-white/35 mb-6">Contact</p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@eventoss.in" className="group relative inline-block text-white hover:text-white text-[15px] transition-colors duration-300">
                info@eventoss.in
                <span className="absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] w-0 group-hover:w-full transition-all duration-300" />
              </a>
              <div className="text-white/50 leading-relaxed text-[13px]">
                208-A, Kaushalya Estate,<br />
                Dak Bungalow Road,<br />
                Patna, Bihar 800001
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 label-sm text-white/45 text-[10px]">
                <a href="tel:+917061528401" className="hover:text-white transition-colors duration-300">+91 70615 28401</a>
                <a href="tel:+917061528402" className="hover:text-white transition-colors duration-300">+91 70615 28402</a>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 label-sm text-white/45 text-[10px]">
                <a href="tel:+916122230055" className="hover:text-white transition-colors duration-300">0612 2230055</a>
              </div>
            </div>
            <div className="mt-7 flex gap-2">
              <Link href="/contact" className="inline-flex items-center justify-center px-2 h-9 bg-white text-[#0F2A3D] label-sm hover:bg-[#FF3D00] hover:text-white transition-colors duration-300 text-[10px]">Start a conversation</Link>
              <a href="https://wa.me/917061528401" className="inline-flex items-center justify-center px-5 h-9 border border-white/20 text-white label-sm hover:bg-white hover:text-[#0F2A3D] transition-colors duration-300 text-[10px]">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left justify-center lg:justify-between gap-3">
          <p className="label-sm text-white/25 text-[9px]">© Eventoss Entertainment Pvt Ltd. All rights reserved.</p>
          <p className="label-sm text-white/25 text-[9px]">Corporate Events Division · Patna · Delhi · Ranchi</p>
        </div>
      </div>
    </footer>
  );
}
