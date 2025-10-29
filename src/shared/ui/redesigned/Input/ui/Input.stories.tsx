import type { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import Arrow from '@/shared/assets/tests/arrow-bottom.svg';
import { Input } from './Input';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Input',
    component: Input,
    decorators: NewDesignDecorator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
    <Input {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};

export const AddonLeft = Template.bind({});
AddonLeft.args = {
    addonLeft: <Arrow />,
    placeholder: 'Type text',
};

export const AddonRight = Template.bind({});
AddonRight.args = {
    addonRight: <Arrow />,
    placeholder: 'Type text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Type text',
};
