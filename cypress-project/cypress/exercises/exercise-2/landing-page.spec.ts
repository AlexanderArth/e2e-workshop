describe("Landing page", () => {
  beforeEach(() => {
    /*
     * Visit Landing Page
     */
  });

  describe("Button click navigation", () => {
    it("should redirect to login page if user clicks on logout button", () => {
      /*
       * given: user is logged in
       * when: user clicks on logout button
       * then: user is redirected to login page
       */
    });

    it("should navigate to list of persons page", () => {
      /*
       * given: user is logged in
       * when: user clicks on button for list of persons
       * then: user is navigate to baseurl/list
       */
    });

    it("should navigate to create person page", () => {
      /*
       * given: user is logged in
       * when: user clicks on button for create person
       * then: user is navigate to baseurl/create
       */
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
