export interface Project {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  features?: string[];
  highlight?: string;
  links: {
    demo: string;
    github: string;
  };
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
