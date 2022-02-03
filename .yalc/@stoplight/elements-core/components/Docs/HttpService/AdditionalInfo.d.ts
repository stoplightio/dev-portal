import { IHttpService } from '@stoplight/types';
import React from 'react';
interface AdditionalInfoProps {
    termsOfService?: string;
    contact?: IHttpService['contact'];
    license?: IHttpService['license'];
}
export declare const AdditionalInfo: React.FC<AdditionalInfoProps>;
export {};
