export type PressMention = {
  slug: string;
  publication: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
};

// Real Eventoss Entertainment press coverage — sourced from the company's
// own "Eventoss In News" / Press Mentions page (eventoss.in/press-mention.php).
// Titles, excerpts, dates and outbound links are kept as published.
export const pressMentions: PressMention[] = [
  {
    slug: "53-cafe-house-edtimes",
    publication: "EdTimes",
    title: "53 Cafe House: Reviving the culture of art every New Year",
    excerpt:
      "53 Winter Fest was initiated on the 25th of December with the Christmas Gala, wherein a special lunch was organized for the poor children, and live music was launched for the 53 celebrities.",
    date: "04 Jan 2023",
    url: "https://edtimes.in/53-cafe-house-reviving-the-culture-of-art-every-new-year/",
  },
  {
    slug: "physical-events-digital-era",
    publication: "Business World",
    title: "Stature Of Physical Events In The Digital Era",
    excerpt:
      "Even though virtual events created a buzz during the lockdown, the importance of physical events could not be overruled amongst the industry players.",
    date: "05 Feb 2021",
    url: "http://everythingexperiential.businessworld.in/article/Stature-Of-Physical-Events-In-The-Digital-Era/05-02-2021-374159/",
  },
  {
    slug: "2020-forthcoming-work-culture",
    publication: "People Matters",
    title: "2020 at the heart of forthcoming work culture",
    excerpt:
      "As estimated by Becker Friedman Institute, post-pandemic 22 percent of the total work days will account for work from home. Though companies have shown great agility in adopting the remote working culture, its side effects were very soon realized by employees.",
    date: "02 Jan 2021",
    url: "https://www.peoplemattersglobal.com/blog/life-at-work/2020-at-the-heart-of-forthcoming-work-culture-28013",
  },
  {
    slug: "eventoss-acquires-spot-wedding-event",
    publication: "Business News",
    title: "Eventoss acquires a spot for the wedding and event",
    excerpt:
      "Eventoss, a 360-degree Entertainment & Marketing Communication company based in Patna with its expansion in the metro cities, acquired a spot with the name 53 Open Court.",
    date: "19 Dec 2020",
    url: "http://businessnewsthisweek.com/business/eventoss-acquires-a-spot-for-the-wedding-and-event/",
  },
  {
    slug: "53-cafe-house-freepressjournal",
    publication: "Free Press Journal",
    title: "53 Cafe House: Reviving the culture of art every New Year",
    excerpt:
      "53 Winter Fest was initiated on the 25th of December with the Christmas Gala, wherein a special lunch was organized for the poor children, and live music was launched for the 53 celebrities.",
    date: "04 Jan 2023",
    url: "https://www.freepressjournal.in/brand-focus/53-cafe-house-reviving-the-culture-of-art-every-new-year",
  },
  {
    slug: "digital-event-new-dynamics-marketing-mix",
    publication: "Business World",
    title: "Digital event adding new dynamics for enhanced marketing mix: Syed Aabish Hassan",
    excerpt:
      "The digital transformation is instrumental in providing the immersive experience as they not just enhance and support the traditional execution but add to creativity and innovation, writes Syed Aabish Hassan, CEO, Eventoss.",
    date: "19 Oct 2020",
    url: "http://everythingexperiential.businessworld.in/article/Digital-event-adding-new-dynamics-for-enhanced-marketing-mix-Syed-Aabish-Hassan/19-10-2020-333075/",
  },
  {
    slug: "eventoss-creating-a-difference",
    publication: "Business Connect India",
    title: "Eventoss Entertainment: Creating a difference in the Event & Entertainment Industry with its Incredible Services",
    excerpt:
      "Hype of Marketing Entertainment Communication industry is picking up the pace in the market for creating promotional strategies of products, services, and events. Henceforth, a multitude of companies in the same arena is leaving a profound impact on the minds of customers.",
    date: "24 May 2019",
    url: "https://businessconnectindia.in/the-10-most-trusted-event-management-companies-in-india/eventoss-entertainment/",
  },
  {
    slug: "eventoss-endless-possibilities",
    publication: "Insight Success",
    title: "Eventoss Entertainment: A Name Synonymous to Endless Possibilities",
    excerpt:
      "Eventoss Entertainment Pvt. Ltd. is one such specialized creative Marketing Entertainment Communication (MEC) agency consistently striving to deliver top-notch solutions for managing brand reputation in the market.",
    date: "30 Nov 2020",
    url: "https://www.insightssuccess.in/eventoss-entertainment-name-synonymous-endless-possibilities/",
  },
  {
    slug: "notione-virtual-command-newsus",
    publication: "NewsUs.app",
    title: "Notione assigns virtual command to Eventoss Entertainment",
    excerpt:
      "Eventoss, a 360-degree entertainment and marketing agency, has taken over the entire structure of the Notione logo. Based on cutting-edge market strategies, Eventoss will provide built-in communications facilities that provide logo visibility as market dynamics evolve.",
    date: "30 Oct 2020",
    url: "https://newsus.app/notione-assigns-virtual-command-to-eventoss-entertainment/",
  },
  {
    slug: "exhibition-event-management-magz-dec19",
    publication: "Insight Success",
    title: "Exhibition Event Management Magz Dec19 List",
    excerpt: "The Events Studio: Experience the Art of Event Management.",
    date: "30 Nov 2020",
    url: "https://www.insightssuccess.in/category/exhibition-event-management-magazine-dec2019/exhibition-event-management-magz-dec19-list/",
  },
  {
    slug: "notione-allies-eventoss-brand-building",
    publication: "Indian Television",
    title: "Notione allies with Eventoss for integrated brand building",
    excerpt:
      "Eventoss Entertainment has won the digital media mandate for Notione, an Indian agro-based food and beverages brand.",
    date: "30 Oct 2020",
    url: "https://www.indiantelevision.com/mam/media-and-advertising/account/notione-allies-with-eventoss-for-integrated-brand-building-201030",
  },
  {
    slug: "notione-virtual-mandate-receivenews",
    publication: "Receive News",
    title: "Notione assigns a virtual mandate to Eventoss Entertainment",
    excerpt:
      "Eventoss, a 360-degree marketing and entertainment agency, has taken over the entire structure of the Notione logo. Based on cutting-edge market strategies, Eventoss will provide built-in communications facilities that visibility the logo as market dynamics evolve.",
    date: "30 Oct 2020",
    url: "https://receive.news/10/30/2020/notione-assigns-a-virtual-mandate-to-eventoss-entertainment/",
  },
  {
    slug: "mediasamosa-agency-feature",
    publication: "Media Samosa",
    title: "#MediaSamosa",
    excerpt:
      "We are thankful to #MediaSamosa for this opportunity of letting us stand along with other agencies in the market. Do read what @MediaSamosa has to tell about us.",
    date: "08 Jul 2020",
    url: "https://mediasamosa.com/2020/10/19/agency-feature-eventoss/",
  },
  {
    slug: "notione-digital-mandate-exchange4media",
    publication: "Exchange4Media",
    title: "Notione awards digital mandate to Eventoss Entertainment",
    excerpt:
      "Notione, an agro-based food and beverages brand, entrusts Eventoss Entertainment Pvt Ltd with its end-to-end digital mandate entailing website, digital and social media operations.",
    date: "08 Jul 2020",
    url: "https://www.exchange4media.com/digital-news/notione-awards-digital-mandate-to-eventoss-entertainment-108739.html",
  },
];
