class CartPage {
  getCartItems() {
    return cy.get('.cart_item')
  }
  removeFirstItem() {
    cy.get('.cart_button').first().click()
  }
  clickCheckout() {
    cy.get('#checkout').click()
  }
  continueShopping() {
    cy.get('#continue-shopping').click()
  }
}
module.exports = CartPage