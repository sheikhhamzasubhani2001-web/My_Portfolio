export interface UiUxProject {
  id: string;
  title: string;
  category: string; // e.g. "Mobile App", "SaaS Platform", "E-Commerce", "Design System"
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  figmaUrl: string;
  prototypeUrl?: string;
  behanceUrl?: string;
  coverImage: string;
  tools: string[]; // e.g. ["Figma", "Design System", "UX Research", "Wireframing"]
  keyMetrics?: string; // e.g. "+42% Conversion Rate"
  featured?: boolean;
}

export interface FrontendProject {
  id: string;
  title: string;
  category: string; // e.g. "Full Stack Web App", "Next.js Dashboard", "E-Commerce", "AI Tool"
  tagline: string;
  description: string;
  features: string[];
  techStack: string[]; // e.g. ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"]
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  lighthouseScore?: number;
  featured?: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  location: string;
  whatsappNumber: string; // e.g. "+92 300 1234567"
  whatsappMessage: string;
  email: string;
  figmaProfileUrl?: string;
  behanceUrl?: string;
  githubUrl: string;
  linkedinUrl?: string;
  yearsExperience: number;
  completedProjects: number;
  clientSatisfaction: number;
}

export type ActiveTrack = "all" | "uiux" | "frontend";
export type ThemeMode = "dark" | "light";
