import { Meta, StoryFn } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = (
    args,
) => <NotificationItem {...args} />;
const baseNotification = {
    id: '1',
    title: 'Заголовок',
    description: 'текст текст текст',
};

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {
    item: baseNotification,
};

export const OldDesignWithHref = Template.bind({});
OldDesignWithHref.args = {
    item: {
        ...baseNotification,
        href: '#',
    },
};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {
    item: baseNotification,
};
NewDesignNormal.decorators = [NewDesignDecorator];

export const NewDesignWithHref = Template.bind({});
NewDesignWithHref.args = {
    item: {
        ...baseNotification,
        href: '#',
    },
};
NewDesignWithHref.decorators = [NewDesignDecorator];
