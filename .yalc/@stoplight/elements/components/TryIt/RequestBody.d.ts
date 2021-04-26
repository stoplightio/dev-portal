import { INodeExample, INodeExternalExample } from '@stoplight/types';
import * as React from 'react';
interface RequestBodyProps {
    examples: ReadonlyArray<INodeExample | INodeExternalExample>;
    requestBody: string;
    onChange: (newRequestBody: string) => void;
}
export declare const RequestBody: React.FC<RequestBodyProps>;
export {};
