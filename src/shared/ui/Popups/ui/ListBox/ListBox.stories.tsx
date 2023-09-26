import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox, ListBoxItem } from './ListBox';

export default {
   title: 'shared/ListBox',
   component: ListBox,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [
      // Story => <div style={{ padding: 200 }}><Story /></div>
      (StoryComponent: Story) => <div style={{ padding: 200 }}><StoryComponent /></div>
   ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items: ListBoxItem[] = [
   { value: 'RUB', content: "RUB", disabled: false },
   { value: 'EUR', content: 'EUR', disabled: false },
   { value: 'USD', content: 'USD', disabled: false },

]

export const Normal = Template.bind({});
Normal.args = {
   items:items,
   defaultValue: "Валюта"
};


export const Dark = Template.bind({});
Dark.args = {
   items: items,
   defaultValue: "Валюта"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({});
Orange.args = {
   items: items,
   defaultValue: "Валюта"
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
   items: items,
   defaultValue: "Валюта",

   direction: "top-right",
};

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
   items: items,
   defaultValue: "Валюта",

   direction: "top-left",
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
   items: items,
   defaultValue: "Валюта",
   direction: "bottom-left",
};

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
   items: items,
   defaultValue: "Валюта",
   direction: "bottom-right",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
   items: items,
   defaultValue: "Валюта",
   label: "Укажите валюту",

};

export const Readonly = Template.bind({});
Readonly.args = {
   items: items,
   defaultValue: "Валюта",
   readonly: true,

};


