import { CollectionChildren } from '@react-types/shared';
import * as React from 'react';
declare type StepsProps = {
    current?: number;
    className?: string;
};
declare type StepProps = {
    title: string;
    className?: string;
    index?: number;
    isActive?: boolean;
    completed?: boolean;
    isLast?: boolean;
};
export declare const Step: ({ title, index, isActive, completed, className, isLast }: StepProps) => JSX.Element;
export declare const Steps: React.NamedExoticComponent<StepsProps & {
    children: CollectionChildren<object>;
}>;
export {};
