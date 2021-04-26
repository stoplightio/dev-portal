import { Docs } from '@stoplight/elements/components/Docs';
import { MarkdownComponentsProvider } from '@stoplight/elements/components/MarkdownViewer/CustomComponents/Provider';
import { CustomLinkComponent } from '@stoplight/elements/components/MosaicTableOfContents/types';
import { PersistenceContextProvider } from '@stoplight/elements/context/Persistence';
import { dirname, resolve } from '@stoplight/path';
import * as React from 'react';

import { NodeContent as NodeContentType } from '../handlers/node';

export type NodeContentProps = { node: NodeContentType; Link: CustomLinkComponent };

export const NodeContent = ({ node, Link }: NodeContentProps) => {
  const LinkComponent = ({ children, node: { url } }: any) => {
    const resolvedUri = resolve(dirname(node.uri), url);
    const edge = node.outbound_edges.find(edge => edge.uri === url || edge.uri === resolvedUri);

    if (edge) {
      return (
        <Link to={edge.slug} className="">
          {children}
        </Link>
      );
    }

    return children;
  };

  return (
    <PersistenceContextProvider>
      <MarkdownComponentsProvider value={{ link: LinkComponent }}>
        <Docs nodeType={node.type} nodeData={node.data} />
      </MarkdownComponentsProvider>
    </PersistenceContextProvider>
  );
};
