// Input.stories.ts|tsx

import { Input } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Input',
    tags: ['autodocs'],
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        name: 'email',
        label: 'Correo electrónico',
    },
};
