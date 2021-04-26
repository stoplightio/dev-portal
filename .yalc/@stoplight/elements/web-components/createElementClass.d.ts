import * as React from 'react';
declare type TypeNameMap<T> = T extends string ? 'string' : T extends number ? 'number' : T extends boolean ? 'boolean' : T extends undefined ? 'undefined' : T extends Function ? 'function' : 'object';
declare type PropDescriptor<T> = {
    type: TypeNameMap<T>;
} & (T extends undefined ? {
    defaultValue?: undefined;
} : {
    defaultValue: T;
});
declare type PropDescriptorMap<P> = {
    [K in keyof P]: PropDescriptor<P[K]>;
};
export declare const createElementClass: <P>(Component: React.ComponentType<P>, propDescriptors: PropDescriptorMap<P>) => new () => HTMLElement;
export {};
