import type { Meta, StoryFn } from '@storybook/react';

import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [NewDesignDecorator];
