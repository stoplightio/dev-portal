/// <reference types="react" />
export declare type MosaicContextProps = {
    componentOverrides: {
        Link?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
        Image?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
    };
};
export declare const defaultMosaicContext: MosaicContextProps;
export declare type InternalMosaicContextProps = {
    providerId?: string;
    providerRef?: React.RefObject<HTMLDivElement>;
} & MosaicContextProps;
export declare const MosaicContext: import("react").Context<InternalMosaicContextProps>;
export declare const useMosaicContext: () => InternalMosaicContextProps;
