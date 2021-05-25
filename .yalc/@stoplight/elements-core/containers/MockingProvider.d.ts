import * as React from 'react';
export declare const MockingContext: React.Context<{
    mockUrl?: string | undefined;
    hideMocking?: boolean | undefined;
}>;
export declare const MockingProvider: React.FC<{
    mockUrl?: string;
    hideMocking?: boolean;
}>;
