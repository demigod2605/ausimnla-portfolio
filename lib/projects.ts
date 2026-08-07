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
    highlights: [
      "Public site with home, about, courses, and contact pages",
      "Admin dashboard for course management — create, edit, and organize courses",
      "Enrollment tracking for trainees",
      "Real-time analytics: completion rates, certification status, and department performance charts",
    ],
    images: [
      { src: "/projects/home-portal.png", alt: "SPC Training Center home page" },
      { src: "/projects/about-portal.png", alt: "SPC Training Center about page" },
      { src: "/projects/courses-portal.png", alt: "SPC Training Center courses page" },
      { src: "/projects/contact-portal.png", alt: "SPC Training Center contact page" },
      { src: "/projects/dashboard-portal.png", alt: "SPC Training Center admin dashboard" },
    ],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description:
      "A kanban-style task manager with drag-and-drop boards, team workspaces, and real-time updates. Built for fast, distraction-free task tracking across personal and team projects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    repo_url: null,
    demo_url: null,
    sort_order: 2,
    created_at: "2026-06-15T00:00:00Z",
    highlights: [
      "Drag-and-drop kanban boards for task organization",
      "Team workspaces with role-based access",
      "Real-time updates across connected devices",
      "Keyboard-friendly, accessible interface",
    ],
  },
  {
    id: "shopwave",
    title: "ShopWave",
    description:
      "A clean e-commerce storefront with product browsing, a full shopping cart, and secure checkout. Focused on performance and a smooth shopping experience end to end.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    repo_url: null,
    demo_url: null,
    sort_order: 3,
    created_at: "2026-03-10T00:00:00Z",
    highlights: [
      "Product catalog with filtering and search",
      "Shopping cart with persistent state",
      "Secure Stripe checkout integration",
      "Responsive layout optimized for mobile",
    ],
  },
  {
    id: "pixelnotes",
    title: "PixelNotes",
    description:
      "A lightweight markdown notes app with instant search, syntax highlighting, and automatic saving. Keeps ideas organized without getting in the way.",
    tags: ["Next.js", "TypeScript", "Postgres", "MDX"],
    repo_url: null,
    demo_url: null,
    sort_order: 4,
    created_at: "2025-11-20T00:00:00Z",
    highlights: [
      "Markdown editor with live preview",
      "Instant full-text search across notes",
      "Autosave with offline support",
      "Nested tags and folder organization",
    ],
  },
];
