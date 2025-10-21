/* eslint-disable juliaz/layer-imports */
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Profile } from "@/entities/Profile";
import avatar from "@/shared/assets/tests/example.png";

export const profile: Profile = {
    id: '1',
    first: 'Юлия',
    lastname: 'Зай',
    age: 33,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    avatar: avatar,
};