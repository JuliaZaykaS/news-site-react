import type { Meta, StoryFn } from '@storybook/react';

import { Overlay } from './Overlay';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Overlay',
    component: Overlay,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: NewDesignDecorator,
} as Meta<typeof Overlay>;

const Template: StoryFn<typeof Overlay> = (args) => <Overlay {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
