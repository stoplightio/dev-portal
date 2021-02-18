import React, { CSSProperties } from 'react';
import { IMarginProps } from '../../enhancers';
import { IIconProps } from '../Icon';
declare type BaseAvatarProps = IMarginProps & {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    bg?: CSSProperties['backgroundColor'];
};
export declare type ImageAvatarProps = BaseAvatarProps & {
    imageUrl: string;
};
export declare type IconAvatarProps = BaseAvatarProps & {
    icon: IIconProps['icon'];
};
export declare type LetterAvatarProps = BaseAvatarProps & {
    letter: string;
};
export declare type BlankAvatarProps = BaseAvatarProps & {
    blank: true;
};
export declare type AvatarProps = ImageAvatarProps | IconAvatarProps | LetterAvatarProps | BlankAvatarProps;
export declare const Avatar: React.MemoExoticComponent<React.ForwardRefExoticComponent<(IMarginProps & {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    bg?: CSSProperties['backgroundColor'];
} & {
    imageUrl: string;
} & React.RefAttributes<HTMLDivElement>) | (IMarginProps & {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    bg?: CSSProperties['backgroundColor'];
} & {
    icon: IIconProps['icon'];
} & React.RefAttributes<HTMLDivElement>) | (IMarginProps & {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    bg?: CSSProperties['backgroundColor'];
} & {
    letter: string;
} & React.RefAttributes<HTMLDivElement>) | (IMarginProps & {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    bg?: CSSProperties['backgroundColor'];
} & {
    blank: true;
} & React.RefAttributes<HTMLDivElement>)>>;
export {};
