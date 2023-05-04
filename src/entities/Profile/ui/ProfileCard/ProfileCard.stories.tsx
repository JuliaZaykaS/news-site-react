import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ProfileCard } from "./ProfileCard";
import avatar from "shared/assets/tests/example.png";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  data: {
    first: "Юлия",
    lastname: "Зай",
    age: 33,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: "Moscow",
    username: "admin",
    avatar: avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: "true",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});

Dark.args = {
  data: {
    first: "Юлия",
    lastname: "Зай",
    age: 33,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: "Moscow",
    username: "admin",
    avatar: avatar,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
