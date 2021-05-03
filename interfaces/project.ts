export type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
  default_branch_id: number;
  workspace: {
    id: string;
    name: string;
    slug: string;
  };
};
