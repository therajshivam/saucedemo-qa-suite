const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../pages/LoginPage");
const ProductsPage = require("../pages/ProductsPage");
const CartPage = require("../pages/CartPage");

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

Given("user is logged in", () => {
  loginPage.visit();
  loginPage.enterUsername("standard_user");
  loginPage.enterPassword("secret_sauce");
  loginPage.clickLogin();
});

When("user adds first product to cart", () => {
  productsPage.addFirstItemToCart();
});

Then("cart count should show 1", () => {
  productsPage.getCartCount().should("contain", "1");
});

When("user opens the cart", () => {
  productsPage.openCart();
});

When("user removes the product", () => {
  cartPage.removeFirstItem();
});

Then("cart should be empty", () => {
  cartPage.getCartItems().should("have.length", 0);
});