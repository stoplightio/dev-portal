import { Docs } from '@stoplight/elements/components/Docs';
import { MarkdownComponentsProvider } from '@stoplight/elements/components/MarkdownViewer/CustomComponents/Provider';
import { CustomLinkComponent } from '@stoplight/elements/components/MosaicTableOfContents/types';
import { PersistenceContextProvider } from '@stoplight/elements/context/Persistence';
import { Box } from '@stoplight/mosaic';
import { dirname, resolve } from '@stoplight/path';
import * as React from 'react';

import { Node } from '../interfaces/node';
import { ErrorBoundary } from './ErrorBoundary';

export type NodeContentProps = {
  node: Node;
  Link: CustomLinkComponent;
};

export const NodeContent = ({ node, Link }: NodeContentProps) => {
  return (
    <ErrorBoundary>
      <PersistenceContextProvider>
        <MarkdownComponentsProvider value={{ link: LinkComponent }}>
          <NodeLinkContext.Provider value={[node, Link]}>
            <Box style={{ maxWidth: ['article', 'model'].includes(node.type) ? 1000 : undefined }}>
              <Docs nodeType={node.type} nodeData={node.data} />
            </Box>
          </NodeLinkContext.Provider>
        </MarkdownComponentsProvider>
      </PersistenceContextProvider>
    </ErrorBoundary>
  );
};

const NodeLinkContext = React.createContext<[Node, CustomLinkComponent] | null>(null);

const LinkComponent: React.FC<{ node: { url: string } }> = ({ children, node: { url } }) => {
  const [node, Link] = React.useContext(NodeLinkContext);
  const resolvedUri = resolve(dirname(node.uri), url);
  const edge = node.outbound_edges.find(edge => edge.uri === url || edge.uri === resolvedUri);

  if (edge) {
    return (
      <Link to={edge.slug} className="">
        {children}
      </Link>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
