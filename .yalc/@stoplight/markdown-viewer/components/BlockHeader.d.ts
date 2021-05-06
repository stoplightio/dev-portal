import { IIconProps } from '@stoplight/mosaic';
import * as React from 'react';
export interface IBlockHeader {
    children: React.ReactNode;
    icon?: IIconProps['icon'];
    iconColor?: string;
}
export declare const BlockHeader: ({ icon, iconColor, children }: IBlockHeader) => JSX.Element;
