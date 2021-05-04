import { NodeSummary } from './node';

export type SearchResult = NodeSummary & {
  highlighted: {
    name: string;
    summary: string;
    data: string;
  };
  project_slug: string;
  project_name: string;
};
