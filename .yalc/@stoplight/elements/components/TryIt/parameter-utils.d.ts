import { IHttpParam } from '@stoplight/types';
export declare type ParameterSpec = Pick<IHttpParam, 'name' | 'examples' | 'schema' | 'required'>;
export declare function parameterOptions(parameter: ParameterSpec): {
    value: string | number;
}[] | null;
export declare const selectExampleOption: {
    value: string;
    label: string;
};
export declare function exampleOptions(parameter: ParameterSpec): {
    value: string;
    label: string;
}[] | null;
export declare function parameterSupportsFileUpload(parameter: Pick<ParameterSpec, 'schema'>): boolean;
export declare function getPlaceholderForParameter(parameter: ParameterSpec): string;
export declare const initialParameterValues: (params: readonly ParameterSpec[]) => Record<string, string>;
