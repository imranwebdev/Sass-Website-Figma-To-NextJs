import { ReactElement } from "react";

// Define the type for navigation links used in menus
export type NavLinks = {
  id: number;
  title: string;
  url: string;
};

// Define the type for the toggle button's props
export type ToggleButtonProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// Define the type for the hero section data
export type HeroSectionData = {
  heading: string;
  description: string;
};

// Define the type for content props, typically used in text sections
export type ContentProps = {
  heading: string;
  description: string;
};

// Define the type for the details of a pricing card
export type PricingCardDetail = {
  category: string;
  description: string;
  price: number;
  discount: string | null;
  feature: string[];
  btnText: string;
};

// Define the type for button props, allowing optional background and text colors
export type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

// Define the type for heading props
export type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

// Define the type for list items, typically used in feature lists
export type ListItem = {
  icon: ReactElement;
  text: string;
};

// Define the type for text props, allowing optional className and textColor
export type TextProps = {
  className?: string;
  textColor?: string;
  children: React.ReactNode;
};

// Define the type for the mini component card props
export type MiniComponentCardProps = {
  icon: ReactElement;
  text: string;
  heading: string;
  headingStyle?: string;
  textColor: string;
  className: string;
};

// Define the type for navigation links used in the footer
export type NavLink = {
  name: string;
  href: string;
};

// Define the type for the footer navigation links, categorized into sections
export type FooterNavLinks = {
  support: NavLink[];
  helpAndSolution: NavLink[];
  product: NavLink[];
  bottomLinks: NavLink[];
};

//  cardData
export type CardData = {
  heading: string;
  text: string;
  img: string;
  id: number;
};
