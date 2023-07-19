import * as React from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurRecommendations = "OurRecommendations",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
