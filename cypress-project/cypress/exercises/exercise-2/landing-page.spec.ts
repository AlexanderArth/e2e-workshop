describe("Landing page", () => {
  beforeEach(() => {
    /*
     * Visit Landing Page
     */
      cy.visit('/login');
      cy.get('input[data-cy="loginNameInput"]').type('e2e-workshop@tngtech.com');
      cy.get('input[data-cy="passwordInput"]').type('password');
      cy.get('button[data-cy="loginButton"]').click();
      // cy.url().should('include', '/landing');
  });

  describe("Button click navigation", () => {
    it("should redirect to login page if user clicks on logout button", () => {
      /*
       * given: user is logged in
       * when: user clicks on logout button
       * then: user is redirected to login page
       */
      cy.get('[data-cy=menuButton] > .mat-button-wrapper', {timeout: 5000}).click();
      cy.get('[data-cy=logoutButton]').click();
      cy.url().should('include', '/login');
    });

    it("should navigate to list of persons page", () => {
      /*
       * given: user is logged in
       * when: user clicks on button for list of persons
       * then: user is navigate to baseurl/list
       */
      cy.get('[data-cy=personListButton]').click();
      cy.url().should('include', '/list');
    });

    it.only("should navigate to create person page", () => {
      /*
       * given: user is logged in
       * when: user clicks on button for create person
       * then: user is navigate to baseurl/create
       */
      cy.get('[data-cy=createPersonButton]').click();
      cy.url().should('include', '/create');
    });
  });

  describe("Route protection", () => {
    it("should redirect to landing page on invalid URL if user is logged in", () => {
      /*
       * given: user is logged in
       * when: user navigates to base-url/xyz
       * then: user is redirected to landing page
       */
    });

    it("should redirect to landing page if navigating to login URL if user is logged in", () => {
      /*
       * given: user is logged in
       * when: user navigates to base-url/login
       * then: user is redirected to landing page
       */
    });
  });
});
