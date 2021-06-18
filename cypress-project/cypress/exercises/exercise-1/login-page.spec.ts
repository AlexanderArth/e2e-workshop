describe("Login page", () => {
  beforeEach(() => {
    /*
     * Visit Login Page
     */
    cy.visit('/login');
  });

  describe("Login page happy path", () => {
    it("should display login form", () => {
      /*
       * given: user is not logged in
       * when: user navigates to base-url/login
       * then: login form with inputs for user name and password and submit button is displayed
       */
      cy.url().should('include', '/login');
      cy.get('[data-cy="loginNameInput"]').should('be.visible');
      cy.get('[data-cy="passwordInput"]').should('be.visible');
    });
    
    it("should login successfully with correct credentials", () => {
      /*
      * given: correct user credentials and user is not logged in
      * when: user types correct username and password in the input fields on the login page and submits (or hits enter)
      * then: redirect to landing page
      */
      cy.get('input[data-cy="loginNameInput"]').type('e2e-workshop@tngtech.com');
      cy.get('input[data-cy="passwordInput"]').type('password');
      cy.get('button[data-cy="loginButton"]').click();
      cy.url().should('include', '/landing');
    });
  });
  
  describe("Login form validation", () => {
    it("should disable login submission when no username is provided", () => {
      /*
      * given: user is not logged in
      * when: user types password
      * then: submit button is disabled
      */
     cy.get('[data-cy="passwordInput"]').type('password');
     cy.get('[data-cy="loginButton"]').should('be.disabled');
    });

    it("should disable login submission when no password is provided", () => {
      /*
       * given: user is not logged in
       * when: user types username (e2e-workshop@tngtech.com)
       * then: submit button is disabled
       */
      cy.get('#mat-input-0').type('e2e-workshop@tngtech.com');
      cy.findByRole('button', { name: /Login/i }).should('be.disabled');
    });

    it("should disable login submission when wrong username format is provided", () => {
      /*
       * given: user is not logged in
       * when: user types username e2e-workshop@tngtech and password
       * then: submit button is disabled
       */
      cy.get('input[data-cy="loginNameInput"]').type('notanemail');
      cy.get('input[data-cy="passwordInput"]').type('password');
      cy.get('button[data-cy="loginButton"]').should('be.disabled');
    });
  });

  describe("Login credentials validation", () => {
    it("should display dialog when incorrect credentials are provided", () => {
      /*
       * given: incorrect user credentials and user is not logged in
       * when: user types incorrect username and password in the input fields on the login page and submits (or hits enter)
       * then: dialog informing the user that wrong credentials were used is displayed
       */
      cy.get('[data-cy="loginNameInput"]').type('e2e-workshop@tngtech.com');
      cy.get('[data-cy="passwordInput"]').type('wrong-password');
      cy.get('[data-cy="loginButton"]').click();
      cy.get('[data-cy=errorDialog]').should('be.visible');
    });

  });

});

describe("Landing page", () => {
  beforeEach(() => {
    /*
    * Visit Login Page
    */
   cy.visit('/landing');
  });
  
  describe("Route protection", () => {
    it("should redirect to login page from a valid subpage if user is not logged in", () => {
      /*
       * given: user is not logged in
       * when: user navigates to base-url/landing (or any other valid URL)
       * then: login form with inputs for user name and password and submit button is displayed
       */
      cy.url().should('include', '/login');
    });
  });

});

describe("Wrong page", () => {
  beforeEach(() => {
    /*
    * Visit not valid page
    */
   cy.visit('/wrongpage');
  });

  describe("Route protection", () => {
    it("should redirect to login page from an invalid subpage if user is not logged in", () => {
      /*
       * given: user is not logged in
       * when: user navigates to base-url/xyz (or any other invalid URL)
       * then: login form with inputs for user name and password and submit button is displayed
       */
      cy.url().should('include', '/login');
    });
  });

});
