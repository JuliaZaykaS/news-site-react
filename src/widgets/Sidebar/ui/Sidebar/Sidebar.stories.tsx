import type { Decorator, Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

const NewDesignWrapperDecorator: Decorator = (Story) => (
    <div style={{ height: '500px' }}>
        <Story />
    </div>
)

export const OldDesignLight = Template.bind({});
OldDesignLight.args = {};
OldDesignLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
];

export const OldDesignDark = Template.bind({});
OldDesignDark.args = {};
OldDesignDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];

export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = {};
OldDesignOrange.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({ user: { authData: {} } }),
];

export const OldDesignNoAuth = Template.bind({});
OldDesignNoAuth.args = {};
OldDesignNoAuth.decorators = [StoreDecorator({ user: {} })];

export const NewDesign = Template.bind({});
NewDesign.args = {};
NewDesign.decorators = [
    StoreDecorator({ user: { authData: {} } }),
    NewDesignWrapperDecorator,
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const NewDesignNoAuth = Template.bind({});
NewDesignNoAuth.args = {};
NewDesignNoAuth.decorators = [
    StoreDecorator({ user: {} }),
    NewDesignWrapperDecorator,
    NewDesignDecorator,
];