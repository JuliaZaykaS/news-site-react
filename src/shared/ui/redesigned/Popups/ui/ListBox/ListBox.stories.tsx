import type { Meta, StoryFn } from '@storybook/react';

import { ListBox, ListBoxItem } from './ListBox';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

const items: ListBoxItem<string>[] = [
    { value: 'RUB', content: 'RUB', disabled: false },
    { value: 'EUR', content: 'EUR', disabled: false },
    { value: 'USD', content: 'USD', disabled: false },
];

export const Normal = Template.bind({});
Normal.args = {
    items: items,
    defaultValue: 'Валюта',
};

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
    items: items,
    defaultValue: 'Валюта',
    direction: 'top-right',
};

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
    items: items,
    defaultValue: 'Валюта',
    direction: 'top-left',
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
    items: items,
    defaultValue: 'Валюта',
    direction: 'bottom-left',
};

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
    items: items,
    defaultValue: 'Валюта',
    direction: 'bottom-right',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    items: items,
    defaultValue: 'Валюта',
    label: 'Укажите валюту',
};

export const Readonly = Template.bind({});
Readonly.args = {
    items: items,
    defaultValue: 'Валюта',
    readonly: true,
};
