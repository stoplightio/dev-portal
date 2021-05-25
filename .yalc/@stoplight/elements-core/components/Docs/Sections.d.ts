import * as React from 'react';
export interface ISectionTitle {
    title: string;
}
export declare const SectionTitle: React.FC<ISectionTitle>;
interface SubSectionPanelProps {
    title: React.ReactNode;
    hasContent?: boolean;
    rightComponent?: React.ReactNode;
}
export declare const SubSectionPanel: React.FC<SubSectionPanelProps>;
export {};
