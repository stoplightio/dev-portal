import * as React from 'react';
export interface ResponseState {
    status: number;
    bodyText?: string;
    contentType: string | null;
    blob?: Blob;
}
export interface ErrorState {
    error: Error;
}
declare type ContentType = 'image' | 'json' | 'xml' | 'text';
export declare function getResponseType(contentType: string): ContentType | undefined;
export declare const TryItResponse: React.FC<{
    response: ResponseState;
}>;
export declare const ResponseError: React.FC<{
    state: ErrorState;
}>;
export declare class NetworkError extends Error {
}
export {};
