describe("Persons list page", () => {
  beforeEach(() => {
    /*
     * Visit Persons list Page
     */
  });

  describe("List view pagination", () => {
    it("should see a list of ten persons", () => {
      /*
       * given: user logs in
       * when: user visits the person list page
       * then: user sees a list of ten persons
       */
    });

    it("should be able to navigate through pages", () => {
      /*
       * given: authenticated user visits the person list page
       * when: user clicks the next page button
       * then: user sees a list of different persons than on the first page
       */
    });

    it("should be able to display more or less persons per page", () => {
      /*
       * given: authenticated user visits the person list page
       * when: user changes the items per page
       * then: user sees more or less persons displayed
       */
    });
  });

  describe("List view filtering", () => {
    it("should be able to filter displayed persons", () => {
      /*
       * given: authenticated user visits the person list page
       * when: user types into the filter for the login name
       * then: user sees only persons matching that filter
       */
    });
  });

  describe("Navigation", () => {
    it("should be able to navigate back to landing page", () => {
      /*
       * given: authenticated user visits the person list page
       * when: user opens the menu and clicks on the home button
       * then: user is redirected back to landing page
       */
    });
  });
});
