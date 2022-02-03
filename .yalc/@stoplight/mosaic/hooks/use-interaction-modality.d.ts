/**
 * This is an adaptation of react-aria modality global listeners that takes advantage of zustand for much better
 * downstream peformance.
 */
declare type Modality = 'keyboard' | 'pointer' | 'virtual';
export declare function useInteractionModality(): Modality;
export declare function getInteractionModality(): Modality;
export {};
