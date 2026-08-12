export type ClientCategory =
  | "Marketing & Advertising"
  | "Events & Entertainment"
  | "Media Production & Films"
  | "PR & Digital Marketing";

export type ClientEntry = {
  slug: string;
  client: string;
  description: string;
  category: ClientCategory;
  /** Real Eventoss client-logo asset, where one exists in the project's
   *  brand-logo set. Cards without a match fall back to a monogram. */
  logo?: string;
};

/**
 * Real named-client roster sourced from eventoss.in/work.php — the site's
 * own compact grid of completed engagements, kept as a card-only list
 * (no click-through), grouped under the same four category tabs the
 * live site uses.
 */
export const clientRoster: ClientEntry[] = [
  { slug: "elegano-launch", client: "Elegano", description: "Organized the launch of Elegano, International Watch Studio at Jagat Trade Centre along with media mobilization.", category: "Events & Entertainment" },
  { slug: "paras-hospital-diwali", client: "Paras Hospital", description: "Organized the Diwali celebration at Maurya & Vatika Premiere Hotel.", category: "Events & Entertainment" , logo: "/logos/paras-hospital.png" },
  { slug: "ola-delhi-mela", client: "OLA", description: "Managed the activity for OLA at Delhi NCR during OLA's launch of Auto Driver Partner Mela across India.", category: "Marketing & Advertising" },
  { slug: "dainik-bhaskar-utsav", client: "Dainik Bhaskar", description: "Patna Utsav — a week-long celebration of the publication's circulation success across Bihar, with Shah Rukh Khan, Gulzar, Pankaj Udhas, Dr. Kumar Vishwas & Fatima Sana Shaikh.", category: "Events & Entertainment" , logo: "/logos/dainik-bhaskar.png" },
  { slug: "iran-culture-house-olympiad", client: "IRAN Culture House", description: "Executed the Quranic Olympiad at Imamia Hall, New Delhi, with participants from across India and international dignitaries.", category: "Events & Entertainment" , logo: "/logos/imamia-hall.png" },
  { slug: "base-hospital-new-year", client: "Base Hospital", description: "Executed New Year celebrations at Base Hospital Delhi Cantt, based on a Wild West theme.", category: "Events & Entertainment" , logo: "/logos/base-hospital.png" },
  { slug: "royal-enfield-riders-hunt", client: "Royal Enfield", description: "Conceptualized and organized \"Rider's Hunt\", an exclusive event for the Royal Bihar Rider's Club.", category: "Events & Entertainment" , logo: "/logos/royal-enfield.png" },
  { slug: "ipsowa-classical-night", client: "IPSOWA", description: "Organized \"Classical Night with Shovana Narayan\" at Vidyawati Bhawan.", category: "Events & Entertainment" , logo: "/logos/ipsowa.png" },
  { slug: "pm-mall-ravish-kumar", client: "P & M Mall", description: "Organized a talk show with Ravish Kumar, senior executive editor of NDTV, at P & M Mall.", category: "Events & Entertainment" , logo: "/logos/pm-mall.png" },
  { slug: "bankipur-club-new-year", client: "Bankipur Club", description: "Organized the New Year celebration for Bankipore Club, the premier club of Bihar, for 2015.", category: "Events & Entertainment" , logo: "/logos/bankipur-club.png" },
  { slug: "indian-oil-femina-rally", client: "Indian Oil", description: "Executed the 12th edition of the Indian Oil Femina Car Rally, \"Save Oil, Save Nation\", from Boring Road.", category: "Events & Entertainment" , logo: "/logos/indian-oil.png" },
  { slug: "vivo-v15pro-launch", client: "VIVO", description: "Launched the Vivo V15 Pro through an event at Hotel Maurya, Patna.", category: "Events & Entertainment" , logo: "/logos/vivo.png" },
  { slug: "thums-up-charged-launch", client: "Thums Up", description: "Sparked a sensational launch ceremony of Thums Up Charged at Chanakya BNR Hotel, Ranchi.", category: "Events & Entertainment" , logo: "/logos/thums-up.png" },
  { slug: "alstom-madhepura-launch", client: "Alstom", description: "Executed the Locomotive factory launch at Madhepura in the presence of Piyush Goyal, Minister of Railways.", category: "Events & Entertainment" , logo: "/logos/alstom.png" },
  { slug: "forevermark-collection-launch", client: "Forevermark", description: "Launched its exclusive diamond jewellery collection at Alankar Jewellers, Patna, unveiled by Huma Qureshi.", category: "Events & Entertainment" , logo: "/logos/forevermark.png" },
  { slug: "dhadoom-launch", client: "Dhadoom", description: "Handled the launch of Dhadoom, a fun brand by Chef Harpal Singh Sokhi, at Delhi.", category: "Events & Entertainment" , logo: "/logos/dhadoom.png" },
  { slug: "mount-litera-jee-launch", client: "Mount Litera Jee", description: "Managed and executed the launch ceremony of Mount Litera Zee School.", category: "Events & Entertainment" , logo: "/logos/mount-litera-jee.png" },
  { slug: "vespa-auto-moda-opening", client: "Vespa", description: "Organized the grand opening of Auto Moda — Bihar's first Vespa outlet, at Kankarbagh, Patna.", category: "Events & Entertainment" , logo: "/logos/vespa.png" },
  { slug: "senco-diamond-launch", client: "Senco", description: "Planned and executed the launch of its Forever Diamond Collection at Ranchi.", category: "Events & Entertainment" },
  { slug: "my-gas-launch", client: "My Gas", description: "Organized the Bihar launch of a pilferage-proof, non-subsidized LPG brand from Worthwhile Gases Pvt. Ltd. at Hotel Maurya.", category: "Marketing & Advertising" , logo: "/logos/my-gas.png" },
  { slug: "airwil-branch-launch", client: "Airwil", description: "Managed the Patna branch launch of Airwil Infra Ltd at Hotel The Panache.", category: "Events & Entertainment" , logo: "/logos/airwil.png" },
  { slug: "coca-cola-family-day", client: "Coca-Cola", description: "Organized a Family Day event for Coca-Cola India employees and their families at Hotel Maurya, Patna.", category: "Events & Entertainment" , logo: "/logos/coca-cola.png" },
  { slug: "airtel-family-day", client: "Airtel", description: "Organized the Airtel Family Day event at Hotel Maurya, Patna.", category: "Events & Entertainment" , logo: "/logos/airtel.png" },
  { slug: "bharti-infratel-mela-theme", client: "Bharti Infratel Limited", description: "Executed the Family Day celebration of Bharti Infratel Limited on a Mela theme.", category: "Events & Entertainment" , logo: "/logos/bharti-infratel.png" },
  { slug: "ge-transportation-wild-west", client: "GE", description: "Executed the Family Day celebration for GE Transportation on a Wild West theme.", category: "Events & Entertainment" },
  { slug: "bharti-infratel-comms-forum", client: "Bharti Infratel Limited", description: "Organized the Employee Communication Forum for Bharti Infratel at Hotel Kav's, Ranchi.", category: "Events & Entertainment" , logo: "/logos/bharti-infratel.png" },
  { slug: "sds-ramcides-recognition", client: "SDS", description: "SDS Ramcides continued to put its trust in Eventoss for their Annual Reward and Recognition Ceremony.", category: "Events & Entertainment" },
  { slug: "ge-bond-recognition", client: "GE", description: "Organized Rewards & Recognition of General Electric in 007 Bond style at Lemon Tree, Patna.", category: "Events & Entertainment" },
  { slug: "aircel-milestone", client: "Aircel", description: "Executed the milestone achievement celebration at the Aircel office.", category: "Events & Entertainment" },
  { slug: "idea-army-theme-meet", client: "Idea", description: "Organized the All Team Meet based on an Army theme at Ranchi, Begusarai and Muzaffarpur.", category: "Events & Entertainment" },
  { slug: "airtel-bahubali-forum", client: "Airtel", description: "Organized the Employee Communication Forum based on a Bahubali theme at Hotel Maurya.", category: "Events & Entertainment" , logo: "/logos/airtel.png" },
  { slug: "airtel-village-theme-forum", client: "Airtel", description: "Organized the Employee Communication Forum based on a Village theme at Hotel Maurya.", category: "Events & Entertainment" , logo: "/logos/airtel.png" },
  { slug: "konark-cement-family-day", client: "Konark Cement", description: "Executed the family day at Mahabodhi, Bodhgaya.", category: "Events & Entertainment" },
  { slug: "bharti-infratel-bollywood-theme", client: "Bharti Infratel Limited", description: "Organized a two-day Family Day celebration on a Bollywood theme at Patna and Ranchi.", category: "Events & Entertainment" , logo: "/logos/bharti-infratel.png" },
  { slug: "john-deere-expo-display", client: "John Deere", description: "Designed and executed the product display at Nepal Agritech International Expo and Agro Bihar 2018.", category: "Marketing & Advertising" },
  { slug: "swacch-sarvekshan-2018", client: "Swacch Sarvekshan", description: "Executed the Swacch Sarvekshan 2018 civic awareness initiative across various locations in Delhi.", category: "Marketing & Advertising" },
  { slug: "aaa-vehicleades-promo", client: "AAA Vehicleades Pvt Ltd", description: "Promotional activity for the authorized Maruti Suzuki dealer at Delhi, including test drives and product demonstrations.", category: "Marketing & Advertising" },
  { slug: "ultratech-btl-jharkhand", client: "Ultratech Cement", description: "Executed BTL promotions for Ultratech Cement across Jharkhand.", category: "Marketing & Advertising" },
  { slug: "ola-driver-mela-delhi", client: "OLA", description: "Managed the Auto Driver Partner Mela for Ola at Delhi NCR.", category: "Marketing & Advertising" },
  { slug: "airtel-4g-experience-zone", client: "Airtel", description: "Managed the experience zone for Airtel to promote its 4G services.", category: "Marketing & Advertising" , logo: "/logos/airtel.png" },
  { slug: "lafarge-district-promotions", client: "Lafarge", description: "Ran promotions across six districts of Bihar — Purnia, Bhagalpur, Begusarai, Muzaffarpur, Gaya and Patna.", category: "Marketing & Advertising" , logo: "/logos/lafarge.png" },
  { slug: "shoppers-stop-bag-branding", client: "Shoppers Stop", description: "Created a unique shopping-bag-shaped branding option for its outlet at Nucleus Mall, Ranchi.", category: "Marketing & Advertising" , logo: "/logos/shoppers-stop.png" },
  { slug: "shoppers-stop-ranchi-btl", client: "Shoppers Stop", description: "Planned and executed BTL promotion at Ranchi to build hype for its new Nucleus Mall outlet.", category: "Marketing & Advertising" , logo: "/logos/shoppers-stop.png" },
  { slug: "vivo-v5-two-day-activity", client: "VIVO", description: "Conducted a two-day activity for the Vivo V5 with a ramp-walk product display, magic show, and games.", category: "Marketing & Advertising" , logo: "/logos/vivo.png" },
  { slug: "jis-group-erikshaw-branding", client: "JIS Group", description: "E-rickshaw branding and leaflet distribution.", category: "Marketing & Advertising" },
  { slug: "bmw-5-series-display", client: "BMW", description: "Managed the car display of the BMW 5 Series business sedan at Ranchi.", category: "Marketing & Advertising" , logo: "/logos/bmw.png" },
  { slug: "jio-nukkad-natak", client: "Jio", description: "Managed Nukkad Natak promotional street theatre for Reliance Jio across prime locations of Patna.", category: "Marketing & Advertising" },
  { slug: "yellow-tie-mall-activity", client: "Yellow Tie", description: "Mall activity with Broaster Chicken brand ambassador Chef Harpal at Amanora Mall, Pune.", category: "Marketing & Advertising" , logo: "/logos/yellow-tie.png" },
  { slug: "red-chief-engagement-activity", client: "Red Chief", description: "Managed a two-day customer engagement activity built around live anchoring.", category: "Marketing & Advertising" , logo: "/logos/red-chief.png" },
  { slug: "mount-litera-jee-promo", client: "Mount Litera Jee", description: "Promotional activity conducted for Mount Litera Zee High School.", category: "Marketing & Advertising" , logo: "/logos/mount-litera-jee.png" },
  { slug: "ultratech-csr-rickshaw", client: "Ultratech Cement", description: "Executed a CSR activity providing free rickshaw rides to thousands during the Pitrapaksha Mela.", category: "Marketing & Advertising" },
  { slug: "tvs-test-drive-mela", client: "TVS", description: "Organized a Mega Test Drive and Loan Mela at prime locations across Bihar.", category: "Marketing & Advertising" , logo: "/logos/tvs.png" },
  { slug: "blackberry-z3-btl", client: "BlackBerry", description: "Organized the BlackBerry Z3 launch across various Patna outlets through BTL activities.", category: "Marketing & Advertising" },
  { slug: "pm-mall-fbb-fashion-show", client: "P & M Mall", description: "Organized the FBB Fashion Show in association with The Times of India.", category: "Events & Entertainment" , logo: "/logos/pm-mall.png" },
  { slug: "forks-pins-new-year", client: "Forks & Pins", description: "Organized the New Year celebration at Central Mall.", category: "Events & Entertainment" },
  { slug: "forks-pins-christmas-carnival", client: "Forks & Pins", description: "Organized the Christmas Carnival at Central Mall.", category: "Events & Entertainment" },
  { slug: "pm-mall-4th-anniversary", client: "P & M Mall", description: "Organized the 4th anniversary celebration, with Chief General Manager Vijaynath Mishra as chief guest.", category: "Events & Entertainment" , logo: "/logos/pm-mall.png" },
  { slug: "vespa-social-media", client: "Vespa (Auto Moda Patna)", description: "Social media handling on Facebook and Instagram, including campaign management.", category: "PR & Digital Marketing" , logo: "/logos/vespa.png" },
  { slug: "nucleus-mall-social-media", client: "Nucleus Mall", description: "Complete social media marketing on Facebook & Instagram with online promotion for the mall's launch.", category: "PR & Digital Marketing" },
  { slug: "amity-social-media", client: "Amity University", description: "Complete social media handling via Facebook and Instagram, including campaigns for Patna and Ranchi.", category: "PR & Digital Marketing" , logo: "/logos/amity.png" },
  { slug: "elegano-social-media", client: "Elegano", description: "Annual social media management for the international watch studio.", category: "PR & Digital Marketing" },
  { slug: "shilpi-jewellers-social-media", client: "Shilpi Jewellers", description: "Social media handling via Facebook and Instagram, including campaign management.", category: "PR & Digital Marketing" , logo: "/logos/shilpi-jewellers.png" },
  { slug: "vespa-cinema-ad", client: "Vespa", description: "Cinema ad video production.", category: "Media Production & Films" , logo: "/logos/vespa.png" },
  { slug: "sewika-jewellers-ad", client: "Sewika Diamond Jewellers", description: "Ad video production.", category: "Media Production & Films" },
  { slug: "worthwhile-gases-ad", client: "Worthwhile Gases Pvt Ltd", description: "Ad video production.", category: "Media Production & Films" },
  { slug: "elegano-ad-video", client: "Elegano", description: "Ad video production.", category: "Media Production & Films" },
  { slug: "nucleus-mall-graphic-design", client: "Nucleus Mall", description: "Graphic design collateral.", category: "Media Production & Films" },
  { slug: "bgsys-3d-tableau", client: "BGSYS", description: "3D design of tableau.", category: "Media Production & Films" },
  { slug: "airtel-4g-launch-video", client: "Airtel", description: "4G launch video production.", category: "Media Production & Films" , logo: "/logos/airtel.png" },
  { slug: "anshul-homes-ad-video", client: "Anshul Homes", description: "Ad video production.", category: "Media Production & Films" },
];

/**
 * De-duplicated view of the roster above — one card per brand. Several
 * brands recur across multiple engagements (e.g. Airtel, Bharti Infratel,
 * VIVO); we keep the first (earliest-listed) engagement's description and
 * category, but adopt a logo from any of that brand's other engagements
 * if the first one didn't have one on file.
 */
export const brandRoster: ClientEntry[] = (() => {
  const byName = new Map<string, ClientEntry>();
  for (const entry of clientRoster) {
    const key = entry.client.trim().toLowerCase();
    const existing = byName.get(key);
    if (!existing) {
      byName.set(key, entry);
    } else if (!existing.logo && entry.logo) {
      byName.set(key, { ...existing, logo: entry.logo });
    }
  }
  return Array.from(byName.values());
})();
