import { RadioAriaProps } from '@react-aria/radio';
import { RadioProps } from '@react-types/radio';
import * as React from 'react';
import { HeightVals, IntentVals } from '../../enhancers';
import { RadioEnhancerProps } from './variants';
interface IRadioProps extends RadioAriaProps, RadioProps {
    variant?: Partial<RadioEnhancerProps>;
    name?: string;
    size?: HeightVals;
    isDisabled?: boolean;
    /** @deprecated prefer isDisabled */
    disabled?: boolean;
    intent?: IntentVals;
}
export declare const Radio: React.ForwardRefExoticComponent<IRadioProps & React.RefAttributes<HTMLInputElement>>;
export {};
