import { Meta, StoryFn } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/Country/CountrySelect',
    component: CountrySelect,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        // Story => <div style={{ padding: 200 }}><Story /></div>
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

export const Primary = Template.bind({});
Primary.args = {};
