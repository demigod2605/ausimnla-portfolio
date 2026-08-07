export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo_url: string | null;
  demo_url: string | null;
  sort_order: number;
  created_at: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};
