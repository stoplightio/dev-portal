import { IHttpOperation } from '@stoplight/types';
import { ParameterSpec } from './parameter-utils';
export declare const useRequestParameters: (httpOperation: IHttpOperation) => {
    allParameters: ParameterSpec[];
    parameterValuesWithDefaults: {
        [k: string]: any;
    };
    updateParameterValue: (name: string, value: string) => void;
};
