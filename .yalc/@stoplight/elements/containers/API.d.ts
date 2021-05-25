import { RoutingProps } from '@stoplight/elements-core';
import * as React from 'react';
export declare type APIProps = APIPropsWithDocument | APIPropsWithUrl;
export declare type APIPropsWithUrl = {
    apiDescriptionUrl: string;
} & CommonAPIProps;
export declare type APIPropsWithDocument = {
    apiDescriptionDocument: string | object;
    apiDescriptionUrl?: string;
} & CommonAPIProps;
export interface CommonAPIProps extends RoutingProps {
    layout?: 'sidebar' | 'stacked';
    logo?: string;
    hideTryIt?: boolean;
}
export declare const API: React.FC<APIProps>;
