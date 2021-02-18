declare type DefaultPseudoProps = 'sm' | 'md' | 'first' | 'last' | 'odd' | 'even' | 'hover' | 'focus' | 'active' | 'visited' | 'groupHover' | 'groupFocus' | 'disabled';
export declare type Pseudo<T, P extends DefaultPseudoProps> = {
    [key in P | 'default']?: T;
};
export declare const computePseudoClasses: (prop: string, val: boolean | string | number | Pseudo<unknown, DefaultPseudoProps>) => string;
export {};
