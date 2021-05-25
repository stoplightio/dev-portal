import { ITableOfContents as UiKitITableOfContents } from '@stoplight/ui-kit';
import { ITableOfContentsTree, TableOfContentsLinkWithId } from '../types';
export declare type ITableOfContents<E> = {
    workspaceSlug: string;
    projectSlug: string;
    platformUrl?: string;
    branchSlug?: string;
    nodeUri?: string;
    onData?: (tocTree: ITableOfContentsTree) => void;
    className?: string;
    authToken?: string;
} & Pick<UiKitITableOfContents<TableOfContentsLinkWithId, E>, 'rowComponent' | 'rowComponentExtraProps'>;
export declare function TableOfContents<E>({ workspaceSlug, platformUrl, projectSlug, branchSlug, nodeUri, onData, className, authToken, ...extra }: ITableOfContents<E>): JSX.Element;
