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
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Activities", href: "#activities", id: "activities" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" }
] as const;

export const heroHighlights = [
  "Frontend systems with product thinking",
  "Strong DSA and problem-solving fundamentals",
  "Growing full-stack and cloud deployment skills"
] as const;

export const heroStats = [
  { value: "08+", label: "Projects delivered" },
  { value: "500+", label: "DSA problems solved" },
  { value: "3+", label: "Years of active practice" }
] as const;

export const aboutStats = [
  { label: "Production-ready projects", value: "08+" },
  { label: "Primary stack", value: "Next.js + TS" },
  { label: "Current focus", value: "Cloud + Systems" }
] as const;

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
      "Built a voice-input based stress-monitoring concept with confidence indicators, trend visualization, and dashboard-first information hierarchy.",
    tags: ["Next.js", "TypeScript", "Data Visualization", "AI Concepts"],
    href: "#",
    repo: "#",
    image: "/project-analytics.svg"
  },
  {
    title: "Developer Metrics Hub",
    summary:
      "Designed and developed a developer dashboard that consolidates coding activity, streaks, and project momentum into an actionable single view.",
    tags: ["React", "API Integration", "Dashboard UX"],
    href: "#",
    repo: "#",
    image: "/project-dashboard.svg"
  },
  {
    title: "Rock Paper Scissors Arena",
    summary:
      "Created an interactive browser game with clean state management, responsive interaction design, and an architecture ready for multiplayer extensions.",
    tags: ["JavaScript", "Game UI", "Motion Design"],
    href: "https://github.com/sy-Pratyush-raj/Rock_Paper_Scissor",
    repo: "https://github.com/sy-Pratyush-raj/Rock_Paper_Scissor",
    image: "/project-game.svg"
  }
] as const;

export const education = [
  {
    period: "2023 - 2027",
    title: "B.Tech in Computer Science",
    subtitle: "Undergraduate degree program",
    detail:
      "Focused on algorithms, operating systems, databases, and software engineering while applying concepts through practical frontend and full-stack projects."
  },
  {
    period: "2021 - 2023",
    title: "Senior Secondary Education",
    subtitle: "Science stream",
    detail: "Strengthened fundamentals in mathematics, physics, and computer science while building early interest in software."
  }
] as const;

export const certifications = [
  {
    title: "Cloud Foundations and Deployment Workflows",
    issuer: "Structured self-learning track",
    note: "Covered deployment pipelines, environment management, and practical cloud fundamentals used in modern web application delivery.",
    icon: Award
  },
  {
    title: "Full-Stack Development Practice Program",
    issuer: "Project-based implementation",
    note: "Built through hands-on product work across frontend engineering, API integration, and continuous iteration on real project workflows.",
    icon: GraduationCap
  }
] as const;

export const achievements = [
  {
    title: "Solved 500+ DSA Problems",
    description: "Maintained long-term consistency across arrays, trees, graphs, dynamic programming, and interview-style problem sets."
  },
  {
    title: "Built and Iterated Multiple Portfolio Projects",
    description: "Shipped polished frontend and full-stack projects with responsive layouts, scalable component structures, and continuous UX improvements."
  },
  {
    title: "Competitive Coding and Challenge Participation",
    description: "Regularly practiced timed coding challenges to improve speed, accuracy, and structured thinking under constraints."
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pratyushraj09/" },
  { label: "Email", href: "mailto:rockpratyushraj@gmail.com" }
] as const;

export const resumeExperience = [
  {
    title: "Frontend and Product-Focused Developer",
    organization: "Academic and independent projects",
    period: "2024 - Present",
    detail:
      "Owned interface implementation, component architecture, and UX refinement for multiple web projects using Next.js, TypeScript, and modern frontend tooling."
  }
] as const;
