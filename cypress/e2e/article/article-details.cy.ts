import { Article } from '@/entities/Article';

let currentArticleId = '';
let currentUser = '';
let currentArticle: Article;

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login().then((user) => {
            currentUser = user.id;
        });
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            currentArticle = article;
            cy.visit(`articles/${article.id}`);
        });

        cy.createArticleStore(currentArticle);
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    // Создали статью - протестировали все, что нужно - удалили статью
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should(
            'exist',
        );
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should(
            'exist',
        );
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info'); // открыли страницу
        cy.getByTestId(
            'AddNewCommentForm',
        ).scrollIntoView(); // скролл до места с комментариями
        cy.addComment('text'); // добавили комментарий
        cy.getByTestId('CommentCard.Content').should(
            'have.length',
            1,
        ); // проверка, что комментарий не задублировался
    });

    it('И ставит оценку статье', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        }); // имитация запроса на бекенд
        cy.getByTestId('ArticleDetails.Info'); // открыли страницу
        cy.getByTestId('RatingCard').scrollIntoView(); // скролл до места с комментариями
        cy.setRate(4, 'feedback'); // добавили комментарий
        cy.get('[data-selected=true]').should(
            'have.length',
            4,
        );
    });
});
