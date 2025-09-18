describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('Статьи успешно подгружаются', () => {
        cy.getByTestId('ArticlesList').should('exist'); // список отрисовался
        cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3); // количество элементов в списке
    });

    it('На стабах (фикстурах)', () => {
        // Перехватываем только API-запросы, которые возвращают JSON
        cy.intercept('GET', '**/articles?*', { fixture: 'articles-list.json' });
        cy.getByTestId('ArticlesList').should('exist'); // список отрисовался
        cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3); // количество элементов в списке
    });
});
