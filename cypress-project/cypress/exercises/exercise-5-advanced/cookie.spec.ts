describe("Login page", () => {
  beforeEach(() => {
    /*
     * visit login page
     * clear cookies
     */
  });

  it("should not have login cookie by default", () => {
    /*
     * given: user visits the log in page
     * when: user looks into the cookies of his browser
     * then: user does not find a cookie named 'e2e-workshop-login'
     */
  });

  it("should redirect to landing page with valid cookie when correct credentials are provided'", () => {
    /*
     * given: correct user credentials (e2e-workshop@tngtech.com, password) and user is not logged in
     * when: user types username and password in the input fields on the login page and submits (or hits enter)
     * then: user is redirected to landing page and sees buttons to access the user list and to create a user, cookie is stored
     */
  });

  it("should not set cookie when incorrect credentials are provided'", () => {
    /*
     * given: incorrect user credentials and user is not logged in
     * when: user types username and password in the input fields on the login page and submits (or hits enter)
     * then: user is still on login page, cookie is not stored
     */
  });
});

describe("Logging out", () => {
  beforeEach(() => {});

  it("should delete login cookie", () => {
    /*
     * given: user is logged in on any page
     * when: user presses the logout button
     * then: login cookie is deleted
     */
  });
});
