import { IMediaTypeContent } from '@stoplight/types';
import * as React from 'react';
export declare type BodyParameterValues = Record<string, string | File>;
export declare const isFormDataContent: (content: IMediaTypeContent) => boolean;
export declare function createRequestBody(mediaTypeContent: IMediaTypeContent | undefined, bodyParameterValues: BodyParameterValues | undefined): Promise<string | Blob | ArrayBuffer | ArrayBufferView | FormData | ReadableStream<Uint8Array> | undefined>;
export declare const useBodyParameterState: (mediaTypeContent: IMediaTypeContent | undefined) => readonly [BodyParameterValues, React.Dispatch<React.SetStateAction<BodyParameterValues>>, {
    readonly isFormDataBody: true;
    readonly bodySpecification: IMediaTypeContent;
}] | readonly [BodyParameterValues, React.Dispatch<React.SetStateAction<BodyParameterValues>>, {
    readonly isFormDataBody: false;
    readonly bodySpecification: undefined;
}];
