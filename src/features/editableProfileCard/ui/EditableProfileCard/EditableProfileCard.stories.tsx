import { Meta, StoryFn } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof EditableProfileCard>;

const Template: StoryFn<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [NewDesignDecorator];
