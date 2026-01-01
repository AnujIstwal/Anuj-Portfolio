import { platform } from "os";

export const outcomes = [
  {
    id: "clarity",
    index: "01",
    title: "Clarity",
    description:
      "Interfaces designed with clear hierarchy and intent, so users instantly understand what matters.",
  },
  {
    id: "usability",
    index: "02",
    title: "Usability",
    description:
      "Thoughtful interactions and flows that reduce friction and make products intuitive to use.",
  },
  {
    id: "consistency",
    index: "03",
    title: "Consistency",
    description:
      "Design systems that maintain visual and behavioral consistency across the product.",
  },
  {
    id: "scalability",
    index: "04",
    title: "Scalability",
    description:
      "Interfaces designed to grow with the product, supporting future features without breaking the experience.",
  },
];

export type Project = {
  projectNo: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;

  header_details?: {
    overview: string;
    role: string;
    platform: string;
    duration: string;
  };

  mid_section_details?: {
    challenge: string;
    approach: string;
    outcome: string;
  };

  final_thoughts?: string;
};

// data/projects
export const projects = [
  {
    projectNo: 1,
    slug: "zidio-task",
    title: "Zidio Task Management System",
    description: "A SaaS task management platform for teams.",
    thumbnail: "/images/projects/project1/thumbnail.png",
    header_details: {
      overview:
        "Zidio Task Management System is a web-based productivity tool designed to help teams plan, track, and manage tasks with clarity. The project focuses on reducing task overload, improving visibility across workflows, and enabling teams to collaborate efficiently through a structured yet flexible interface.",
      role: "UI/UX software design",
      platform: "Web Application",
      duration: "2 months",
    },
    mid_section_details: {
      challenge:
        "Designing a task management system that balances complexity with usability, ensuring it meets diverse team needs without overwhelming users.",
      approach:
        "Implemented a clean, intuitive interface with customizable views and streamlined workflows to enhance user experience and productivity.",
      outcome:
        "Successfully launched the platform, receiving positive feedback for its user-friendly design and effective task management features.",
    },
    final_thoughts:
      "The Zidio Task Management System project reinforced the importance of user-centered design in creating effective productivity tools. By focusing on clarity and usability, we were able to deliver a solution that truly meets the needs of modern teams.",
  },
  {
    projectNo: 2,
    slug: "zidio-learn",
    title: "Zidio Learn",
    description: "E-learning platform design for skill development.",
    thumbnail: "/images/projects/project2/thumbnail.png",

    header_details: {
      overview:
        "Zidio Learn is an e-learning platform designed to help learners acquire practical, industry-relevant skills through structured courses and an intuitive learning experience. The platform focuses on clarity, motivation, and ease of progression for both beginners and advanced learners.",
      role: "UI/UX software design",
      platform: "Web Application",
      duration: "1.5 months",
    },

    mid_section_details: {
      challenge:
        "Designing a learning platform that keeps users engaged over time while presenting complex educational content in a simple and approachable way.",
      approach:
        "Focused on clear content hierarchy, progress-based learning flows, and minimal visual distractions to help users stay focused on learning goals.",
      outcome:
        "The final design provides a structured yet flexible learning experience, making it easier for users to track progress and stay motivated throughout courses.",
    },

    final_thoughts:
      "This project highlighted the importance of balancing information density with motivation in educational products. Thoughtful hierarchy and progress visibility played a key role in enhancing the overall learning experience.",
  },
  {
    projectNo: 3,
    slug: "x1-studio",
    title: "X1 Studio",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project3/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },

  {
    projectNo: 4,
    slug: "x1-studio",
    title: "X1 Studio",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project4/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },
  {
    projectNo: 5,
    slug: "ar-vr",
    title: "AR/VR Experience",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project5/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },
  {
    projectNo: 6,
    slug: "x1-studio",
    title: "X1 Studio",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project6/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },
  {
    projectNo: 7,
    slug: "x1-studio",
    title: "X1 Studio",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project7/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },
  {
    projectNo: 8,
    slug: "x1-studio",
    title: "X1 Studio",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project6/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },
  {
    projectNo: 9,
    slug: "x1-studio",
    title: "X1 Studio",
    description: "Creative agency website redesign.",
    thumbnail: "/images/projects/project6/thumbnail.png",

    header_details: {
      overview:
        "X1 Studio is a creative agency website redesign focused on showcasing the studio’s work, design philosophy, and services in a visually engaging and professional manner. The goal was to strengthen brand perception while improving content clarity and navigation.",
      role: "UI/UX software design",
      platform: "Marketing Website",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting diverse creative work without overwhelming visitors, while clearly communicating the studio’s value and expertise.",
      approach:
        "Adopted a clean, editorial-style layout with strong visual hierarchy, generous spacing, and focused storytelling through selected case highlights.",
      outcome:
        "The redesigned website offers a refined visual identity and improved navigation, helping visitors quickly understand the studio’s capabilities and creative approach.",
    },

    final_thoughts:
      "Working on X1 Studio reinforced how visual restraint and clear storytelling can elevate brand perception. Prioritizing clarity over decoration helped create a more confident and professional presence.",
  },
];
