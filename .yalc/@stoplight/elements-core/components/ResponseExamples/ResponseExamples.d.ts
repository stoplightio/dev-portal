import { IHttpOperation } from '@stoplight/types';
export interface ResponseExamplesProps {
    httpOperation: IHttpOperation;
    responseStatusCode?: string;
    responseMediaType?: string;
}
export declare const ResponseExamples: ({ httpOperation, responseMediaType, responseStatusCode }: ResponseExamplesProps) => JSX.Element | null;
