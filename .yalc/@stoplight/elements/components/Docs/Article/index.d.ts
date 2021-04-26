import { IRoot as MarkdownAstRoot } from '@stoplight/markdown';
import { IDocsComponentProps } from '..';
export declare type ArticleProps = IDocsComponentProps<string | MarkdownAstRoot>;
export declare const Article: import("react").FunctionComponent<ArticleProps & import("@stoplight/react-error-boundary").ErrorBoundaryProps<{}>>;
