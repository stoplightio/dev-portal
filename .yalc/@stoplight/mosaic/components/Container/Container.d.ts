import * as React from 'react';
import { IColorProps, IMarginProps, IPaddingProps, PaddingVals } from '../../enhancers';
import { IBoxHTMLAttributes } from '../Box/types';
export declare type ContainerSizeVals = 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export interface IContainerProps extends IMarginProps, IPaddingProps, IBoxHTMLAttributes, IColorProps {
    as?: React.ElementType;
    size?: ContainerSizeVals;
}
export declare const containerSizes: Record<ContainerSizeVals, {
    maxWidth?: number;
    p: PaddingVals;
}>;
export declare const Container: React.MemoExoticComponent<React.ForwardRefExoticComponent<IContainerProps & React.RefAttributes<HTMLDivElement>>>;
