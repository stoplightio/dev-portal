export type Node = NodeSummary & {
  data: string;
  links: {
    mock_url: string;
    export_url: string;
  };
  outbound_edges: NodeEdge[];
  inbound_edges: NodeEdge[];
};

export type NodeSummary = {
  id: string;
  type: string;
  uri: string;
  slug: string;
  title: string;
  summary: string;
  project_id: number;
  branch_id: number;
};

export type NodeEdge = {
  id: string;
  type: string;
  uri: string;
  slug: string;
  title: string;
};
