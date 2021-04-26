import { Story } from '@storybook/react';
import * as React from 'react';
import { StoplightProjectProps } from './StoplightProject';
declare const _default: {
    title: string;
    component: React.FC<StoplightProjectProps>;
    argTypes: {
        workspaceSlug: {
            table: {
                category: string;
            };
        };
        projectSlug: {
            table: {
                category: string;
            };
        };
        branchSlug: {
            table: {
                category: string;
            };
        };
        authToken: {
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
    };
};
export default _default;
export declare const Playground: Story<StoplightProjectProps>;
export declare const PublicApis: Story<StoplightProjectProps>;
