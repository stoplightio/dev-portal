export declare type ReferenceInfo = {
    source: string | null;
    pointer: string | null;
};
export declare type ReferenceResolver = (ref: ReferenceInfo, propertyPath: string[] | null, currentObject: object) => any;
export declare const defaultResolver: (contextObject: object) => ReferenceResolver;
