import {
  Award,
  BarChart3,
  Building2,
  BookOpen,
  Brain,
  Box,
  Boxes,
  Binary,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Wrench,
  type LucideIcon
} from "lucide-react";

import aboutData from "@/data/about-data.json";
import achievementsData from "@/data/achievements-data.json";
import activitiesData from "@/data/activities-data.json";
import certificationsData from "@/data/certifications-data.json";
import contactData from "@/data/contact-data.json";
import educationData from "@/data/education-data.json";
import heroDataJson from "@/data/hero-data.json";
import navData from "@/data/nav-data.json";
import projectsData from "@/data/projects-data.json";
import resumeData from "@/data/resume-data.json";
import skillsData from "@/data/skills-data.json";

const skillIconMap: Record<string, LucideIcon> = {
  Layers3,
  Code2,
  Sparkles,
  Rocket,
  Binary,
  Trophy,
  BriefcaseBusiness,
  Database,
  Cloud,
  Box,
  Boxes,
  Wrench,
  Terminal,
  GitBranch
};

const certificationIconMap: Record<string, LucideIcon> = {
  Award,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Brain,
  BookOpen
};

const educationIconMap: Record<string, LucideIcon> = {
  GraduationCap,
  School,
  Building2,
  BarChart3
};

export const navItems = navData;

export const heroData = heroDataJson;

export const aboutSection = {
  sectionHeading: aboutData.sectionHeading,
  aboutCard: aboutData.aboutCard,
  techStack: aboutData.techStack
};

export const aboutStats = aboutData.stats;

export const skillsSection = skillsData.sectionHeading;
export const skills = skillsData.items.map((skill) => ({
  ...skill,
  icon: skillIconMap[skill.icon] ?? Code2
}));

export const projectsSection = projectsData.sectionHeading;
export const projects = projectsData.items;

export const certificationsSection = certificationsData.sectionHeading;
export const certifications = certificationsData.items.map((certification) => ({
  ...certification,
  icon: certificationIconMap[certification.icon] ?? Award
}));

export const achievementsSection = achievementsData.sectionHeading;
export const achievements = achievementsData.items;

export const activitiesSection = activitiesData.sectionHeading;
export const activities = activitiesData.items;

export const educationSection = educationData.sectionHeading;
export const education = educationData.items.map((item) => ({
  ...item,
  titleIcon: educationIconMap[item.titleIcon] ?? GraduationCap,
  subtitleIcon: educationIconMap[item.subtitleIcon] ?? Building2,
  gradeIcon: educationIconMap[item.gradeIcon] ?? BarChart3
}));

export const contactSection = {
  sectionHeading: contactData.sectionHeading,
  primaryEmail: contactData.primaryEmail,
  primaryPhone: contactData.primaryPhone
};
export const contactLinks = contactData.links;

export const resumeExperience = resumeData.experience;
