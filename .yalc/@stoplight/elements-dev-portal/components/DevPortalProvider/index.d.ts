import * as React from 'react';
export declare type DevPortalProviderProps = {
    platformUrl?: string;
    platformAuthToken?: string;
};
export declare const PlatformContext: React.Context<DevPortalProviderProps>;
export declare const DevPortalProvider: React.FC<DevPortalProviderProps>;
