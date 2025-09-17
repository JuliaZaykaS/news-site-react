

export const addComment = (text: string) => {
    cy.getByTestId("AddNewCommentForm.Input").type(text);
    cy.getByTestId("AddNewCommentForm.Button").click();
}


declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}