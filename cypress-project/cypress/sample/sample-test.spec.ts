/* requires base URL to be set to "https://docs.cypress.io" */

describe('Sample test with Cypress.io', () => {
  beforeEach(() => {
    cy.visit('/guides/overview/why-cypress.html#In-a-nutshell'); //visiting a page within the domain
  });

  it('Use the search box', () => {
    cy.get('div[id="docsearch"] button').click();
    cy.get('input[id="docsearch-input"]').type('Cypress'); //chaining
    cy.get('li[class="DocSearch-Hit"]').should('be.visible'); //asserting
  });

  it('Title of page should contain correct text', () => {
    cy.get('h1[class="main-content-title"]').contains('Why Cypress');
  });
});
