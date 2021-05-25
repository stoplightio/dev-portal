import { HttpSecurityScheme } from '@stoplight/types';
interface ISecuritiesProps {
    securities?: HttpSecurityScheme[];
    className?: string;
    title?: string;
}
export declare const HttpSecuritySchemes: {
    ({ securities, title, className }: ISecuritiesProps): JSX.Element | null;
    displayName: string;
};
export {};
