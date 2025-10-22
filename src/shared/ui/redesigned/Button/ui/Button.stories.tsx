import { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import Arrow from '@/shared/assets/tests/arrow-bottom.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Button',
    component: Button,
    decorators: NewDesignDecorator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
    <Button {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled',
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};
export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    variant: 'outline',
    size: 'm',
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};
export const NormalColor = Template.bind({});
NormalColor.args = {
    children: 'Text',
    variant: 'outline',
    color: 'normal',
};

export const SuccessColor = Template.bind({});
SuccessColor.args = {
    children: 'Text',
    variant: 'outline',
    color: 'success',
};

export const ErrorColor = Template.bind({});
ErrorColor.args = {
    children: 'Text',
    variant: 'outline',
    color: 'error',
};
export const AddonLeft = Template.bind({});
AddonLeft.args = {
    children: 'Text',
    variant: 'outline',
    addonLeft: <Arrow />,
};

export const AddonRight = Template.bind({});
AddonRight.args = {
    children: 'Text',
    variant: 'outline',
    addonRight: <Arrow />,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'outline',
    disabled: true,
};
