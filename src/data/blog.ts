export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  /** Original article lives on the Eventoss WordPress blog — we link out
   *  rather than mirror the full copy. */
  url: string;
};

/**
 * Real posts pulled from eventoss.in/blog — title, category, date, cover
 * image and a short excerpt, each linking back to the original article.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "authentic-humanized-contents-the-key-to-successful-brand-building",
    title: "Authentic & Humanized Contents: The Key to Successful Brand Building",
    category: "Public Relations",
    date: "Jan 13, 2023",
    excerpt: "Why authentic, humanized content — not polished ad copy — is what actually builds trust and differentiates a brand in a crowded market.",
    image: "/images/blog/01-authentic-humanized-content.jpeg",
    url: "https://eventoss.in/blog/authentic-humanized-contents-the-key-to-successful-brand-building/",
  },
  {
    slug: "seo-sem-optimizing-your-online-presence",
    title: "SEO & SEM: Optimizing Your Online Presence",
    category: "Digital Marketing",
    date: "Apr 9, 2022",
    excerpt: "Breaking down the difference between SEO and SEM, and how each plays a distinct role in growing a brand's online visibility.",
    image: "/images/blog/02-seo-sem.jpeg",
    url: "https://eventoss.in/blog/seo-sem-optimizing-your-online-presence/",
  },
  {
    slug: "eventoss-observes-international-womens-day-2022",
    title: "Eventoss Observes International Women's Day 2022",
    category: "Public Relations",
    date: "Mar 21, 2022",
    excerpt: "The Patna team marked Women's Day at 53 Café House, celebrating the achievements of the women driving the organization forward.",
    image: "/images/blog/03-womens-day-2022.png",
    url: "https://eventoss.in/blog/eventoss-observes-international-womens-day-2022/",
  },
  {
    slug: "world-of-events-in-post-covid-times",
    title: "World of Events in Post-COVID Times",
    category: "Events",
    date: "Nov 24, 2021",
    excerpt: "A look at how the live-events trade weathered a near-total shutdown and what recovery looked like for designers, technicians and producers.",
    image: "/images/blog/04-post-covid-events.jpg",
    url: "https://eventoss.in/blog/world-of-events-in-post-covid-times/",
  },
  {
    slug: "social-media-strategies-for-your-marketing-strategy",
    title: "Social Media Strategies for Your Marketing Strategy",
    category: "Public Relations",
    date: "Oct 28, 2021",
    excerpt: "Why social platforms became the primary channel for brand building, and how a strong strategy converts attention into buyers.",
    image: "/images/blog/05-social-media-strategies.jpeg",
    url: "https://eventoss.in/blog/social-media-strategies-for-your-marketing-strategy/",
  },
  {
    slug: "crisis-communication-do-we-really-need-it",
    title: "Crisis Communication: Do We Really Need It?",
    category: "Public Relations",
    date: "Sep 4, 2021",
    excerpt: "On the role of communication in effective PR, and why organizations need a clear crisis-response voice before they ever need one.",
    image: "/images/blog/06-crisis-communication.png",
    url: "https://eventoss.in/blog/crisis-communication-do-we-really-need-it/",
  },
  {
    slug: "social-media-for-small-businesses-a-take-by-eventoss",
    title: "Social Media for Small Businesses: A Take by Eventoss",
    category: "Events",
    date: "Aug 12, 2021",
    excerpt: "How a focused social media strategy helps small businesses compete for attention against much larger, better-funded brands.",
    image: "/images/blog/07-social-media-small-business.jpeg",
    url: "https://eventoss.in/blog/social-media-for-small-businesses-a-take-by-eventoss/",
  },
  {
    slug: "how-marketing-levarage-your-brand-value",
    title: "How Marketing Leverages Your Brand Value",
    category: "Events",
    date: "Jul 16, 2021",
    excerpt: "Understanding marketing leverage — using low-cost, high-impact methods across ATL, BTL and TTL to grow brand value efficiently.",
    image: "/images/blog/08-marketing-leverage.jpeg",
    url: "https://eventoss.in/blog/how-marketing-levarage-your-brand-value/",
  },
  {
    slug: "eventoss-convokes-11-years-of-success-an-agency-with-endless-possibilities",
    title: "Eventoss Convokes 11 Years of Success — An Agency With Endless Possibilities",
    category: "Events",
    date: "Jul 13, 2021",
    excerpt: "Marking Eventoss's 11th Foundation Day with the team and associates, and a look back at over a decade of growth.",
    image: "/images/blog/09-11-years-anniversary.jpeg",
    url: "https://eventoss.in/blog/eventoss-convokes-11-years-of-success-an-agency-with-endless-possibilities/",
  },
  {
    slug: "pr-is-just-like-advertising-is-it-really",
    title: "PR Is Just Like Advertising. Is It Really?",
    category: "Public Relations",
    date: "Jun 17, 2021",
    excerpt: "Untangling a common misconception — PR and advertising both live under marketing, but they work in fundamentally different ways.",
    image: "/images/blog/10-pr-vs-advertising.png",
    url: "https://eventoss.in/blog/pr-is-just-like-advertising-is-it-really/",
  },
  {
    slug: "ifs-buts-of-the-virtual-world",
    title: "Ifs & Buts of the Virtual World",
    category: "Public Relations",
    date: "Jun 14, 2021",
    excerpt: "How video calls became a core part of the events industry overnight, and what that shift meant for a business built on physical gatherings.",
    image: "/images/blog/11-virtual-world.jpeg",
    url: "https://eventoss.in/blog/ifs-buts-of-the-virtual-world/",
  },
  {
    slug: "away-from-the-chaos",
    title: "Away From the Chaos",
    category: "Events",
    date: "Jan 29, 2021",
    excerpt: "Featured in The Statesman — on the limits of remote work culture and its impact on employee enthusiasm.",
    image: "/images/blog/12-away-from-chaos.jpg",
    url: "https://eventoss.in/blog/away-from-the-chaos/",
  },
  {
    slug: "eventoss-brings-in-merry-spirit-to-its-team",
    title: "Eventoss Brings in Merry Spirit to Its Team",
    category: "Events",
    date: "Dec 26, 2020",
    excerpt: "Team Eventoss celebrated Christmas evening at its newly launched venue, 53 Open Court, with the whole EEPL family.",
    image: "/images/blog/13-christmas-merry-spirit.jpg",
    url: "https://eventoss.in/blog/eventoss-brings-in-merry-spirit-to-its-team/",
  },
  {
    slug: "eventoss-acquires-a-spot-for-the-wedding-and-event",
    title: "Eventoss Acquires a Spot for the Wedding and Event",
    category: "Events",
    date: "Dec 21, 2020",
    excerpt: "Eventoss expanded into a new prime-location property, 53 Open Court, unveiled to a close circle of team and friends.",
    image: "/images/blog/14-53-open-court.jpg",
    url: "https://eventoss.in/blog/eventoss-acquires-a-spot-for-the-wedding-and-event/",
  },
  {
    slug: "common-myths-associated-with-public-relations-professional",
    title: "Common Myths Associated With Public Relations Professionals",
    category: "Public Relations",
    date: "Dec 10, 2020",
    excerpt: "PR is still a nascent discipline in India — this piece clears up some of the most persistent misconceptions about the profession.",
    image: "/images/blog/15-pr-myths.jpg",
    url: "https://eventoss.in/blog/common-myths-associated-with-public-relations-professional/",
  },
  {
    slug: "corporate-events-gateway-to-promotions",
    title: "Corporate Events: Gateway to Promotions",
    category: "Events",
    date: "Nov 19, 2020",
    excerpt: "Seminars, conferences and team-building days aren't just logistics — they're one of the most direct ways to build a brand and its relationships.",
    image: "/images/blog/16-corporate-events-promotions.png",
    url: "https://eventoss.in/blog/corporate-events-gateway-to-promotions/",
  },
  {
    slug: "plan-your-event-with-eventoss",
    title: "Plan Your Event With Eventoss",
    category: "Events",
    date: "Nov 19, 2020",
    excerpt: "A look back at 1,600+ completed projects and what has made Eventoss one of the leading event management names in Bihar & Jharkhand.",
    image: "/images/blog/17-plan-your-event.jpg",
    url: "https://eventoss.in/blog/plan-your-event-with-eventoss/",
  },
  {
    slug: "latest-wedding-vogues",
    title: "Latest Wedding Vogues",
    category: "Events",
    date: "Nov 19, 2020",
    excerpt: "Indian weddings run for a week or more — a look at the trends shaping how families are celebrating today.",
    image: "/images/blog/18-wedding-vogues.jpg",
    url: "https://eventoss.in/blog/latest-wedding-vogues/",
  },
];
