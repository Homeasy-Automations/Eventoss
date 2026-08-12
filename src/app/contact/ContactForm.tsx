"use client";

import { useState } from "react";

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

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values: Record<string, string> = {};
    data.forEach((v, k) => (values[k] = v.toString().trim()));

    const newErrors: Record<string, string> = {};
    if (!values.firstName) newErrors.firstName = "Required";
    if (!values.lastName) newErrors.lastName = "Required";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) newErrors.email = "Valid email required";
    if (!values.phone) newErrors.phone = "Required";
    if (!values.eventType) newErrors.eventType = "Required";
    if (!values.message) newErrors.message = "Required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <label className="label-sm opacity-60">First Name *</label>
          <input
            name="firstName"
            placeholder="Aarav"
            className={`mt-2 w-full h-12 px-4 border bg-white text-sm focus:outline-none transition-colors ${errors.firstName ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
          />
          {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="label-sm opacity-60">Last Name *</label>
          <input
            name="lastName"
            placeholder="Sharma"
            className={`mt-2 w-full h-12 px-4 border bg-white text-sm focus:outline-none transition-colors ${errors.lastName ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
          />
          {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <label className="label-sm opacity-60">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="aarav@company.com"
            className={`mt-2 w-full h-12 px-4 border bg-white text-sm focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="label-sm opacity-60">Phone *</label>
          <input
            name="phone"
            placeholder="+91 98xxxx xxxx"
            className={`mt-2 w-full h-12 px-4 border bg-white text-sm focus:outline-none transition-colors ${errors.phone ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <label className="label-sm opacity-60">Company</label>
          <input name="company" placeholder="Company Pvt Ltd" className="mt-2 w-full h-12 px-4 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors" />
        </div>
        <div>
          <label className="label-sm opacity-60">Event Type *</label>
          <select name="eventType" defaultValue="" className={`mt-2 w-full h-12 px-4 border bg-white text-sm focus:outline-none transition-colors ${errors.eventType ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}>
            <option value="" disabled>Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.eventType && <p className="text-xs text-red-500 mt-1">{errors.eventType}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div>
          <label className="label-sm opacity-60">Event Date</label>
          <input name="eventDate" type="date" className="mt-2 w-full h-12 px-4 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors" />
        </div>
        <div>
          <label className="label-sm opacity-60">City</label>
          <input name="city" placeholder="Patna / Delhi / Goa" className="mt-2 w-full h-12 px-4 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors" />
        </div>
        <div>
          <label className="label-sm opacity-60">Estimated Guests</label>
          <input name="guests" placeholder="e.g. 250" className="mt-2 w-full h-12 px-4 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors" />
        </div>
      </div>

      <div>
        <label className="label-sm opacity-60">Budget</label>
        <select name="budget" defaultValue="" className="mt-2 w-full h-12 px-4 border border-[#0F2A3D]/15 bg-white text-sm focus:outline-none focus:border-[#0F2A3D] transition-colors">
          <option value="" disabled>Select budget range</option>
          <option>Under ₹5L</option>
          <option>₹5L – ₹15L</option>
          <option>₹15L – ₹50L</option>
          <option>₹50L – ₹1Cr</option>
          <option>₹1Cr+</option>
          <option>To be discussed</option>
        </select>
      </div>

      <div>
        <label className="label-sm opacity-60">Message *</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your event objectives, audience, venue preferences, and any must-haves..."
          className={`mt-2 w-full p-4 border bg-white text-sm focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-[#0F2A3D]/15 focus:border-[#0F2A3D]"}`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#0F2A3D] text-white h-[52px] label-sm hover:bg-zinc-800 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Enquiry sent — thank you!" : status === "error" ? "Please fix errors" : "Submit enquiry"}
      </button>

      {status === "success" && (
        <div className="bg-[#E8F3FB] border border-[#0F2A3D]/10 p-4 text-sm leading-6">
          Thank you — our team will respond within 24 hours with next steps. For urgent coordination, WhatsApp us at <a href="https://wa.me/917061528401" className="underline">+91 70615 28401</a>.
        </div>
      )}
      <p className="text-xs opacity-40 leading-relaxed">By submitting, you agree to be contacted by Eventoss regarding your enquiry. We respect your privacy — no spam, no third-party sharing.</p>
    </form>
  );
}
