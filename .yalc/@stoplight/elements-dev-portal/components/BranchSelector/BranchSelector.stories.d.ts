import { Story } from '@storybook/react';
declare const _default: {
    title: string;
    component: ({ projectId }: {
        projectId: string;
    }) => JSX.Element;
    argTypes: {
        projectId: {
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
        projectId: string;
        platformUrl: string;
    };
};
export default _default;
export declare const Playground: Story<{
    nodeSlug: string;
    projectId: string;
    branchSlug?: string;
}>;
