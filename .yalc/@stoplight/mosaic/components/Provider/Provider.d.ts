import * as React from 'react';
import { CSSProperties } from 'react';
import { MosaicContextProps } from '../../hooks';
export declare type ProviderProps = Partial<MosaicContextProps> & {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    skipPreflight?: boolean;
};
export declare const rootThemeScope: unique symbol;
declare function MosaicProvider({ children, ...props }: ProviderProps): JSX.Element;
export { MosaicProvider as Provider };
