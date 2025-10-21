import { Meta, StoryFn } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Currency/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const OldDesignPrimary = Template.bind({});
OldDesignPrimary.args = {};

export const NewDesignPrimary = Template.bind({});
NewDesignPrimary.args = {};
NewDesignPrimary.decorators = [NewDesignDecorator];
