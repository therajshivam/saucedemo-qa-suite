const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");

const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

When("user proceeds to checkout", () => {
  cartPage.clickCheckout();
});

When("user enters first name {string} last name {string} postal code {string}", (first, last, postal) => {
  checkoutPage.enterFirstName(first);
  checkoutPage.enterLastName(last);
  checkoutPage.enterPostalCode(postal);
});

When("user clicks continue", () => {
  checkoutPage.clickContinue();
});

Then("user should see order summary", () => {
  cy.get(".summary_info").should("be.visible");
});

When("user clicks finish", () => {
  checkoutPage.clickFinish();
});

Then("user should see order confirmation", () => {
  checkoutPage.getOrderConfirmation().should("contain", "Thank you");
});