import type { MDAST } from '@stoplight/markdown';
import * as React from 'react';
import { IComponentMapping } from '../types';
export declare const renderNodeChildren: (node: MDAST.Parent | MDAST.Node, components?: IComponentMapping, parentPath?: ReadonlyArray<string | number>) => React.ReactNode[];
