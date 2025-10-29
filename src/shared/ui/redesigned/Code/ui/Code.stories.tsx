import type { Meta, StoryFn } from '@storybook/react';

import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: NewDesignDecorator,
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => (
    <Code {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    textCode: `export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => <Code {...args} />;`,
};
