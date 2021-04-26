import { IHttpOperationRequestBody } from '@stoplight/types';
export interface BodyProps {
    body: IHttpOperationRequestBody;
    onChange: (requestBodyIndex: number) => void;
}
export declare const Body: {
    ({ body: { contents, description }, onChange }: BodyProps): JSX.Element | null;
    displayName: string;
};
