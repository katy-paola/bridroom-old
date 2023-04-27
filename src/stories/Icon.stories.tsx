// Icon.stories.ts|tsx

import { Icon } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Icon',
    tags: ['autodocs'],
    component: Icon,
    argTypes: {
        name: {
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        name: 'google',
    },
};

export const WithSize: Story = {
    args: {
        name: 'google',
        size: 'xl',
    },
};
