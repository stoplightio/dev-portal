import { ICode } from '@stoplight/markdown/ast-types/smdast';
import { ICodeAnnotations, IComponentMappingProps } from '@stoplight/markdown-viewer';
import { IHttpOperation, IHttpRequest } from '@stoplight/types';
declare type PartialHttpRequest = Pick<IHttpRequest, 'method' | 'url'> & Partial<IHttpRequest>;
export declare const CodeComponent: (props: IComponentMappingProps<ICode<ICodeAnnotations>>) => JSX.Element | null;
export declare function parseHttpRequest(data: PartialHttpRequest): IHttpOperation;
export {};
