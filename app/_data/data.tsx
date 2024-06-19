import {
  FooterNavLinks,
  NavLinks,
  CardData,

  HeroSectionData,
} from "@/app/_lib/defination";

import { MdDone } from "react-icons/md";

import { ListItem } from "@/app/_lib/defination";
// demo data for nav links
export const navlinks: NavLinks[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Product", url: "/product" },
  { id: 3, title: "Faq", url: "/faq" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "About us", url: "/about" },
];

// demo data for heroSection
export const heroSectionData: HeroSectionData[] = [
  {
    heading: "We're here to increase your productivity",
    description:
      "Let's make your work more organized and easy using the Taskio Dashboard with many of the latest features in managing work every day.",
  },
];

// demo data for feature section list item

export const listData: ListItem[] = [
  {
    icon: <MdDone />,
    text: "Free Consulting With Expert Saving Money",
  },
  {
    icon: <MdDone />,
    text: "Online Banking",
  },
  {
    icon: <MdDone />,
    text: "Investment Report Every Month",
  },
  {
    icon: <MdDone />,
    text: "Saving Money For The Future",
  },
  {
    icon: <MdDone />,
    text: "Online Transaction",
  },
];

// demo data for footer nav links
export const footerNavLinks: FooterNavLinks = {
  support: [
    { name: "Help centre", href: "#" },
    { name: "Account information", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact us", href: "#" },
  ],
  helpAndSolution: [
    { name: "Talk to support", href: "#" },
    { name: "Support docs", href: "#" },
    { name: "System status", href: "#" },
    { name: "Covid response", href: "#" },
  ],
  product: [
    { name: "Update", href: "#" },
    { name: "Security", href: "#" },
    { name: "Beta test", href: "#" },
    { name: "Pricing product", href: "#" },
  ],
  bottomLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};
//  card component ui data
export const cardData: CardData[] = [
  {
    heading: "Collaboration Teams",
    text: "Here you can handle projects together with team virtually",
    img: "/cardImages/card1.jpg",
    id: 1,
  },
  {
    heading: "Cloud Storage",
    text: "No need to worry about storage because we provide storage up to 2 TB",
    img: "/cardImages/card2.jpg",
    id: 2,
  },
  {
    heading: "Daily Analytics",
    text: "We always provide useful information to make it easier for you every day",
    img: "/cardImages/card3.jpg",
    id: 3,
  },
];

// pricing card demo data

