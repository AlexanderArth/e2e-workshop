describe("Create person page", () => {
  beforeEach(() => {
    /*
     * Visit create person list Page
     */
  });

  describe("Person creation", () => {
    it("should see first page of person creation form", () => {
      /*
       * given: user logs in
       * when: user goes to the create person page
       * then: user sees input fields for first name, last name & login name and disabled next & create buttons
       */
    });

    it("should be able to abort creation", () => {
      /*
       * given: authenticated user visits create person page
       * when: user clicks cancel button
       * then: user is back to the list page
       */
    });

    it("should be able to create a new person", () => {
      /*
       * given: authenticated user visits create person page
       * when: user types in valid input in all form fields on both pages of the form and clicks create
       * then: user is back to the list page and can find the newly created person
       */
    });
  });

  describe("Person deletion", () => {
    it("should be able to abort deletion of a person", () => {
      /*
       * given: authenticated user visits person list page
       * when: user searches for the person which was created in an earlier test and presses the according delete button and aborts
       * then: the person is not removed from the list
       */
    });

    it("should be able to delete a person", () => {
      /*
       * given: authenticated user visits person list page
       * when: user searches for the person which was created in an earlier test and presses the according delete button and confirms
       * then: the person is removed from the list
       */
    });
  });

  describe("Form validation", () => {
    it("must enter valid first, last and login name", () => {
      /*
       * given: authenticated user visits create person page
       * when: user types in valid input in all form fields on first page of the form
       * then: only after all fields contain valid input the next button is clickable. The create button is disabled.
       * when: user clicks next and then back button
       * then: user is back to the first page of the form
       */
    });

    it("must enter valid age and address", () => {
      /*
       * given: authenticated user visits create person page and goes to the second page of the form
       * when: user types in valid input in all form fields on second page of the form
       * then: only after all fields contain valid input the create button is clickable
       */
    });
  });
});
