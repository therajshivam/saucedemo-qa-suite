const LoginPage = require('../../pages/LoginPage')
const ProductsPage = require('../../pages/ProductsPage')

const loginPage = new LoginPage()
const productsPage = new ProductsPage()

describe('Product Module', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
  })

  it('TC-009 | Should display products on inventory page', () => {
    productsPage.getProductItems().should('have.length', 6)
  })

  it('TC-010 | Should display product name and price', () => {
    productsPage.getProductNames().first().should('be.visible')
    productsPage.getProductPrices().first().should('be.visible')
  })

  it('TC-011 | Should sort products by price low to high', () => {
    productsPage.sortProducts('lohi')
    productsPage.getProductPrices().then($prices => {
      const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
      expect(prices[0]).to.be.lessThan(prices[prices.length - 1])
    })
  })

  it('TC-012 | Should sort products by name A to Z', () => {
    productsPage.sortProducts('az')
    productsPage.getProductNames().first().should('contain', 'Sauce Labs Backpack')
  })

  it('TC-013 | Should open product detail page', () => {
    productsPage.getProductNames().first().click()
    cy.url().should('include', '/inventory-item')
    cy.get('.inventory_details_name').should('be.visible')
  })

  it('TC-014 | Should add product to cart from detail page', () => {
    productsPage.getProductNames().first().click()
    cy.get('.btn_inventory').click()
    productsPage.getCartCount().should('contain', '1')
  })

})