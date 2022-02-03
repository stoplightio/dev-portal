import * as Sampler from '@stoplight/json-schema-sampler';
import { IMediaTypeContent } from '@stoplight/types';
import { JSONSchema7 } from 'json-schema';
declare type Example = {
    label: string;
    data: string;
};
export declare type GenerateExampleFromMediaTypeContentOptions = Sampler.Options;
export declare const useGenerateExampleFromMediaTypeContent: (mediaTypeContent: IMediaTypeContent | undefined, chosenExampleIndex?: number | undefined, { skipReadOnly, skipWriteOnly, skipNonRequired }?: GenerateExampleFromMediaTypeContentOptions) => string;
export declare const generateExampleFromMediaTypeContent: (mediaTypeContent: IMediaTypeContent | undefined, document: any, chosenExampleIndex?: number, options?: Sampler.Options | undefined) => string;
export declare const generateExamplesFromJsonSchema: (schema: JSONSchema7) => Example[];
export declare const exceedsSize: (example: string, size?: number) => boolean;
export {};
