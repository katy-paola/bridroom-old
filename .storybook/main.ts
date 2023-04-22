import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation',
    },
    webpackFinal: async (config, { configType }) => {
        if (!config.resolve) return config;
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, '../src/components'),
        };

        return config;
    },
};
export default config;
