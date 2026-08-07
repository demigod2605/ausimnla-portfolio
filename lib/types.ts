export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo_url: string | null;
  demo_url: string | null;
  sort_order: number;
  created_at: string;
  images?: ProjectImage[];
};
