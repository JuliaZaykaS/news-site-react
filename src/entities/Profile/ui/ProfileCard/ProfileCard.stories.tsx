
import { ComponentStory, ComponentMeta } from "@storybook/react";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";


// import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ProfileCard } from "./ProfileCard";
import { Profile } from "../../model/types/profile";
import { Theme } from "@/shared/const/theme";
// import avatar from "shared/assets/tests/example.png";
// const avatar = "static/media/src/shared/assets/tests/example.png";
const avatar =
  "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg";

export default {
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});

const profile: Profile = {
   first: "Юлия",
    lastname: "Зай",
    age: 33,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: "Moscow",
    username: "admin",
    avatar: avatar,
}

Primary.args = {
  data: profile,
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
  data: profile,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});

Orange.args = {
  data: profile,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
