import * as React from 'react';
import { PanelOwnProps } from './types';
export declare type PanelContextProps = Pick<PanelOwnProps, 'appearance' | 'hasChildPanels'>;
export declare const PanelContext: React.Context<PanelContextProps>;
export declare const usePanelContext: () => PanelContextProps;
