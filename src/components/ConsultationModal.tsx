"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";
import { apiPath } from "@/lib/api";

const eventTypes = [
  "Conferences & Conventions",
  "MICE",
  "Annual Meets",
  "Dealer & Distributor Meets",
  "Sales Meets",
  "Business Summits",
  "Leadership Meets",
  "Town Halls",
  "Corporate Celebrations",
  "Award Ceremonies",
  "Gala Dinners",
  "Product & Brand Launches",
  "Corporate Offsites",
  "Employee Engagement Events",
  "Family Days",
  "Other / Bespoke",
];

const budgets = [
  "Under ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹50L",
  "₹50L – ₹1Cr",
  "₹1Cr+",
  "To be discussed",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationModal() {
  const { isOpen, source, closeConsultation } = useConsultationModal();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeConsultation();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstFieldRef.current?.focus(), 350);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [isOpen, closeConsultation]);

  // Reset transient state a beat after close so the form doesn't flash on next open
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setStatus("idle");
      setErrors({});
    }, 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values: Record<string, string> = {};
    data.forEach((v, k) => (values[k] = v.toString().trim()));

    const newErrors: Record<string, string> = {};
    if (!values.name) newErrors.name = "Required";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) newErrors.email = "Valid email required";
    if (!values.phone) newErrors.phone = "Required";
    if (!values.eventType) newErrors.eventType = "Required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch(apiPath("/api/consultation"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start lg:items-center justify-center p-0 lg:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[#0F2A3D]/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConsultation}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
            className="relative w-full lg:max-w-[880px] bg-[#FCFCFB] text-[#0F2A3D] shadow-2xl my-0 lg:my-auto min-h-screen lg:min-h-0"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-[280px_1fr]">
              {/* Side panel */}
              <div className="hidden lg:flex flex-col justify-between bg-[#0F2A3D] text-white p-8">
                <div>
                  <span className="label-sm text-white/50">Eventoss Corporate Events</span>
                  <h2 className="mt-4 text-[32px] leading-[1.05] font-light" style={{ fontFamily: "var(--font-playfair)" }}>
                    Let&apos;s plan your next event.
                  </h2>
                  <p className="mt-4 text-sm text-white/60 leading-relaxed">
                    Share a few details and our team will get back to you within 24 hours with next steps.
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="h-px bg-white/15" />
                  <a href="tel:+917061528401" className="block text-white/70 hover:text-white transition-colors">+91 70615 28401</a>
                  <a href="mailto:info@eventoss.in" className="block text-white/70 hover:text-white transition-colors">info@eventoss.in</a>
                  <span className="label-sm text-white/35 block pt-1">Patna · Delhi · Ranchi</span>
                </div>
              </div>

              {/* Form panel */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="label-sm opacity-40">Get Consultation</span>
                    <h2 id="consultation-modal-title" className="mt-1.5 text-2xl lg:text-[26px] font-light" style={{ fontFamily: "var(--font-playfair)" }}>
                      Tell us about your event
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={closeConsultation}
                    aria-label="Close consultation form"
                    className="w-9 h-9 flex items-center justify-center border border-[#0F2A3D]/15 hover:bg-[#0F2A3D] hover:text-white hover:rotate-90 transition-all duration-300 shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-10 flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#0F2A3D] text-white flex items-center justify-center mb-5">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-light mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Request received</h3>
                    <p className="text-sm opacity-60 max-w-[380px] leading-relaxed">
                      Thank you — our team will respond within 24 hours with next steps. For urgent coordination, WhatsApp us at{" "}
                      <a href="https://wa.me/917061528401" className="underline">+91 70615 28401</a>.
                    </p>
                    <button
                      type="button"
                      onClick={closeConsultation}
                      className="mt-7 bg-[#0F2A3D] text-white px-7 h-11 label-sm hover:bg-[#FF3D00] transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="label-sm opacity-60">Full Name *</label>
                        <input
                          ref={firstFieldRef}
                          name="name"
                          placeholder="Aarav Sharma"
                          className={`mt-2 w-full h-11 px-3.5 border bg-white text-sm focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="label-sm opacity-60">Company</label>
                        <input
                          name="company"
                          placeholder="Company Pvt Ltd"
                          className="mt-2 w-full h-11 px-3.5 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="label-sm opacity-60">Email *</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="aarav@company.com"
                          className={`mt-2 w-full h-11 px-3.5 border bg-white text-sm focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="label-sm opacity-60">Phone *</label>
                        <input
                          name="phone"
                          placeholder="+91 98xxxx xxxx"
                          className={`mt-2 w-full h-11 px-3.5 border bg-white text-sm focus:outline-none transition-colors ${errors.phone ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="label-sm opacity-60">Event Type *</label>
                        <select
                          name="eventType"
                          defaultValue=""
                          className={`mt-2 w-full h-11 px-3.5 border bg-white text-sm focus:outline-none transition-colors ${errors.eventType ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
                        >
                          <option value="" disabled>Select event type</option>
                          {eventTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        {errors.eventType && <p className="text-xs text-red-500 mt-1">{errors.eventType}</p>}
                      </div>
                      <div>
                        <label className="label-sm opacity-60">Event Date</label>
                        <input
                          name="eventDate"
                          type="date"
                          className="mt-2 w-full h-11 px-3.5 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="label-sm opacity-60">City</label>
                        <input
                          name="city"
                          placeholder="Patna / Delhi / Goa"
                          className="mt-2 w-full h-11 px-3.5 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="label-sm opacity-60">Est. Guests</label>
                        <input
                          name="guests"
                          placeholder="e.g. 250"
                          className="mt-2 w-full h-11 px-3.5 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="label-sm opacity-60">Budget</label>
                        <select
                          name="budget"
                          defaultValue=""
                          className="mt-2 w-full h-11 px-3.5 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors"
                        >
                          <option value="" disabled>Select</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="label-sm opacity-60">A little about your event</label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Objectives, audience, venue preferences, must-haves..."
                        className="mt-2 w-full p-3.5 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#0F2A3D] text-white h-12 label-sm hover:bg-[#FF3D00] disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? "Sending..." : status === "error" ? "Please fix errors" : "Request consultation"}
                    </button>
                    <p className="text-xs opacity-40 leading-relaxed">
                      By submitting, you agree to be contacted by Eventoss regarding your enquiry. We respect your privacy — no spam, no third-party sharing.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
