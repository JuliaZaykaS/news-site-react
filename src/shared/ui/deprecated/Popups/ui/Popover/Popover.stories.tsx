import type { Meta, StoryFn } from '@storybook/react';

import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    padding: 200,
                    width: '200px',
                    height: '200px',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => (
    <Popover {...args} />
);

const popoverContent = {
    trigger: <button>Click</button>,
    children: (
        <div style={{ width: '150px', height: '150px' }}>
            POPOVER
        </div>
    ),
};

export const Normal = Template.bind({});
Normal.args = {
    ...popoverContent,
};
export const Dark = Template.bind({});
Dark.args = {
    ...popoverContent,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    ...popoverContent,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const TopLeft = Template.bind({});
TopLeft.args = {
    ...popoverContent,
    direction: 'top-left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    ...popoverContent,
    direction: 'top-right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    ...popoverContent,
    direction: 'bottom-left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    ...popoverContent,
    direction: 'bottom-right',
};
