import { Meta, Story } from '@storybook/react';
import * as React from 'react';
interface HelperReturn<P> {
    meta: Meta<P>;
    createStory(name: string, input: Partial<P>): Story<P>;
    createHoistedStory(input: Partial<P>): Story<P>;
}
export declare const createStoriesForDocsComponent: <P>(Component: React.ComponentType<P>) => HelperReturn<P>;
export {};
