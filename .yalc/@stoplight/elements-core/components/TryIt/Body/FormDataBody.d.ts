import { IMediaTypeContent } from '@stoplight/types';
import * as React from 'react';
import { BodyParameterValues } from './request-body-utils';
interface FormDataBodyProps {
    specification: IMediaTypeContent;
    values: BodyParameterValues;
    onChangeValues: (newValues: BodyParameterValues) => void;
}
export declare const FormDataBody: React.FC<FormDataBodyProps>;
export {};
