import { IServer } from '@stoplight/types';
import * as React from 'react';
interface ServerInfoProps {
    servers?: IServer[];
    mockUrl?: string;
}
export declare const ServerInfo: React.FC<ServerInfoProps>;
export {};
