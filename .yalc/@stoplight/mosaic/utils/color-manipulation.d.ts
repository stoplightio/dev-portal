import chroma from 'chroma-js';
export declare type HslColor2 = {
    h: number;
    s: number;
    l: number;
    a?: number;
};
export declare const readableColor: (bg: chroma.Color, preferred: chroma.Color | string, fallback: chroma.Color | string) => chroma.Color;
