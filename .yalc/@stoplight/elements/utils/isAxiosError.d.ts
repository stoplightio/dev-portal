import { AxiosError } from 'axios';
export declare function isAxiosError(e: Error & {
    isAxiosError?: boolean;
}): e is AxiosError;
