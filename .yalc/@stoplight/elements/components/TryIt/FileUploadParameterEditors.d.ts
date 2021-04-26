import * as React from 'react';
import { ParameterSpec } from './parameter-utils';
interface FileUploadParameterEditorProps {
    parameter: ParameterSpec;
    value?: File;
    onChange: (parameterValue: File | undefined) => void;
}
export declare const FileUploadParameterEditor: React.FC<FileUploadParameterEditorProps>;
export {};
