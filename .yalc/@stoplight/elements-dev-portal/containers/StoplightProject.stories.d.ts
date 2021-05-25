import { Story } from '@storybook/react';
import * as React from 'react';
import { StoplightProjectProps } from './StoplightProject';
declare const _default: {
    title: string;
    component: React.FC<StoplightProjectProps>;
    argTypes: {
        projectId: {
            table: {
                category: string;
            };
        };
        hideTryIt: {
            table: {
                category: string;
            };
        };
        hideMocking: {
            table: {
                category: string;
            };
        };
        basePath: {
            table: {
                category: string;
            };
        };
        router: {
            table: {
                category: string;
            };
        };
        platformUrl: {
            table: {
                category: string;
            };
        };
    };
    args: {
        router: string;
        platformUrl: string;
    };
};
export default _default;
export declare const Playground: Story<StoplightProjectProps>;
