describe("Login page", () => {
  beforeEach(() => {
    /*
     * Visit Login Page
     */
  });

  describe("Login page happy path", () => {
    it("should display login form", () => {
      /*
       * given: user is not logged in
       * when: user navigates to base-url/login
       * then: login form with inputs for user name and password and submit button is displayed
       */
    });

    it("should login successfully with correct credentials", () => {
      /*
       * given: correct user credentials and user is not logged in
       * when: user types correct username and password in the input fields on the login page and submits (or hits enter)
       * then: redirect to landing page
       */
    });
  });

  describe("Login form validation", () => {
    it("should disable login submission when no username is provided", () => {
      /*
       * given: user is not logged in
       * when: user types password
       * then: submit button is disabled
       */
    });

    it("should disable login submission when no password is provided", () => {
      /*
       * given: user is not logged in
       * when: user types username (e2e-workshop@tngtech.com)
       * then: submit button is disabled
       */
    });

    it("should disable login submission when wrong username format is provided", () => {
      /*
       * given: user is not logged in
       * when: user types username e2e-workshop@tngtech and password
       * then: submit button is disabled
       */
    });
  });

  describe("Login credentials validation", () => {
    it("should display dialog when incorrect credentials are provided", () => {
      /*
       * given: incorrect user credentials and user is not logged in
       * when: user types incorrect username and password in the input fields on the login page and submits (or hits enter)
       * then: dialog informing the user that wrong credentials were used is displayed
       */
    });
  });

  describe("Route protection", () => {
    it("should redirect to login page from a valid subpage if user is not logged in", () => {
      /*
       * given: user is not logged in
       * when: user navigates to base-url/landing (or any other valid URL)
       * then: login form with inputs for user name and password and submit button is displayed
       */
    });

    it("should redirect to login page from an invalid subpage if user is not logged in", () => {
      /*
       * given: user is not logged in
       * when: user navigates to base-url/xyz (or any other invalid URL)
       * then: login form with inputs for user name and password and submit button is displayed
       */
    });
  });
});
