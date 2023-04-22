// Button.stories.ts|tsx

import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    tags: ['autodocs'],
    component: Button,
    argTypes: {
        icon: {
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        children: 'Hola, soy un botón',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Hola, soy un botón',
        variant: 'secondary',
    },
};

export const WithIcon: Story = {
    args: {
        children: 'Iniciar sesión con Google',
        variant: 'secondary',
        icon: 'google',
    },
};
