import * as React from 'react';
import { PolymorphicComponentProps } from '../Box';
import { PanelOwnProps } from './types';
export declare type PanelProps = PolymorphicComponentProps<'div', PanelOwnProps>;
export declare const Panel: {
    ({ appearance, id, hasChildPanels, className, children, isCollapsible, isOpen: isOpenProp, defaultIsOpen, onChange, rounded, ...extraProps }: PanelProps): JSX.Element;
    Titlebar: React.NamedExoticComponent<import("./PanelTitlebar").IPanelTitlebar>;
    Content: React.FC<import("../Box").BoxOwnProps<React.ElementType<any>>>;
};
