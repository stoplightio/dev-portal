import { IHttpOperationResponse } from '@stoplight/types';
interface ResponsesProps {
    responses: IHttpOperationResponse[];
    onMediaTypeChange(mediaType: string): void;
    onStatusCodeChange(statusCode: string): void;
}
export declare const Responses: {
    ({ responses: unsortedResponses, onStatusCodeChange, onMediaTypeChange }: ResponsesProps): JSX.Element | null;
    displayName: string;
};
export {};
