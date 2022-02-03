import { IHttpParam } from '@stoplight/types';
import * as React from 'react';
declare type ParameterType = 'query' | 'header' | 'path' | 'cookie';
interface ParametersProps {
    parameterType: ParameterType;
    parameters?: IHttpParam[];
}
export declare const Parameters: React.FunctionComponent<ParametersProps>;
export {};
