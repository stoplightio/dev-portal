import { MenuActionItem } from '@stoplight/mosaic';
import * as React from 'react';
declare type ExportMenuProps = Pick<MenuActionItem, 'href' | 'onPress'>;
export interface ExportButtonProps {
    original: ExportMenuProps;
    bundled: ExportMenuProps;
}
export declare const ExportButton: React.FC<ExportButtonProps>;
export {};
