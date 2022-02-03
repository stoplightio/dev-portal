import { MDAST } from '@stoplight/markdown';
import { DocsComponentProps } from '..';
declare type ArticleProps = DocsComponentProps<string | MDAST.Root>;
export declare const Article: import("react").FunctionComponent<ArticleProps & import("@stoplight/react-error-boundary").ErrorBoundaryProps<{}>>;
export {};
