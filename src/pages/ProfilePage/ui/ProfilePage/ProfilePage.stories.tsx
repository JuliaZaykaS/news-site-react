import { ComponentStory, ComponentMeta } from "@storybook/react";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
// import avatar from "shared/assets/tests/example.png";
import ProfilePage from "./ProfilePage";
import { Profile } from "@/entities/Profile";
const avatar =
  "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg";

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

const profile: Profile = {
  first: "Юлия",
        lastname: "Зай",
        age: 33,
        currency: Currency.EUR,
        country: Country.RUSSIA,
        city: "Moscow",
        username: "admin",
        avatar: avatar,
}

export const Normal = Template.bind({});

Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      formData: profile,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      formData: profile,
    },
  }),
];
export const Orange = Template.bind({});
Orange.args = {};

Orange.decorators = [
  ThemeDecorator(Theme.ORANGE),
  StoreDecorator({
    profile: {
      formData: profile,
    },
  }),
];
