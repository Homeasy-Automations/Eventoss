export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    slug: "syed-aabish-hassan",
    name: "Syed Aabish Hassan",
    title: "CEO & Founder",
    bio: "Founder of Eventoss Entertainment with a decade-plus vision for precision-led corporate experiences across India. Leads strategy, client partnerships, and the creative direction of the Corporate Events division.",
    image: "/aabish-Sir.jpg",
  },
  {
    slug: "rahul-ranjan",
    name: "Rahul Ranjan",
    title: "Executive Director & Co-Founder",
    bio: "Co-founder and Executive Director overseeing operations, delivery excellence, and multi-city expansion. Ensures every corporate engagement meets Eventoss standards of planning and on-ground execution.",
    image: "/rahul.png",
  },
  {
    slug: "aliwaris-khan",
    name: "Aliwaris Khan",
    title: "Director, Events & Entertainment",
    bio: "Director of Events & Entertainment, responsible for production design, entertainment curation, and show-calling excellence across conferences, galas, launches, and large-format corporate gatherings.",
    image: "/ALIWARIS.png",
  },
];
