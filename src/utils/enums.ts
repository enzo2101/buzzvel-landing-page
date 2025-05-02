export enum CardsTakeLessonTypes {
  FEATURED = "Featured",
  POPULAR = "Popular",
}

export enum FooterCategories {
  PRODUCT = "Product",
  SOLUTIONS = "Solutions",
  RESOURCES = "Resources",
  SUPPORT = "Support",
  COMPANY = "Company",
}

export const FooterCategoriesMap = {
  [FooterCategories.PRODUCT]: {
    PRICING: "Pricing",
    OVERVIEW: "Overview",
    BROWSE: "Browse",
    ACCESSIBILITY: { name: "Accessibility", isBeta: true },
  },
  [FooterCategories.SOLUTIONS]: {
    BRAINSTORMING: "Brainstorming",
    IDEATION: "Ideation",
    WIREFRAMING: "Wireframing",
    RESEARCH: "Research",
  },
  [FooterCategories.RESOURCES]: {
    HELP_CENTER: "Help Center",
    BLOG: "Blog",
    TUTORIALS: "Tutorials",
    FAQS: "FAQs",
  },
  [FooterCategories.SUPPORT]: {
    CONTACT_US: "Contact Us",
    DEVELOPERS: "Developers",
    DOCUMENTATION: "Documentation",
    INTEGRATIONS: "Integrations",
  },
  [FooterCategories.COMPANY]: {
    ABOUT: "About",
    PRESS: "Press",
    EVENTS: "Events",
    REQUEST_DEMO: "Request Demo",
  },
};
