import { Project, Experience, SkillCategory } from './types';
import {
  Code, Layout, Database, Server, Smartphone,
  GitBranch, Terminal, Globe, Cpu, Layers
} from 'lucide-react';

export const SOCIAL_LINKS = {
  email: "sharukesh96@gmail.com",
  phone: "+91-87785-47235",
  linkedin: "https://www.linkedin.com/in/sharukesh-886103168/",
  github: "https://github.com/gohan68",
  resume: "/images/Sharukesh_Resume.pdf"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "PostgreSQL", "Supabase", "Python", "Drupal"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Vercel", "Hostinger", "AI Tools (Gemini, Emergent)"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "DUTUK",
    role: "Fullstack Developer",
    period: "May 2025 – Present",
    description: "Leading the development of scalable web applications from scratch, managing a team of developers, and ensuring code quality and performance optimization."
  },
  {
    company: "Headstarter",
    role: "Software Engineer Intern",
    period: "Jul 2024 – Sep 2024",
    description: "Contributed to core product features, optimized React components for performance, and participated in daily stand-ups and code reviews."
  },
  {
    company: "MSSRF",
    role: "Software & Hardware Support L1",
    period: "May 2024 – Jul 2024",
    description: "Provided technical support for software and hardware issues, ensuring system uptime and user satisfaction."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "HeyProData",
    period: "Nov-Dec 2025",
    description: "Full-stack professional networking & marketplace platform tailored for film/creative industries.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    features: [
      "Secure auth & Real-time messaging",
      "Portfolio management & Reviews",
      "Smart Contracts & Project Postings"
    ],
    highlight: "Built enterprise-grade app in just 2.5 weeks using AI-powered tools.",
    links: { demo: "https://heyprodata.com", github: "https://github.com/CatifiedSWE/hey-pro-data-beta" },
    image: "/images/HeyProData.png"
  },
  {
    title: "Cedar Elevators",
    period: "Dec 2025",
    description: "Complex B2B/B2C e-commerce store for elevator products with role-based access.",
    techStack: ["Next.js 16", "React 19", "Supabase", "Clerk", "Razorpay"],
    features: [
      "Multi-user types (Guest, Business)",
      "Quote Management System",
      "GST Calculations & PO Uploads"
    ],
    highlight: "Advanced verified/unverified business workflows and bulk pricing tiers.",
    links: { demo: "", github: "https://github.com/cedarelevatorsindustries/cedarelevators" },
    image: "/images/CedarElevators.png"
  },
  {
    title: "Dude Men's Wear",
    period: "Nov-Dec 2025",
    description: "Modern e-commerce platform for men's fashion featuring a robust admin dashboard.",
    techStack: ["Next.js 16", "Supabase", "Shadcn/UI", "Razorpay"],
    features: [
      "Advanced Search & Filtering",
      "Admin Dashboard for Analytics",
      "Secure Checkout Flow"
    ],
    highlight: "Deployment-ready structure for Vercel/Hostinger with optimized UI components.",
    links: { demo: "https://dudemw.com", github: "https://github.com/Mergexhq/dudemw" },
    image: "/images/DudeMensWear.png"
  },
  {
    title: "Zeko",
    period: "Jul-Aug 2024",
    description: "Innovative SaaS platform for interacting with PDF documents using AI.",
    techStack: ["React", "TypeScript", "AI Integration", "PDF.js"],
    features: ["Document Parsing", "Contextual Q&A", "Optimized Rendering"],
    highlight: "Highly optimized frontend for seamless large document handling.",
    links: { demo: "", github: "https://github.com/gohan68/Zeko_Final" },
    image: "/images/Zeko.png"
  },
  {
    title: "Time Table System",
    period: "Feb-Mar 2025",
    description: "Automated academic scheduling system for educational institutions.",
    techStack: ["React", "Node.js", "PostgreSQL", "Algorithms"],
    features: ["Conflict Detection", "Auto-Generation", "Teacher Management"],
    highlight: "Solved complex scheduling constraints efficiently.",
    links: { demo: "", github: "https://github.com/gohan68/Time-Table-Management-System/tree/master" },
    image: "/images/TimeTableManagementSystem.png"
  }
];