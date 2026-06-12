const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ProductsPage = require("../pages/ProductsPage");

const productsPage = new ProductsPage();

Then("user should see 6 products", () => {
  productsPage.getProductItems().should("have.length", 6);
});

When("user sorts products by {string}", (option) => {
  productsPage.sortProducts(option);
});

Then("products should be sorted by price ascending", () => {
  productsPage.getProductPrices().then($prices => {
    const prices = [...$prices].map(el => parseFloat(el.innerText.replace("$", "")));
    expect(prices[0]).to.be.lessThan(prices[prices.length - 1]);
  });
});