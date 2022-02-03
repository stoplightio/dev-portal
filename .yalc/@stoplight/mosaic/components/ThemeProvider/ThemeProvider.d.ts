import React from 'react';
import { ThemeScope } from '../../hooks/use-theme';
import { ICustomTheme, PrebuiltThemeIds, ThemeMode } from '../../utils';
export declare type ThemeProviderProps = {
    children: JSX.Element;
    baseThemeId?: PrebuiltThemeIds;
    theme?: ICustomTheme;
    mode?: ThemeMode;
    scope?: ThemeScope;
    isInverted?: boolean;
};
export declare const ThemeProvider: React.ForwardRefExoticComponent<ThemeProviderProps & React.RefAttributes<unknown>>;
