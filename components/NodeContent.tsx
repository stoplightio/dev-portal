import { Docs } from '@stoplight/elements/components/Docs';
import { MarkdownComponentsProvider } from '@stoplight/elements/components/MarkdownViewer/CustomComponents/Provider';
import { CustomLinkComponent } from '@stoplight/elements/components/MosaicTableOfContents/types';
import { PersistenceContextProvider } from '@stoplight/elements/context/Persistence';
import { Box } from '@stoplight/mosaic';
import { dirname, resolve } from '@stoplight/path';
import { NodeType } from '@stoplight/types';
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
        <MarkdownComponentsProvider value={{ link: LinkComponent, image: ImageComponent }}>
          <NodeLinkContext.Provider value={[node, Link]}>
            <Box style={{ maxWidth: ['model'].includes(node.type) ? 1000 : undefined }}>
              <Docs nodeType={node.type as NodeType} nodeData={node.data} />
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
  const [resolvedUriWithoutAnchor, hash] = resolvedUri.split('#');
  const edge = node.outbound_edges.find(edge => edge.uri === url || edge.uri === resolvedUriWithoutAnchor);

  if (edge) {
    return (
      <Link to={edge.slug} hash={hash}>
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

const ImageComponent: React.FC<{ node: { url: string } }> = ({ node: { url } }) => {
  const [node] = React.useContext(NodeLinkContext);
  const resolvedUri = resolve(dirname(node.uri), url);
  const edge = node.outbound_edges.find(
    edge => edge.type === 'image' && (edge.uri === url || edge.uri === resolvedUri),
  );

  return <Box as="img" src={edge ? edge.href : url} />;
};
