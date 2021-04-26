import { IHttpOperationResponse } from '@stoplight/types';
export declare const HttpCodeColor: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
};
export interface ResponseProps {
    response: IHttpOperationResponse;
    onMediaTypeChange(mediaType: string): void;
}
export interface ResponsesProps {
    responses: IHttpOperationResponse[];
    onMediaTypeChange(mediaType: string): void;
    onStatusCodeChange(statusCode: string): void;
}
export declare const Responses: {
    ({ responses: unsortedResponses, onStatusCodeChange, onMediaTypeChange }: ResponsesProps): JSX.Element | null;
    displayName: string;
};
export declare const Response: {
    ({ response: { contents, headers, description }, onMediaTypeChange, }: ResponseProps): JSX.Element;
    displayName: string;
};
