const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../pages/LoginPage");

const loginPage = new LoginPage();

Given("user is on the login page", () => {
  loginPage.visit();
});

When("user enters username {string} and password {string}", (username, password) => {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});

Then("user should be redirected to inventory page", () => {
  cy.url().should("include", "/inventory");
});

Then("user should see an error message", () => {
  loginPage.getErrorMessage().should("be.visible");
});

Then("user should see locked out error message", () => {
  loginPage.getErrorMessage().should("contain", "locked out");
});