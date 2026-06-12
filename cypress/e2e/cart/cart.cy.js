const LoginPage = require('../../pages/LoginPage')
const ProductsPage = require('../../pages/ProductsPage')
const CartPage = require('../../pages/CartPage')

const loginPage = new LoginPage()
const productsPage = new ProductsPage()
const cartPage = new CartPage()

describe('Cart Module', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
  })

  it('TC-015 | Should add single product to cart', () => {
    productsPage.addFirstItemToCart()
    productsPage.getCartCount().should('contain', '1')
  })

  it('TC-016 | Should add multiple products to cart', () => {
    cy.get('.btn_inventory').eq(0).click()
    cy.get('.btn_inventory').eq(1).click()
    productsPage.getCartCount().should('contain', '2')
  })

  it('TC-017 | Should remove product from cart', () => {
    productsPage.addFirstItemToCart()
    productsPage.openCart()
    cartPage.removeFirstItem()
    cartPage.getCartItems().should('have.length', 0)
  })

  it('TC-018 | Should show correct product in cart', () => {
    productsPage.addFirstItemToCart()
    productsPage.openCart()
    cartPage.getCartItems().should('have.length', 1)
  })

  it('TC-019 | Should continue shopping from cart', () => {
    productsPage.addFirstItemToCart()
    productsPage.openCart()
    cartPage.continueShopping()
    cy.url().should('include', '/inventory')
  })

  it('TC-020 | Should cart be empty initially', () => {
    productsPage.openCart()
    cy.get('.cart_item').should('not.exist')
  })

})