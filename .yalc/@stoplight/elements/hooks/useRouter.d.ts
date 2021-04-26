import * as React from 'react';
declare type RouterType = 'history' | 'memory' | 'hash';
export declare const useRouter: (router: RouterType, basePath: string) => {
    Router: React.ComponentType<{}>;
    routerProps: {
        basename?: string | undefined;
    };
};
export {};
