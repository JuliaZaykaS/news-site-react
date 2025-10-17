import type { Meta } from '@storybook/react';
import { Tabs } from './Tabs';
// import { action } from "storybook/actions";
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'shared/deprecated/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Tabs>;

export default meta;

// type Story = StoryFn<typeof Tabs>;

export const Normal = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1',
            },
            {
                value: 'tab 2',
                content: 'tab 2',
            },
            {
                value: 'tab 3',
                content: 'tab 3',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};
