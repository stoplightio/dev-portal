import { Story } from '@storybook/react';
declare type SearchWrapperProps = {
    projectIds: string[];
    workspaceId: string;
};
declare const _default: {
    title: string;
    component: ({ projectIds, workspaceId }: SearchWrapperProps) => JSX.Element;
    argTypes: {
        workspaceId: {
            table: {
                category: string;
            };
        };
        projectIds: {
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
        projectIds: string[];
        workspaceId: string;
        platformUrl: string;
    };
};
export default _default;
export declare const Playground: Story<SearchWrapperProps>;
