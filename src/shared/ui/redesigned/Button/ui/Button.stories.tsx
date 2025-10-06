// import React from "react";
import { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonSize } from './Button';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/variant';

export default {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
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


// export const BackgroundTheme = Template.bind({});
// BackgroundTheme.args = {
//     children: 'Text',
//     variant: ButtonTheme.BACKGROUND,
// };
// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//     children: 'Text',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
// };
// export const Square = Template.bind({});
// Square.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND,
//     square: true,
// };
// export const SquareSizeM = Template.bind({});
// SquareSizeM.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.M,
// };
// export const SquareSizeL = Template.bind({});
// SquareSizeL.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.L,
// };
// export const SquareSizeXL = Template.bind({});
// SquareSizeXL.args = {
//     children: '>',
//     variant: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.XL,
// };

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'outline',
    disabled: true,
};
