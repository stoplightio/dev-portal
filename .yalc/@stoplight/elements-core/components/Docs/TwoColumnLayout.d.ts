import React from 'react';
export interface TwoColumnLayoutProps {
    header: React.ReactNode;
    right: React.ReactNode;
    left: React.ReactNode;
    className?: string;
}
export declare const TwoColumnLayout: ({ header, right, left, className }: TwoColumnLayoutProps) => JSX.Element;
