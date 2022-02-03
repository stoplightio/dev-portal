import { Story } from '@storybook/react';
declare const _default: {
    title: string;
    component: ({ nodeSlug, projectId, branchSlug, }: {
        nodeSlug: string;
        projectId: string;
        branchSlug?: string | undefined;
    }) => JSX.Element;
    argTypes: {
        nodeSlug: {
            table: {
                category: string;
            };
        };
        projectId: {
            table: {
                category: string;
            };
        };
        branchSlug: {
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
        nodeSlug: string;
        projectId: string;
        branchSlug: string;
        platformUrl: string;
    };
};
export default _default;
export declare const Playground: Story<{
    nodeSlug: string;
    projectId: string;
    branchSlug?: string;
}>;
