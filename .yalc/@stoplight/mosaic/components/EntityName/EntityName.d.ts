import React from 'react';
import { AvatarProps } from '../Avatar';
import { IIconProps } from '../Icon';
declare type BaseEntityNameProps = {
    name: string;
    className?: string;
    isHeading?: boolean;
    size?: 'md' | 'lg';
    avatar?: AvatarProps;
};
declare type IconEntityNameProps = BaseEntityNameProps & {
    icon: IIconProps['icon'];
};
declare type AvatarEntityNameProps = BaseEntityNameProps & {
    avatar: AvatarProps;
};
export declare type EntityNameProps = BaseEntityNameProps | IconEntityNameProps | AvatarEntityNameProps;
export declare const EntityName: React.MemoExoticComponent<React.ForwardRefExoticComponent<(BaseEntityNameProps & React.RefAttributes<HTMLDivElement>) | (BaseEntityNameProps & {
    icon: IIconProps['icon'];
} & React.RefAttributes<HTMLDivElement>) | (BaseEntityNameProps & {
    avatar: AvatarProps;
} & React.RefAttributes<HTMLDivElement>)>>;
export {};
