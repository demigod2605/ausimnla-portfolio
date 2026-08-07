import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "spc-training-center",
    title: "SPC Training Center",
    description:
      "A full-stack workforce training platform with a public site (home, about, courses, contact) and an admin dashboard featuring course management, enrollment tracking, and real-time analytics — completion rates, certification status, and department performance charts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    repo_url: null,
    demo_url: null,
    sort_order: 1,
    created_at: "2026-08-07T00:00:00Z",
    images: [
      { src: "/projects/home-portal.png", alt: "SPC Training Center home page" },
      { src: "/projects/about-portal.png", alt: "SPC Training Center about page" },
      { src: "/projects/courses-portal.png", alt: "SPC Training Center courses page" },
      { src: "/projects/contact-portal.png", alt: "SPC Training Center contact page" },
      { src: "/projects/dashboard-portal.png", alt: "SPC Training Center admin dashboard" },
    ],
  },
  {
    id: "student-course-portal",
    title: "Student Course Portal",
    description:
      "A student profile and course catalog app with add/edit/search functionality for courses, built with React and Vite.",
    tags: ["React", "Vite", "Tailwind CSS"],
    repo_url: null,
    demo_url: null,
    sort_order: 2,
    created_at: "2026-08-07T00:00:00Z",
  },
  {
    id: "contacts-users-directory",
    title: "Contacts & Users Directory",
    description:
      "A multi-page Next.js app with a live users directory (dynamic profile routes), a contacts page, and an about page, built on the App Router.",
    tags: ["Next.js", "TypeScript", "App Router"],
    repo_url: null,
    demo_url: null,
    sort_order: 3,
    created_at: "2026-08-07T00:00:00Z",
  },
];
