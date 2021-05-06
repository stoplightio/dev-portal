import { MDAST } from '@stoplight/markdown';
import { IDocsComponentProps } from '..';
export declare type ArticleProps = IDocsComponentProps<string | MDAST.IRoot>;
export declare const Article: import("react").FunctionComponent<ArticleProps & import("@stoplight/react-error-boundary").ErrorBoundaryProps<{}>>;
