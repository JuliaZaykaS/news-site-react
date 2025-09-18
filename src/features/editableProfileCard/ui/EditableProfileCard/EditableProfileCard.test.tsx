import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
// eslint-disable-next-line max-len
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileReducer } from '../../model/slices/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 33,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    //   avatar: avatar,
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            profile: profile,
            formData: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    test('режим рид онли должен переключиться ', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });
    test('при отмене значения должны обнуляться ', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.FirstName'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.LastName'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
    });
    test('должна появиться ошибка валидации', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });
    test('если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.FirstName'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
