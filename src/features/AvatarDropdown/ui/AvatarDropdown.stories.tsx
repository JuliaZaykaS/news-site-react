import { Meta, StoryFn } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ marginLeft: '90%' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof AvatarDropdown>;

const Template: StoryFn<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const OldDesignUser = Template.bind({});
OldDesignUser.args = {};
OldDesignUser.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1', roles: [UserRole.USER] },
        },
    }),
];

export const OldDesignAdmin = Template.bind({});
OldDesignAdmin.args = {};
OldDesignAdmin.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1', roles: [UserRole.ADMIN] },
        },
    }),
];

export const OldDesignNotAuth = Template.bind({});
OldDesignNotAuth.args = {};
OldDesignNotAuth.decorators = [StoreDecorator({})];

export const NewDesignUser = Template.bind({});
NewDesignUser.args = {};
NewDesignUser.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1', roles: [UserRole.USER] },
        },
    }),
    NewDesignDecorator,
];

export const NewDesignAdmin = Template.bind({});
NewDesignAdmin.args = {};
NewDesignAdmin.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1', roles: [UserRole.ADMIN] },
        },
    }),
    NewDesignDecorator,
];

export const NewDesignNotAuth = Template.bind({});
NewDesignNotAuth.args = {};
NewDesignNotAuth.decorators = [
    StoreDecorator({}),
    NewDesignDecorator,
];
