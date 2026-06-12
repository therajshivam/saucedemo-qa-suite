class ProductsPage {
  getProductItems() {
    return cy.get('.inventory_item')
  }
  addFirstItemToCart() {
    cy.get('.btn_inventory').first().click()
  }
  getCartCount() {
    return cy.get('.shopping_cart_badge')
  }
  openCart() {
    cy.get('.shopping_cart_link').click()
  }
  sortProducts(option) {
    cy.get('.product_sort_container').select(option)
  }
  getProductNames() {
    return cy.get('.inventory_item_name')
  }
  getProductPrices() {
    return cy.get('.inventory_item_price')
  }
}
module.exports = ProductsPage
