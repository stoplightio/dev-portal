import { ITableOfContents, NodeData } from './types';
declare type SchemaType = 'divider' | 'group';
export declare function generateProjectToC(searchResults: NodeData[]): ITableOfContents;
export declare function generateTocSkeleton(searchResults: NodeData[]): ITableOfContents;
export declare function resolveHttpServices(searchResults: NodeData[], toc: ITableOfContents): void;
export declare function groupNodesByType(searchResults: NodeData[]): {
    articles: Array<NodeData>;
    models: Array<NodeData>;
    httpServices: Array<NodeData>;
    httpOperations: Array<NodeData>;
};
export declare function sortArticlesByTypeAndPath(articles: NodeData[]): NodeData[];
export declare function appendArticlesToToC(toc: ITableOfContents): (articles: NodeData[]) => ITableOfContents;
export declare function appendHttpServicesToToC(toc: ITableOfContents): ({ httpServices, httpOperations, models, }: {
    httpServices: NodeData[];
    httpOperations: NodeData[];
    models: NodeData[];
}) => NodeData[];
export declare function appendModelsToToc(toc: ITableOfContents, schemaType?: SchemaType): (models: NodeData[]) => void;
export {};
