import { Meta, StoryFn } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Country/CountrySelect',
    component: CountrySelect,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 300 }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof CountrySelect>;

const Template: StoryFn<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const OldDesignPrimary = Template.bind({});
OldDesignPrimary.args = {};

export const NewDesignPrimary = Template.bind({});
NewDesignPrimary.args = {};
NewDesignPrimary.decorators = [NewDesignDecorator];
