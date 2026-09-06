export type Language = 'es' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'email' | 'whatsapp' | 'github';
  ariaLabel: string;
}

export interface HeroSidebarItem {
  icon: string;
  label: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  headline: string;
  subtitle: string;
  badge: string;
  primaryCta: {
    text: string;
    targetId: string;
  };
  secondaryCta: {
    text: string;
    url: string;
  };
  socials: SocialLink[];
  profileAlt: string;
  sidebarItems: HeroSidebarItem[];
  profileCardName: string;
  profileCardRole: string;
}

export interface AboutContent {
  title: string;
  manifestoParagraphs: string[];
}

export interface Project {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  metric: string;
  metricLabel: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  accentColor?: string;
}

export interface ProjectsSectionContent {
  chip: string;
  headlineFirst: string;
  headlineSecond: string;
  subtitle: string;
  projects: Project[];
  links: {
    viewProject: string;
    viewCode: string;
    liveDemo: string;
  };
}

export interface PortfolioContent {
  nav: {
    items: NavItem[];
    contactCta: string;
  };
  hero: HeroContent;
  about: AboutContent;
  featuredProjects: ProjectsSectionContent;
  footer: {
    rights: string;
    tagline: string;
    backToTop: string;
  };
}
