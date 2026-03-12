import {
  Award,
  Binary,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
  Sparkles,
  Trophy
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Activities", href: "#activities", id: "activities" },
  { label: "Contact", href: "#contact", id: "contact" }
] as const;

export const heroHighlights = [
  "Cloud-focused developer",
  "DSA enthusiast",
  "Building polished web products"
];

export const aboutStats = [
  { label: "Projects shipped", value: "08+" },
  { label: "Core stack", value: "Next.js / TS" },
  { label: "Learning focus", value: "Systems + Cloud" }
];

export const skills = [
  { name: "Next.js", level: "Advanced", icon: Layers3 },
  { name: "TypeScript", level: "Advanced", icon: Code2 },
  { name: "Tailwind CSS", level: "Advanced", icon: Sparkles },
  { name: "Framer Motion", level: "Intermediate", icon: Rocket },
  { name: "C++", level: "Advanced", icon: Binary },
  { name: "DSA", level: "Advanced", icon: Trophy },
  { name: "Node.js", level: "Intermediate", icon: BriefcaseBusiness },
  { name: "SQL", level: "Intermediate", icon: Database }
] as const;

export const projects = [
  {
    title: "AI Stress Level Tracker",
    summary:
      "Voice-based stress monitoring concept with a clean analytics dashboard, confidence indicators, and trend snapshots.",
    tags: ["Next.js", "TypeScript", "Charts", "AI"],
    href: "#",
    repo: "#",
    image: "/project-analytics.svg"
  },
  {
    title: "Developer Metrics Hub",
    summary:
      "Portfolio-ready dashboard that aggregates coding stats, streaks, and project velocity into a focused command center.",
    tags: ["React", "APIs", "Design System"],
    href: "#",
    repo: "#",
    image: "/project-dashboard.svg"
  },
  {
    title: "Rock Paper Scissors Arena",
    summary:
      "An elevated browser mini-game with multiplayer-ready architecture, sound hooks, and motion-driven interactions.",
    tags: ["JavaScript", "Game UI", "Animation"],
    href: "#",
    repo: "#",
    image: "/project-game.svg"
  }
] as const;

export const education = [
  {
    period: "2023 - 2027",
    title: "B.Tech in Computer Science",
    subtitle: "Your University Name",
    detail:
      "Focused on data structures, algorithms, operating systems, web development, and practical project work."
  },
  {
    period: "2021 - 2023",
    title: "Senior Secondary Education",
    subtitle: "Your School Name",
    detail: "Built strong fundamentals in mathematics, physics, and computer science."
  }
] as const;

export const certifications = [
  {
    title: "Cloud Foundations Certification",
    issuer: "Provider / Platform",
    note: "Replace with your verified certification title and issue date.",
    icon: Award
  },
  {
    title: "Full Stack Development Program",
    issuer: "Provider / Platform",
    note: "Use this card for bootcamps, internships, or structured learning programs.",
    icon: GraduationCap
  }
] as const;

export const achievements = [
  {
    title: "Solved 500+ DSA Problems",
    description: "Demonstrated consistency across arrays, trees, graphs, dynamic programming, and contest-style problem solving."
  },
  {
    title: "Built Multiple Portfolio Projects",
    description: "Created polished frontend and full-stack projects with responsive layouts and maintainable code structure."
  },
  {
    title: "Hackathon / Coding Contest Finalist",
    description: "Placeholder for contest rankings, hackathon milestones, or community challenge wins."
  }
] as const;

export const activities = [
  {
    title: "Open Source Exploration",
    description: "Learning from real-world repositories, experimenting with UI systems, and contributing improvements over time."
  },
  {
    title: "Peer Mentoring",
    description: "Helping classmates with web fundamentals, debugging, and structured DSA preparation."
  },
  {
    title: "Technical Writing",
    description: "Documenting learnings, project decisions, and problem-solving approaches for future reference."
  }
] as const;

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/sy-Pratyush-raj" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-linkedin" },
  { label: "Email", href: "mailto:rockpratyushraj@gmail.com" }
] as const;

export const resumeExperience = [
  {
    title: "Frontend / Full-Stack Intern",
    organization: "Your Company or Internship",
    period: "Add dates here",
    detail:
      "Replace with internship or freelance work. Mention ownership, stack, and measurable outcomes."
  }
] as const;
