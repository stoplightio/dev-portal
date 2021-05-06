import { ViewMode } from '@stoplight/json-schema-viewer';
import { JSONSchema } from '../../types';
export interface ISchemaAndDescriptionProps {
    schema: JSONSchema;
    title?: string;
    description?: string;
    errors?: string[];
    className?: string;
    viewMode?: ViewMode;
}
export declare const SchemaAndDescription: ({ className, title, description, schema, errors, viewMode, }: ISchemaAndDescriptionProps) => JSX.Element;
