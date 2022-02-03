import { Request } from 'har-format';
import React from 'react';
export interface RequestSamplesProps {
    request: Request;
    embeddedInMd?: boolean;
}
export declare const RequestSamples: React.NamedExoticComponent<RequestSamplesProps>;
