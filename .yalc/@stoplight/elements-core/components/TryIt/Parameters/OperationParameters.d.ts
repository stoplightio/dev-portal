import * as React from 'react';
import { ParameterSpec } from './parameter-utils';
interface OperationParametersProps<P extends keyof any = string> {
    parameters: readonly ParameterSpec[];
    values: Record<P, string>;
    onChangeValue: (parameterName: P, newValue: string) => void;
    validate?: boolean;
}
export declare const OperationParameters: React.FC<OperationParametersProps>;
export {};
