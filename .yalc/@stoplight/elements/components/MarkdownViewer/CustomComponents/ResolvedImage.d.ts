import { IImage } from '@stoplight/markdown';
import React from 'react';
import { BundledBranchNode } from '../../../types';
declare type ResolvedImageProps = {
    node: IImage;
};
export declare const createResolvedImageComponent: (branchNode: BundledBranchNode) => React.MemoExoticComponent<({ node: { url, title, alt } }: ResolvedImageProps) => JSX.Element>;
export {};
