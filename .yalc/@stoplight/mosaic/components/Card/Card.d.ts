import * as React from 'react';
import { IIconProps } from '../../components/Icon';
import { BackgroundColorVals, BorderColorVals } from '../../enhancers';
declare type CardProps = {
    title: string;
    description?: string;
    logoIcon?: IIconProps['icon'];
    logoIconColor?: IIconProps['color'];
    logoBackgroundColor?: BackgroundColorVals;
    actionBar?: React.ReactNode;
    badge?: React.ReactNode;
    isActive?: boolean;
    activeHighlightColor?: BorderColorVals;
};
export declare const Card: ({ title, description, logoIcon, logoIconColor, logoBackgroundColor, actionBar, badge, isActive, activeHighlightColor, }: CardProps) => JSX.Element;
export {};
