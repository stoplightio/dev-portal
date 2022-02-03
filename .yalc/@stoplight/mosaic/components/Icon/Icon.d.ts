import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as React from 'react';
export interface IIconProps extends FontAwesomeIconProps {
}
declare type State = {
    defaultStyle: 'fas' | 'far' | 'fal' | 'fad';
    setDefaultStyle: (style: State['defaultStyle']) => void;
};
export declare const useIconStore: import("zustand").UseBoundStore<State, import("zustand").StoreApi<State>>;
export declare const Icon: React.NamedExoticComponent<IIconProps>;
export declare function isIconDefinition(prop?: unknown): prop is IconDefinition;
export declare function isIconProp(prop?: unknown): prop is IconProp;
export {};
