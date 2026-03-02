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
    slug: "ar-vr",
    title: "AR/VR Experience",
    description: "A modern app for augmented and virtual reality experiences.",
    thumbnail: "/images/projects/project4/thumbnail.png",

    header_details: {
      overview:
        "AR/VR Experience is an immersive application designed to showcase augmented and virtual reality use cases in an intuitive and accessible way. The project focuses on helping users explore interactive environments without friction, even if they are new to AR/VR technology.",
      role: "UI/UX Design",
      platform: "Mobile Application",
      duration: "3 weeks",
    },

    mid_section_details: {
      challenge:
        "Designing complex immersive interactions while keeping navigation simple and preventing user disorientation.",
      approach:
        "Focused on minimal UI overlays, clear onboarding cues, and spatial hierarchy to guide users naturally through the experience.",
      outcome:
        "The final experience feels intuitive and immersive, allowing users to engage with AR/VR content confidently without feeling overwhelmed.",
    },

    final_thoughts:
      "This project highlighted the importance of restraint in immersive design. Letting the experience speak, while subtly guiding the user, made the interaction feel natural and engaging.",
  },
  {
    projectNo: 5,
    slug: "homio-estate",
    title: "Homio Estate",
    description: "A modern way of buying and selling properties.",
    thumbnail: "/images/projects/project5/thumbnail.png",
    header_details: {
      overview:
        "Homio Estate is a real estate platform designed to simplify the process of buying and selling properties. The focus was on creating trust, clarity, and ease of decision-making for users browsing property listings.",
      role: "UI/UX Design",
      platform: "Web Application",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Presenting large amounts of property data while keeping the interface approachable and not overwhelming for users.",
      approach:
        "Designed clean property cards, clear visual hierarchy, and strong imagery to balance information with emotional appeal.",
      outcome:
        "Users can scan, compare, and shortlist properties easily, making the browsing experience feel confident and stress-free.",
    },

    final_thoughts:
      "Homio Estate reinforced how clarity and trust-driven design play a crucial role in real estate experiences, where users make high-stakes decisions.",
  },
  {
    projectNo: 6,
    slug: "heirloom",
    title: "Heirloom",
    description: "A mobile app for preserving memories and meaningful moments.",
    thumbnail: "/images/projects/project6/thumbnail.png",

    header_details: {
      overview:
        "Heirloom is a mobile application designed to help people preserve personal memories, stories, and moments in a thoughtful and lasting way. The project focuses on creating an emotionally safe and simple space where users can document what matters most.",
      role: "UI/UX Design",
      platform: "Mobile Application",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Designing an emotionally driven product without making the interface feel heavy or intrusive.",
      approach:
        "Focused on calm visuals, soft typography, and frictionless flows to encourage reflection and natural storytelling.",
      outcome:
        "The final experience feels warm and personal, allowing users to capture memories effortlessly without feeling guided or rushed.",
    },

    final_thoughts:
      "Heirloom reinforced the idea that emotional products benefit from quiet design decisions. By prioritizing simplicity and sensitivity, the interface supports the story rather than competing with it.",
  },
  {
    projectNo: 7,
    slug: "homio",
    title: "Homio",
    description: "A webapp for managing smart home devices.",
    thumbnail: "/images/projects/project7/thumbnail.png",
    header_details: {
      overview:
        "Homio is a smart home management web app that allows users to control and monitor connected devices from a single dashboard. The goal was to make smart living feel simple and reliable.",
      role: "UI/UX Design",
      platform: "Web Application",
      duration: "3 weeks",
    },

    mid_section_details: {
      challenge:
        "Managing multiple devices and controls without creating cognitive overload for users.",
      approach:
        "Introduced a clear dashboard structure, logical grouping of devices, and familiar interaction patterns for quick control.",
      outcome:
        "Users can manage their smart home efficiently, with reduced friction and improved clarity across everyday actions.",
    },

    final_thoughts:
      "This project emphasized the importance of predictability and clarity in utility-driven products where speed and reliability matter most.",
  },
  {
    projectNo: 8,
    slug: "rail-yatri",
    title: "Rail Yatri",
    description: "A travel app for elderly users.",
    thumbnail: "/images/projects/project8/thumbnail.png",
    header_details: {
      overview:
        "Rail Yatri is a travel application designed specifically for elderly users, focusing on accessibility, clarity, and comfort throughout the journey planning process.",
      role: "UI/UX Design",
      platform: "Mobile Application",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Designing for elderly users with varying levels of digital literacy and accessibility needs.",
      approach:
        "Used larger touch targets, clear typography, simplified flows, and minimal steps for key actions like booking and navigation.",
      outcome:
        "The app feels approachable and reassuring, enabling elderly users to travel with greater confidence and independence.",
    },

    final_thoughts:
      "Rail Yatri reinforced the value of empathetic design and how accessibility-first thinking can drastically improve user confidence.",
  },
  {
    projectNo: 9,
    slug: "glassdoor",
    title: "Glassdoor",
    description: "Glassdoor website redesign for better user experience.",
    thumbnail: "/images/projects/project9/thumbnail.png",

    header_details: {
      overview:
        "This project reimagines the Glassdoor website experience with a focus on improved usability, clarity, and trust. The goal was to help users explore company insights and reviews more effortlessly.",
      role: "UI/UX Design",
      platform: "Website Redesign",
      duration: "2 weeks",
    },

    mid_section_details: {
      challenge:
        "Organizing dense information like reviews, ratings, and salaries without overwhelming users.",
      approach:
        "Redesigned layouts with clearer hierarchy, improved filtering, and scannable content sections.",
      outcome:
        "Users can quickly find relevant insights and make informed career decisions with less cognitive effort.",
    },

    final_thoughts:
      "This redesign highlighted how structure and hierarchy are essential when dealing with information-heavy platforms.",
  },
];
