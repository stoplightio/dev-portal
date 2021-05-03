import { NodeSummary } from './node';

export type SearchResult = NodeSummary & {
  highlighted: {
    name: string;
    summary: string;
    data: string;
  };
};
