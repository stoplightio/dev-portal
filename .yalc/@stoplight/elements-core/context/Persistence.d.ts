import * as React from 'react';
export declare const PersistenceContextProvider: ({ initialValues, scope, children, }: React.PropsWithChildren<{
    initialValues?: Iterable<readonly [import("jotai").Atom<unknown>, unknown]> | undefined;
    scope?: import("jotai/core/atom").Scope | undefined;
}>) => React.FunctionComponentElement<React.ProviderProps<import("jotai/core/contexts").ScopeContainer>>;
export declare function withPersistenceBoundary<T>(WrappedComponent: React.ComponentType<T>): React.FC<T>;
