export type Pillar = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  subservices: string[];
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
      "Conferences & Conventions", "Annual Meets", "Dealer & Distributor Meets", "Sales Meets",
      "Business Summits", "Leadership Meets", "Town Halls", "Corporate Celebrations",
      "Award Ceremonies", "Gala Dinners", "Product & Brand Launches", "Corporate Offsites",
      "Employee Engagement Events", "Family Days", "Dealer Meets & Partner Events",
    ],
    image: "/images/eventoss-about.jpeg",
    heroImage: "/images/eventoss-hero-stage.jpg",
    secondaryImage: "/images/gallery/event-stage-trio.webp",
  },
  {
    slug: "brand-activation-experiential-marketing",
    number: "02",
    title: "Brand Activation & Experiential Marketing",
    tagline: "Turning brand communication into real-world experiences.",
    description: "We design activations that put your brand directly in front of consumers — on the street, in malls, on campuses, and in rural markets — turning campaigns into lived experiences.",
    subservices: [
      "Brand Activations", "BTL Campaigns", "Consumer Activations", "Product Sampling",
      "Experiential Campaigns", "Retail Activations", "Mall Activations", "Roadshows",
      "Mobile Activations", "Rural Activations", "Campus Activations", "Trade Promotions",
      "Consumer Engagement Programs", "Brand Experience Zones", "Interactive Installations",
    ],
    image: "/images/blog/17-plan-your-event.jpg",
    heroImage: "/images/blog/05-social-media-strategies.jpeg",
    secondaryImage: "/images/gallery/promo-activity.webp",
  },
  {
    slug: "conferences-conventions",
    number: "03",
    title: "Conferences & Conventions",
    tagline: "Precision-run conferences, conventions and seminars for business audiences.",
    description: "We plan and deliver conferences, conventions, and seminars end to end — venue sourcing, production, delegate hospitality, and run-of-show — for audiences ranging from leadership circles to nationwide dealer networks.",
    subservices: [
      "Conferences", "Conventions", "Seminars", "Business Summits",
      "Dealer / Partner Conferences", "International Conferences", "Delegate Management",
      "Hospitality & Guest Management", "Conference Production & AV",
    ],
    image: "/images/eventoss-team-crowd.jpg",
    heroImage: "/images/gallery/team-outdoor.jpeg",
    secondaryImage: "/images/blog/02-seo-sem.jpeg",
  },
  {
    slug: "mice",
    number: "04",
    title: "MICE",
    tagline: "Meetings, Incentives, Conferences & Exhibitions — business travel planned end to end.",
    description: "Our MICE desk manages the full arc of business travel and delegate experience — incentive programmes, international conferences, destination events, and reward trips — with logistics, hospitality, and on-ground execution handled end to end, in India and abroad.",
    subservices: [
      "MICE Programs", "Incentive Travel", "Corporate Travel", "Destination Events",
      "International Delegate Travel", "Reward & Recognition Trips",
      "Meeting & Convention Planning", "Trade Show & Exhibition Travel",
      "Corporate Retreats & Offsites", "Hospitality & Guest Management",
    ],
    image: "/images/gallery/event-collage.webp",
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
      "Exhibition Planning", "Exhibition Stall Design", "Custom Booths", "Pavilion Design",
      "Trade Shows", "Expo Management", "Product Demonstration Zones", "Experience Centres",
      "Visitor Engagement", "Exhibition Production", "On-ground Management",
    ],
    image: "/images/gallery/womens-day-stage.png",
    heroImage: "/images/gallery/womens-day-detail.png",
    secondaryImage: "/images/gallery/stage-collage.webp",
  },
  {
    slug: "live-entertainment",
    number: "06",
    title: "Live Entertainment & Events",
    tagline: "Producing high-energy experiences for audiences of every scale.",
    description: "From ticketed concerts to celebrity-led award shows, we produce live entertainment with full artist management, staging, and audience experience design.",
    subservices: [
      "Concerts", "Live Shows", "Music Festivals", "Cultural Festivals", "Comedy Shows",
      "DJ Nights", "Celebrity Events", "Artist Management", "Fashion Shows", "Award Shows",
      "Entertainment IPs", "Public Events", "Ticketed Events",
    ],
    image: "/images/blog/09-11-years-anniversary.jpeg",
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
      "Government Events", "Public Awareness Campaigns", "Government Conferences",
      "Inaugurations", "Foundation Stone Ceremonies", "Public Gatherings", "Cultural Programs",
      "Festivals & Fairs", "Citizen Engagement Programs", "Roadshows",
      "State & National Level Events", "Protocol & VIP Management",
    ],
    image: "/images/eventoss-detail-coffee.jpg",
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
      "Sports Events", "Corporate Sports Events", "Tournaments", "Fan Zones",
      "Fan Engagement", "Sports Activations", "Award Ceremonies", "Opening & Closing Ceremonies",
      "Brand Partnerships", "Sports Hospitality",
    ],
    image: "/images/gallery/gala-portrait.webp",
    heroImage: "/images/eventoss-team-crowd.jpg",
    secondaryImage: "/images/blog/18-wedding-vogues.jpg",
  },
];

// Backwards-compatible alias — some components/pages still import `services`.
export const services = pillars;
