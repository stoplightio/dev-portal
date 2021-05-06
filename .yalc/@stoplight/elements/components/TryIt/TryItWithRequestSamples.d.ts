import * as React from 'react';
import { ResponseExamplesProps } from '../ResponseExamples/ResponseExamples';
import { TryItProps } from './TryIt';
export declare type TryItWithRequestSamplesProps = Omit<TryItProps, 'onRequestChange'> & ResponseExamplesProps;
export declare const TryItWithRequestSamples: React.FC<TryItWithRequestSamplesProps>;