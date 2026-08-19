export type Subservice = {
  slug: string;
  title: string;
  /** One-line, benefit-led description — what changes for the client. */
  blurb: string;
  image: string;
};

export type Pillar = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  subservices: Subservice[];
  /** Full granular list of specific offerings under this vertical — shown
   *  as a detailed checklist alongside the curated photo gallery above. */
  fullOfferings: string[];
  image: string;
  heroImage: string;
  /** Distinct third photo for the detail-page bottom gallery, so it
   *  never repeats heroImage on the same page. */
  secondaryImage: string;
};

export const pillars: Pillar[] = [
  {
    slug: "corporate-events",
    number: "01",
    title: "Corporate Events",
    tagline: "Strategic events designed to engage teams, partners, clients and stakeholders.",
    description: "From annual meets to leadership offsites, we plan and deliver corporate events end to end — venues, production, hospitality, and run-of-show — so every gathering lands with precision.",
    subservices: [
      {
        slug: "leadership-summits",
        title: "Leadership Summits & Business Forums",
        blurb: "Boardroom-level gatherings staged with the gravity they deserve.",
        image: "/img/slug/corporate-event-slug1.png",
      },
      {
        slug: "partner-dealer-meets",
        title: "Business Partner & Dealer Meets",
        blurb: "Full-scale production that turns a partner meet into a headline moment.",
        image: "/images/eventoss-hero-topgear.jpg",
      },
      {
        slug: "annual-meets-town-halls",
        title: "Annual Meets & Town Halls",
        blurb: "Company-wide moments that land the message and keep people engaged.",
        image: "/img/slug/corporate-event-slug2.png",
      },
      {
        slug: "gala-dinners-awards",
        title: "Gala Dinners & Award Nights",
        blurb: "An evening of recognition, choreographed down to the last toast.",
        image: "/img/slug/corporate-event-slug3.png",
      },
    ],
    fullOfferings: [
      "Conferences & Conventions", "Annual Meets", "Dealer & Distributor Meets", "Sales Meets",
      "Business Summits", "Leadership Meets", "Town Halls", "Corporate Celebrations",
      "Award Ceremonies", "Gala Dinners", "Product & Brand Launches", "Corporate Offsites",
      "Employee Engagement Events", "Family Days", "Dealer Meets & Partner Events",
    ],
    image: "/img/topgear.jpg",
    heroImage: "/img/corporate-event.png",
    secondaryImage: "/img/OIP.png",
  },
  {
    slug: "brand-activation-experiential-marketing",
    number: "02",
    title: "Brand Activation & Experiential Marketing",
    tagline: "Turning brand communication into real-world experiences.",
    description: "We design activations that put your brand directly in front of consumers — on the street, in malls, on campuses, and in rural markets — turning campaigns into lived experiences.",
    subservices: [
      {
        slug: "product-brand-launches",
        title: "Product & Brand Launches",
        blurb: "The first impression a product gets — built to be talked about.",
        image: "/img/slug/launch-slug2.png",
      },
      {
        slug: "retail-mall-activations",
        title: "Retail & Mall Activations",
        blurb: "Putting the brand where footfall already is, not waiting for it to arrive.",
        image: "/img/slug/launch-slug3.png",
      },
      {
        slug: "campus-rural-drives",
        title: "Campus & Rural Activation Drives",
        blurb: "Reaching audiences malls and metros don't — on their own turf.",
        image: "/img/slug/launch-slug1.png",
      },
      {
        slug: "consumer-engagement",
        title: "Consumer Engagement Campaigns",
        blurb: "Interactive moments that turn a passerby into a participant.",
        image: "/img/party.jpg",
      },
    ],
    fullOfferings: [
      "Brand Activations", "BTL Campaigns", "Consumer Activations", "Product Sampling",
      "Experiential Campaigns", "Retail Activations", "Mall Activations", "Roadshows",
      "Mobile Activations", "Rural Activations", "Campus Activations", "Trade Promotions",
      "Consumer Engagement Programs", "Brand Experience Zones", "Interactive Installations",
    ],
    image: "/images/gallery/cokeevent.png",
    heroImage: "/img/launchhero.png",
    secondaryImage: "/img/slug/launch-slug1.png",
  },
  {
    slug: "conferences-conventions",
    number: "03",
    title: "Conferences & Conventions",
    tagline: "Precision-run conferences, conventions and seminars for business audiences.",
    description: "We plan and deliver conferences, conventions, and seminars end to end — venue sourcing, production, delegate hospitality, and run-of-show — for audiences ranging from leadership circles to nationwide dealer networks.",
    subservices: [
      {
        slug: "delegate-hospitality",
        title: "Delegate & Hospitality Management",
        blurb: "Every guest looked after, from airport pickup to the last handshake.",
        image: "/img/slug/conference-slug1.png",
      },
      {
        slug: "international-partner-conferences",
        title: "International & Partner Conferences",
        blurb: "Multi-city delegate networks run without a single dropped detail.",
        image: "/img/slug/conference-slug2.png",
      },
      {
        slug: "on-ground-production-crew",
        title: "On-Ground Production Crew",
        blurb: "A crew that's on-site before the client, gone after the last guest leaves.",
        image: "/images/gallery/press-group.png",
      },
      {
        slug: "conference-production-av",
        title: "Conference Production & AV",
        blurb: "Sound, staging, and screens that disappear behind a flawless session.",
        image: "/img/slug/conference-slug3.png",
      },
    ],
    fullOfferings: [
      "Conferences", "Conventions", "Seminars", "Business Summits",
      "Dealer / Partner Conferences", "International Conferences", "Delegate Management",
      "Hospitality & Guest Management", "Conference Production & AV",
    ],
    image: "/img/event.jpeg",
    heroImage: "/img/conference-hero.png",
    secondaryImage: "/img/slug/conference-slug2.png",
  },
  {
    slug: "mice",
    number: "04",
    title: "MICE",
    tagline: "Meetings, Incentives, Conferences & Exhibitions — business travel planned end to end.",
    description: "Our MICE desk manages the full arc of business travel and delegate experience — incentive programmes, international conferences, destination events, and reward trips — with logistics, hospitality, and on-ground execution handled end to end, in India and abroad.",
    subservices: [
      {
        slug: "incentive-reward-travel",
        title: "Incentive & Reward Travel",
        blurb: "Top-performer trips designed to feel earned, not generic.",
        image: "/images/gallery/event-collage.webp",
      },
      {
        slug: "international-delegate-travel",
        title: "International Delegate Travel",
        blurb: "Visas, logistics, and itineraries handled so delegates just show up.",
        image: "/images/blog/12-away-from-chaos.jpg",
      },
      {
        slug: "business-partner-meets-mice",
        title: "Business Partner Meets",
        blurb: "Travel and production combined into one seamless partner experience.",
        image: "/images/eventoss-hero-topgear.jpg",
      },
      {
        slug: "corporate-retreats-offsites",
        title: "Corporate Retreats & Offsites",
        blurb: "A change of scene that still runs on Eventoss precision.",
        image: "/images/gallery/event-crowd.png",
      },
    ],
    fullOfferings: [
      "MICE Programs", "Incentive Travel", "Corporate Travel", "Destination Events",
      "International Delegate Travel", "Reward & Recognition Trips",
      "Meeting & Convention Planning", "Trade Show & Exhibition Travel",
      "Corporate Retreats & Offsites", "Hospitality & Guest Management",
    ],
    image: "Corporate-event1.jpg",
    heroImage: "/images/blog/12-away-from-chaos.jpg",
    secondaryImage: "/images/gallery/event-crowd.png",
  },
  {
    slug: "exhibitions-trade-shows",
    number: "05",
    title: "Exhibitions & Trade Shows",
    tagline: "Creating spaces where brands meet their audiences.",
    description: "We design and build exhibition spaces, pavilions, and custom booths that turn trade shows and expos into high-conversion brand moments.",
    subservices: [
      {
        slug: "custom-booths-pavilions",
        title: "Custom Booths & Pavilion Design",
        blurb: "Stall design built to stop foot traffic, not just fill a floor plan.",
        image: "/img/slug/exhibition-slug1.jpg",
      },
      {
        slug: "branded-entrances-wayfinding",
        title: "Branded Entrances & Wayfinding",
        blurb: "The brand starts at the door — signage and staging that set the tone.",
        image: "/img/location2.jpg",
      },
      {
        slug: "visitor-engagement-zones",
        title: "Visitor Engagement Zones",
        blurb: "Demo spaces designed to hold attention past the first thirty seconds.",
        image: "/img/slug/exhibition-slug2.png",
      },
      {
        slug: "on-ground-exhibition-management",
        title: "On-Ground Exhibition Management",
        blurb: "Move-in to tear-down handled so the stall team can focus on visitors.",
        image: "/img/slug/exhibition-slug3.png",
      },
    ],
    fullOfferings: [
      "Exhibition Planning", "Exhibition Stall Design", "Custom Booths", "Pavilion Design",
      "Trade Shows", "Expo Management", "Product Demonstration Zones", "Experience Centres",
      "Visitor Engagement", "Exhibition Production", "On-ground Management",
    ],
    image: "/img/Corporate-event3.jpg",
    heroImage: "/img/exhibitionhero.png",
    secondaryImage: "/img/slug/exhibition-slug2.png",
  },
  {
    slug: "live-entertainment",
    number: "06",
    title: "Live Entertainment & Events",
    tagline: "Producing high-energy experiences for audiences of every scale.",
    description: "From ticketed concerts to celebrity-led award shows, we produce live entertainment with full artist management, staging, and audience experience design.",
    subservices: [
      {
        slug: "concerts-music-festivals",
        title: "Concerts & Music Festivals",
        blurb: "Ticketed shows produced end to end — artist, stage, sound, crowd flow.",
        image: "/images/eventoss-party-crowd.jpg",
      },
      {
        slug: "award-shows-anchoring",
        title: "Award Shows & Anchoring",
        blurb: "Hosts, run-of-show, and pacing that keep an award night moving.",
        image: "/img/husk.jpeg",
      },
      {
        slug: "celebrity-led-events",
        title: "Celebrity-Led Events",
        blurb: "Artist management and security handled so the moment stays on script.",
        image: "/images/gallery/celebrity-event.png",
      },
      {
        slug: "cultural-festivals-dj-nights",
        title: "Cultural Festivals & DJ Nights",
        blurb: "High-energy nights built on crowd management as much as production.",
        image: "/images/blog/09-11-years-anniversary.jpeg",
      },
    ],
    fullOfferings: [
      "Concerts", "Live Shows", "Music Festivals", "Cultural Festivals", "Comedy Shows",
      "DJ Nights", "Celebrity Events", "Artist Management", "Fashion Shows", "Award Shows",
      "Entertainment IPs", "Public Events", "Ticketed Events",
    ],
    image: "Corporate-event2.jpg",
    heroImage: "/images/eventoss-hero-stage.jpg",
    secondaryImage: "/images/gallery/celebrity-event.png",
  },
  {
    slug: "government-public-events",
    number: "07",
    title: "Government & Public Events",
    tagline: "Large-scale public experiences with strategic planning and flawless execution.",
    description: "We plan and execute government and public-sector events with the protocol, scale, and citizen engagement these programmes demand.",
    subservices: [
      {
        slug: "citizen-engagement-recognition",
        title: "Citizen Engagement & Public Recognition",
        blurb: "Public honours staged with the dignity the occasion calls for.",
        image: "/images/eventoss-bihargaurav.jpg",
      },
      {
        slug: "inaugurations-foundation-ceremonies",
        title: "Inaugurations & Foundation Ceremonies",
        blurb: "Protocol-correct ceremonies for the moments that open something new.",
        image: "/images/gallery/office-exterior.webp",
      },
      {
        slug: "state-national-events",
        title: "State & National Level Events",
        blurb: "Scale and security handled for programmes with a wide public footprint.",
        image: "/images/eventoss-detail-coffee.jpg",
      },
      {
        slug: "protocol-vip-management",
        title: "Protocol & VIP Management",
        blurb: "Dignitary movement and seating planned with zero room for error.",
        image: "/images/gallery/event-setup.webp",
      },
    ],
    fullOfferings: [
      "Government Events", "Public Awareness Campaigns", "Government Conferences",
      "Inaugurations", "Foundation Stone Ceremonies", "Public Gatherings", "Cultural Programs",
      "Festivals & Fairs", "Citizen Engagement Programs", "Roadshows",
      "State & National Level Events", "Protocol & VIP Management",
    ],
    image: "/img/pankaj2.jpg",
    heroImage: "/images/gallery/office-exterior.webp",
    secondaryImage: "/images/gallery/event-setup.webp",
  },
  {
    slug: "sports-fan-experiences",
    number: "08",
    title: "Sports & Fan Experiences",
    tagline: "Creating experiences around sport, communities and audiences.",
    description: "We build sporting events and fan experiences — from corporate tournaments to opening ceremonies — backed by sponsorship integration and hospitality.",
    subservices: [
      {
        slug: "corporate-sports-tournaments",
        title: "Corporate Sports Tournaments",
        blurb: "Company tournaments run with real sporting structure, not a picnic feel.",
        image: "/images/gallery/gala.png",
      },
      {
        slug: "fan-zones-engagement",
        title: "Fan Zones & Engagement",
        blurb: "Spaces built to hold a crowd's energy before and after the main event.",
        image: "/images/eventoss-team-crowd.jpg",
      },
      {
        slug: "opening-closing-ceremonies",
        title: "Opening & Closing Ceremonies",
        blurb: "The bookend moments that set the tone and send audiences off well.",
        image: "/images/gallery/gala-portrait.webp",
      },
      {
        slug: "sports-hospitality-sponsorship",
        title: "Sports Hospitality & Sponsorship",
        blurb: "Sponsor integration and guest hospitality woven into the format.",
        image: "/images/blog/18-wedding-vogues.jpg",
      },
    ],
    fullOfferings: [
      "Sports Events", "Corporate Sports Events", "Tournaments", "Fan Zones",
      "Fan Engagement", "Sports Activations", "Award Ceremonies", "Opening & Closing Ceremonies",
      "Brand Partnerships", "Sports Hospitality",
    ],
    image: "/images/gallery/gala.png",
    heroImage: "/images/eventoss-team-crowd.jpg",
    secondaryImage: "/images/blog/18-wedding-vogues.jpg",
  },
];

// Backwards-compatible alias — some components/pages still import `services`.
export const services = pillars;
