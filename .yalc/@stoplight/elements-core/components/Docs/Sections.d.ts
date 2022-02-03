import { HeadingProps, PanelProps } from '@stoplight/mosaic';
import * as React from 'react';
export interface ISectionTitle {
    title: string;
    id?: string;
    size?: HeadingProps['size'];
}
export declare const SectionTitle: React.FC<ISectionTitle>;
export declare const SectionSubtitle: React.FC<ISectionTitle>;
declare type SubSectionPanelProps = {
    title: React.ReactNode;
    hasContent?: boolean;
    rightComponent?: React.ReactNode;
};
export declare const SubSectionPanel: React.FC<SubSectionPanelProps & Pick<PanelProps, 'defaultIsOpen' | 'onChange'>>;
export {};
