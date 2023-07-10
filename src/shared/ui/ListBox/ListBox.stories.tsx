import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox, ListBoxItem } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
   title: 'shared/ListBox',
   component: ListBox,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [
Story=> <div style={{padding: 200}}><Story/></div>
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
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта"
};


export const Dark = Template.bind({});
Dark.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({});
Orange.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта"
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта",

   direction: "top-right",
};

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта",

   direction: "top-left",
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта",
   direction: "bottom-left",
};

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта",
   direction: "bottom-right",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта",
   label: "Укажите валюту",

};

export const Readonly = Template.bind({});
Readonly.args = {
   items: [
      { value: 'RUB', content: "RUB", disabled: false },
      { value: 'EUR', content: 'EUR', disabled: false },
      { value: 'USD', content: 'USD', disabled: false },

   ],
   defaultValue: "Валюта",
   readonly: true,

};


