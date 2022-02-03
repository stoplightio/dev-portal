import { IHttpParam } from '@stoplight/types';
import { JSONSchema7Definition } from 'json-schema';
export declare type ParameterSpec = Pick<IHttpParam, 'name' | 'examples' | 'schema' | 'required'>;
export declare function parameterOptions(parameter: ParameterSpec): ({
    value: string | number;
} | {
    label: string;
    value: string;
})[] | null;
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
export declare function mapSchemaPropertiesToParameters(properties: {
    [key: string]: JSONSchema7Definition;
}, required: string[] | undefined): {
    required?: boolean | undefined;
    name: string;
    schema: import("json-schema").JSONSchema7 | undefined;
    examples: {
        key: string;
        value: string | number | true | import("json-schema").JSONSchema7Object | import("json-schema").JSONSchema7Array;
    }[] | undefined;
}[];
