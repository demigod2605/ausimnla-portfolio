import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "spc-training-center",
    title: "SPC Training Center",
    description:
      "A full-stack workforce training platform with a public site (home, about, courses, contact) and an admin dashboard featuring course management, enrollment tracking, and real-time analytics — completion rates, certification status, and department performance charts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    repo_url: "https://github.com/ausimnla",
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
];
