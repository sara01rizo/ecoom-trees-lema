import * as React from "react";
import { StaticImageData } from "next/image"

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurRecommendations = "OurRecommendations",
  ContactUs = "contactus",
  Footer = "Footer",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface RecommendationType {
  name: string;
  description?: string;
  image: string | StaticImageData;
}
