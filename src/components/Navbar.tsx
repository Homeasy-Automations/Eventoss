"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Menu, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Reference is super minimal — black compact
  const navBg = pathname === "/" && !scrolled ? "bg-[#0F2A3D]/15 backdrop-blur-[5px] border-white/10" : "bg-[#0F2A3D] border-white/10";

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-500 ${navBg}`}>
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 h-[56px] lg:h-[60px] flex items-center justify-between">
          {/* Left tiny label like reference top */}
          <Link href="/" className="flex items-baseline gap-4 group">
            <span className="flex flex-col leading-none">
              <span className="text-[20px] lg:text-[21px] font-black tracking-[0.16em] text-white" style={{ fontFamily: "var(--font-inter)" }}>
                EVENTOSS
              </span>
              <span className="text-[7.5px] tracking-[0.38em] font-semibold text-white/70 -mt-[2px]">CORPORATE EVENTS</span>
            </span>
            <span className="hidden lg:block h-4 w-px bg-white/15 ml-2" />
            <span className="hidden lg:block label-sm text-white/40 tracking-[0.22em]">Patna · Delhi · Ranchi</span>
          </Link>

          {/* Center nav — minimal editorial like FLOWERS & MORE */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/about" className={`group relative label-sm text-white hover:opacity-100 transition-opacity pb-1 ${pathname === "/about" ? "opacity-100" : "opacity-55"}`}>
              About
              <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/services" className={`group relative label-sm text-white hover:opacity-100 transition-opacity flex items-center gap-1.5 pb-1 ${pathname.startsWith("/services") ? "opacity-100" : "opacity-55"}`}>
                Services <span className={`text-[7px] opacity-60 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
                <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname.startsWith("/services") ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.24 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-5">
                    <div className="bg-[#FCFCFB] text-[#0F2A3D] min-w-[640px] p-7 grid grid-cols-2 gap-x-8 gap-y-2 shadow-2xl border border-[#0F2A3D]/10">
                      <div className="col-span-2 flex justify-between items-center border-b border-[#0F2A3D]/10 pb-3 mb-1">
                        <span className="label-sm opacity-40">7 Event Verticals</span>
                        <Link href="/services" className="label-sm flex items-center gap-1 hover:opacity-60">View all <ArrowUpRight className="w-3 h-3" /></Link>
                      </div>
                      {services.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="group flex gap-2.5 py-1.5 hover:opacity-60 hover:translate-x-1 transition-all duration-300 text-[12.5px] leading-tight">
                          <span className="opacity-25 text-[10px] pt-0.5 group-hover:text-[#FF3D00] group-hover:opacity-100 transition-colors duration-300">{s.number}</span>{s.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/work" className={`group relative label-sm text-white hover:opacity-100 transition-opacity pb-1 ${pathname.startsWith("/work") ? "opacity-100" : "opacity-55"}`}>
              Projects
              <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname.startsWith("/work") ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/team" className={`group relative label-sm text-white hover:opacity-100 transition-opacity pb-1 ${pathname === "/team" ? "opacity-100" : "opacity-55"}`}>
              Team
              <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname === "/team" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/press" className={`group relative label-sm text-white hover:opacity-100 transition-opacity pb-1 ${pathname === "/press" ? "opacity-100" : "opacity-55"}`}>
              Press
              <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname === "/press" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/blog" className={`group relative label-sm text-white hover:opacity-100 transition-opacity pb-1 ${pathname === "/blog" ? "opacity-100" : "opacity-55"}`}>
              Blog
              <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname === "/blog" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/contact" className={`group relative label-sm text-white hover:opacity-100 transition-opacity pb-1 ${pathname === "/contact" ? "opacity-100" : "opacity-55"}`}>
              Contact
              <span className={`absolute left-0 -bottom-0.5 h-px bg-[#FF3D00] transition-all duration-300 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)} className="hidden lg:flex w-8 h-8 items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-white hover:text-[#0F2A3D] hover:border-white hover:rotate-90 transition-all duration-300" aria-label="Search">
              <Search className="w-[13px] h-[13px]" />
            </button>
            <Link href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-white text-[#0F2A3D] px-5 h-8 label-sm hover:bg-[#FF3D00] hover:text-white hover:gap-3 transition-all duration-300 text-[10px]">Get Consultation</Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center text-white" aria-label="Menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-[#0F2A3D]">
            <div className="mx-auto max-w-[1920px] px-6 lg:px-10 py-3 flex gap-3">
              <input placeholder="Search services, projects..." className="flex-1 bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none" />
              <button className="bg-white text-[#0F2A3D] px-7 label-sm">Search</button>
            </div>
          </motion.div>
        )}
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#0F2A3D] lg:hidden flex flex-col">
            <div className="pt-[60px] flex-1 overflow-y-auto px-6 py-6">
              <nav className="flex flex-col">
                {[
                  { label: "About", href: "/about", num: "01" },
                  { label: "Services", href: "/services", num: "02" },
                  { label: "Projects", href: "/work", num: "03" },
                  { label: "Team", href: "/team", num: "04" },
                  { label: "Press", href: "/press", num: "05" },
                  { label: "Blog", href: "/blog", num: "06" },
                  { label: "Contact", href: "/contact", num: "07" },
                ].map((item, i) => (
                  <motion.div key={item.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i, duration: 0.5 }}>
                    <Link href={item.href} className="group flex items-baseline justify-between py-5 border-b border-white/10 active:opacity-60 transition-opacity">
                      <span className="text-white text-[38px] font-light tracking-[-0.03em] transition-transform duration-300 group-active:translate-x-1" style={{ fontFamily: "var(--font-playfair)" }}>{item.label}</span>
                      <span className="label-sm text-white/25 group-active:text-[#FF3D00] transition-colors duration-300">{item.num}</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-6">
                  <p className="label-sm text-white/35 mb-3">Services</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {services.slice(0, 6).map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="text-white/60 text-sm py-1 flex gap-2">
                        <span className="opacity-25 text-xs">{s.number}</span> {s.title}
                      </Link>
                    ))}
                    <Link href="/services" className="text-white label-sm mt-2 inline-flex gap-1">View all 7 verticals →</Link>
                  </div>
                </div>
              </nav>
              <div className="mt-10 space-y-3">
                <Link href="/contact" className="flex w-full bg-white text-[#0F2A3D] h-12 items-center justify-center label-sm">Get Consultation</Link>
                <div className="flex gap-3 text-white/50 text-sm">
                  <a href="tel:+917061528401">+91 70615 28401</a>
                  <span>·</span>
                  <a href="mailto:info@eventoss.in">info@eventoss.in</a>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-white/10 flex justify-between items-center">
              <span className="label-sm text-white/25">© Eventoss Entertainment</span>
              <span className="label-sm text-white/25">Patna · Delhi · Ranchi</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
