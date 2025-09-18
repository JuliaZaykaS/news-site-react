let profileId = '';
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login('testuser', '123').then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'Тест');
    });
    it('Редактирует профиль', () => {
        const newFirstName = 'Тест новый';
        const newLastName = 'Тестович новый';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.FirstName').should(
            'have.value',
            newFirstName,
        );
        cy.getByTestId('ProfileCard.LastName').should(
            'have.value',
            newLastName,
        );
    });
});
