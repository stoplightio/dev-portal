import * as React from 'react';
import { CSSProperties } from 'react';
import { IMarginProps } from '../../enhancers';
import { IIconProps } from '../Icon';
declare type BaseAvatarProps = IMarginProps & {
    size?: 'sm' | 'md' | 'lg';
    /**
     * @deprecated Prefer build in style props or the `tw` prop, and as last resort `UNSAFE_className`. For removal in v3.
     */
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
export declare const Avatar: React.MemoExoticComponent<React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>>;
export {};
