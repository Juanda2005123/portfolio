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

export interface OtherProject {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  impact: string;
  image: string;
  actionText: string;
  actionUrl: string;
  actionSecondaryText?: string;
  actionSecondaryUrl?: string;
}

export interface OtherProjectsSectionContent {
  chip: string;
  headlineFirst: string;
  headlineSecond: string;
  subtitle: string;
  projects: OtherProject[];
}

export interface WorkExperienceEntry {
  id: string;
  period: string;
  current?: boolean;
  role: string;
  company: string;
  location: string;
  locationKind: string; // e.g. "Remoto", "Presencial", "Internacional"
  employmentType: string; // e.g. "Profesional Independiente", "Inmersión Internacional", "Representación Institucional"
  shortDescription?: string; // Concise preview of what was done
  bullets?: string[];   // Clean bullet points when expanded
  highlight?: string;   // optional
  description?: string; // optional
  tags?: string[];      // optional
  logo: string;
  logoBg?: string;      // background color/class for logo container if needed
  accentColor?: string; // optional accent for timeline dot
}

export interface EducationEntry {
  id: string;
  period: string;
  current?: boolean;
  degree: string;
  institution: string;
  location: string;
  locationKind: string;
  shortDescription?: string;
  bullets?: string[];
  gpa: string;
  gpaScale: string;
  honors: string[];
  description: string;
  fundamentals: string[];
  logo: string;
  accentColor?: string;
}

export interface WorkExperienceSectionContent {
  chip: string;
  headlineFirst: string;
  headlineSecond: string;
  subtitle: string;
  entries: WorkExperienceEntry[];
}

export interface EducationSectionContent {
  chip: string;
  headlineFirst: string;
  headlineSecond: string;
  subtitle: string;
  entry: EducationEntry;
}

export interface PortfolioContent {
  nav: {
    items: NavItem[];
    contactCta: string;
  };
  hero: HeroContent;
  about: AboutContent;
  featuredProjects: ProjectsSectionContent;
  otherProjects: OtherProjectsSectionContent;
  workExperience: WorkExperienceSectionContent;
  education: EducationSectionContent;
  footer: {
    rights: string;
    tagline: string;
    backToTop: string;
  };
}
