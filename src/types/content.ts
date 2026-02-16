export type LanguageCode = "sv" | "en" | "sq";

export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: LinkItem[];
}

export interface ThemeOption {
  id: string;
  label: string;
  tone: "light" | "dark";
}

export interface ThemeContent {
  storageKey: string;
  defaultTheme: string;
  menuLabel: string;
  themeLabel: string;
  lightGroupLabel: string;
  darkGroupLabel: string;
  options: ThemeOption[];
}

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  href: string;
}

export interface SiteContent {
  htmlLang: string;
  brandName: string;
  brandTagline: string;
  navigationAriaLabel: string;
  navigation: LinkItem[];
  headerCta: LinkItem;
  languageSwitcherLabel: string;
  languageOptions: LanguageOption[];
  theme: ThemeContent;
  footerColumns: FooterColumn[];
  footerNote: string;
}

export interface MetaContent {
  title: string;
  description: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: ImageAsset;
  showActions?: boolean;
}

export interface BaseSection {
  type: string;
  id: string;
  heading: string;
  intro: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: ImageAsset;
  link: LinkItem;
}

export interface FeatureSectionCta {
  heading: string;
  description: string;
  link: LinkItem;
}

export interface FeatureGridSection extends BaseSection {
  type: "feature-grid";
  items: FeatureItem[];
  sectionCta?: FeatureSectionCta;
}

export interface ImageBlockSection extends BaseSection {
  type: "image-block";
  body: string[];
  bullets: string[];
  image: ImageAsset;
  imageSide: "left" | "right";
}

export interface TextMetric {
  label: string;
  value: string;
}

export interface TextBlockSection extends BaseSection {
  type: "text-block";
  body: string[];
  metrics: TextMetric[];
}

export interface CtaSection extends BaseSection {
  type: "cta";
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
}

export interface ProjectCategory {
  id: string;
  label: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  categories: string[];
  location: string;
  timeframe: string;
  image: ImageAsset;
  gallery: ImageAsset[];
  openLabel: string;
}

export interface ProjectGallerySection extends BaseSection {
  type: "project-gallery";
  tabsAriaLabel: string;
  allTabLabel: string;
  categories: ProjectCategory[];
  cards: ProjectCard[];
  modalAriaLabel: string;
  modalCloseLabel: string;
  locationLabel: string;
  timeframeLabel: string;
  galleryHeading: string;
}

export interface ReviewItem {
  quote: string;
  author: string;
  role: string;
  rating: string;
}

export interface ReviewListSection extends BaseSection {
  type: "review-list";
  items: ReviewItem[];
}

export type ContactFormFieldType = "text" | "email" | "tel" | "textarea";

export interface ContactFormField {
  name: string;
  label: string;
  type: ContactFormFieldType;
  placeholder?: string;
  required?: boolean;
}

export interface ContactFormSection extends BaseSection {
  type: "contact-form";
  recipientEmail: string;
  subject: string;
  submitLabel: string;
  fields: ContactFormField[];
}

export type PageSection =
  | FeatureGridSection
  | ImageBlockSection
  | TextBlockSection
  | CtaSection
  | ProjectGallerySection
  | ReviewListSection
  | ContactFormSection;

export interface PageContent {
  locale: LanguageCode;
  slug: string;
  route: string;
  meta: MetaContent;
  site: SiteContent;
  hero: HeroContent;
  sections: PageSection[];
}
