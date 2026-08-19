export type Project = {
  slug: string;
  number: string;
  title: string;
  eventType: string;
  tagline: string;
  client: string;
  location: string;
  year: string;
  highlights: string[];
  image: string;
  heroImage: string;
  gallery: string[];
  story: string[];
  /** Real Eventoss Entertainment YouTube video ID — embedded on the case
   *  study page as on-the-ground footage from the project. */
  videoId: string;
};

export const projects: Project[] = [
  {
    slug: "annual-leadership-summit",
    number: "01",
    title: "Annual Leadership Summit",
    eventType: "Leadership Meets",
    tagline: "Two days of strategic alignment for 180 senior leaders.",
    client: "Confidential — BFSI Client",
    location: "Goa",
    year: "2024",
    highlights: [
      "180 senior leaders across 3 business units",
      "Hybrid keynote with 4 remote offices",
      "Full stage, LED, and show-calling production",
      "Private working dinners and breakout labs",
    ],
    image: "dealersmeet.png",
    heroImage: "/img/coca.jpeg",
    gallery: [
      "/img/location3.jpg",
      "/logos/coca-cola.png",
      "/img/cokemeet.png",
    ],
    story: [
      "Over two days in Goa, 180 senior leaders convened for a strategic alignment summit that had to feel intimate yet operate at enterprise scale.",
      "We built a hybrid keynote environment connecting four remote offices with zero-latency streaming, layered with an LED stage and discreet production. Breakout labs and private working dinners gave leadership teams space to debate, decide, and align — without sacrificing pace or polish.",
    ],
    videoId: "P6QrNKWBIxY",
  },
  {
    slug: "national-dealer-meet",
    number: "02",
    title: "National Dealer Meet",
    eventType: "Dealer & Distributor Meets",
    tagline: "Channel energy, scheme launches, and recognition night.",
    client: "Confidential — FMCG Client",
    location: "Patna",
    year: "2024",
    highlights: [
      "450+ dealers and distributors",
      "Live product demo arena",
      "Incentive scheme reveal production",
      "Awards night with full entertainment",
    ],
    image: "dealers meet.png",
    heroImage: "/images/gallery/dealersmeethero.png",
    gallery: [
      "/images/eventoss-detail-coffee.jpg",
      "/images/gallery/promo-activity.webp",
      "/images/blog/17-plan-your-event.jpg",
    ],
    story: [
      "A 450-strong channel gathering in Patna demanded energy and clarity in equal measure. The brief: launch new schemes, demo products live, and close the night with recognition that feels earned.",
      "We designed a demo arena that let partners get hands-on, a theatrical incentive reveal, and an awards stage run with broadcast-level timing. Every transition was show-called to keep momentum high from briefing to celebration.",
    ],
    videoId: "2l5F7H-GWCY",
  },
  {
    slug: "flagship-product-launch",
    number: "03",
    title: "Flagship Product Launch",
    eventType: "Product & Brand Launches",
    tagline: "A reveal experience built for media, partners, and teams.",
    client: "Confidential — Tech Client",
    location: "New Delhi",
    year: "2023",
    highlights: [
      "Cinematic product reveal moment",
      "Interactive demo experience zone",
      "Press and influencer hospitality",
      "Same-day highlight film delivery",
    ],
    image: "productlaunch.png",
    heroImage: "/images/gallery/launchhero.png",
    gallery: [
      "/images/eventoss-about.jpeg",
      "/images/blog/02-seo-sem.jpeg",
      "/images/gallery/office-exterior.webp",
    ],
    story: [
      "For a confidential tech client, the launch had to work on three levels: a dramatic reveal for the room, hands-on demo zones for partners, and media-ready moments for press.",
      "We engineered a cinematic unveil with lighting, sound, and screen sync, then opened into an interactive demo environment where guests could explore at their own pace. A same-day highlight film ensured the story travelled beyond the room.",
    ],
    videoId: "5csId_CUdKo",
  },
  {
    slug: "grand-family-day",
    number: "04",
    title: "Grand Family Day",
    eventType: "Family Days",
    tagline: "A joyful, safe day out for 1,200 employees and families.",
    client: "Confidential — Manufacturing Client",
    location: "Ranchi",
    year: "2023",
    highlights: [
      "1,200+ guests including children",
      "Dedicated kids safety & first-aid zones",
      "Live stage entertainment",
      "Branded keepsakes and photo moments",
    ],
    image: "familyday.png",
    heroImage: "/images/gallery/familyhero.png",
    gallery: [
      "/images/blog/16-corporate-events-promotions.png",
      "/images/eventoss-team-crowd.jpg",
      "/images/blog/04-post-covid-events.jpg",
    ],
    story: [
      "A 1,200-guest family day is hospitality plus logistics at scale — and with children present, safety is non-negotiable.",
      "We created zoned experiences: kids-first safety and first-aid, curated games and rides, live stage moments for all ages, and branded keepsake stations. The result was a joyful, photogenic day that felt relaxed for guests and fully controlled behind the scenes.",
    ],
    videoId: "V3_-49XCx-E",
  },
  {
    slug: "national-sales-kickoff",
    number: "05",
    title: "National Sales Kickoff",
    eventType: "Sales Meets",
    tagline: "Targets set. Energy unlocked. Teams fired up.",
    client: "Confidential — Automotive Client",
    location: "Delhi NCR",
    year: "2025",
    highlights: [
      "300-strong national sales force",
      "Target-setting stage production",
      "Recognition & leaderboard moments",
      "Breakout training modules",
    ],
    image: "saleskickoff.png",
    heroImage: "/images/gallery/kickoffhero.png",
    gallery: [
      "/images/gallery/team-outdoor.jpeg",
      "/images/blog/05-social-media-strategies.jpeg",
      "/images/gallery/press-group.png",
    ],
    story: [
      "The National Sales Kickoff for 300 automotive sales professionals needed pace, clarity, and motivation — not just a stage and a speech.",
      "We built a target-setting narrative with dynamic stage visuals, live leaderboard reveals, and recognition moments that celebrated last year's heroes while setting this year's pace. Breakout training ensured the energy translated into capability.",
    ],
    videoId: "P6QrNKWBIxY",
  },
  {
    slug: "founders-gala-dinner",
    number: "06",
    title: "Founders' Gala Dinner",
    eventType: "Gala Dinners",
    tagline: "An elegant seated evening for partners and leadership.",
    client: "Confidential — Conglomerate",
    location: "Patna",
    year: "2024",
    highlights: [
      "Seated dinner for 250 guests",
      "Custom table & ambient design",
      "Live acoustic entertainment",
      "VIP protocol & seating management",
    ],
    image: "galadinner.png",
    heroImage: "/images/gallery/galahero.png",
    gallery: [
      "/images/eventoss-detail-coffee.jpg",
      "/images/gallery/launch-collage.webp",
      "/images/blog/13-christmas-merry-spirit.jpg",
    ],
    story: [
      "For 250 leadership and partner guests, the gala had to feel both refined and warm — a seated evening where every table, light, and note contributed to the atmosphere.",
      "Custom table styling, ambient production, and live acoustic sets framed a night built around conversation and connection, with VIP protocol managed so quietly it never interrupted the experience.",
    ],
    videoId: "2l5F7H-GWCY",
  },
];
