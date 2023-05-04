import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import avatar from "shared/assets/tests/example.png";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

// const Template: ComponentStory<typeof AboutPage> = (args) => (
const Template: ComponentStory<typeof ProfilePage> = (args: object) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      formData: {
        first: "Юлия",
        lastname: "Зай",
        age: 33,
        currency: Currency.EUR,
        country: Country.RUSSIA,
        city: "Moscow",
        username: "admin",
        avatar: avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      formData: {
        first: "Юлия",
        lastname: "Зай",
        age: 33,
        currency: Currency.EUR,
        country: Country.RUSSIA,
        city: "Moscow",
        username: "admin",
        avatar: avatar,
      },
    },
  }),
];
