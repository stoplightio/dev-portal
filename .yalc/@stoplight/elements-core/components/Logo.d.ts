import * as React from 'react';
interface LogoProps {
    logo: {
        altText: string;
        url?: string;
        backgroundColor?: string;
        href?: string;
    };
}
export declare const Logo: React.FC<LogoProps>;
export {};
