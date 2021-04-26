import { IHttpParam } from '@stoplight/types';
import * as React from 'react';
declare type ParameterType = 'query' | 'header' | 'path' | 'cookie';
export interface ParametersProps {
    parameterType: ParameterType;
    parameters?: IHttpParam[];
}
export declare const Parameters: React.FunctionComponent<ParametersProps>;
export interface IParameterProps {
    parameter: IHttpParam;
    parameterType: ParameterType;
}
export declare const Parameter: React.FunctionComponent<IParameterProps>;
export {};
