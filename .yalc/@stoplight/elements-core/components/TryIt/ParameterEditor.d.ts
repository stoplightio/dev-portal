import { SelectProps } from '@stoplight/mosaic';
import * as React from 'react';
import { ParameterSpec } from './parameter-utils';
interface ParameterProps {
    parameter: ParameterSpec;
    value?: string;
    onChange: SelectProps['onChange'];
}
export declare const ParameterEditor: React.FC<ParameterProps>;
export {};
