const LoginPage = require('../../pages/LoginPage')
const ProductsPage = require('../../pages/ProductsPage')
const CartPage = require('../../pages/CartPage')
const CheckoutPage = require('../../pages/CheckoutPage')

const loginPage = new LoginPage()
const productsPage = new ProductsPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

describe('Checkout Module', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
    productsPage.addFirstItemToCart()
    productsPage.openCart()
    cartPage.clickCheckout()
  })

  it('TC-021 | Should complete checkout successfully', () => {
    checkoutPage.enterFirstName('Shivam')
    checkoutPage.enterLastName('Raj')
    checkoutPage.enterPostalCode('160001')
    checkoutPage.clickContinue()
    checkoutPage.clickFinish()
    checkoutPage.getOrderConfirmation().should('contain', 'Thank you')
  })

  it('TC-022 | Should show error with empty first name', () => {
    checkoutPage.enterLastName('Raj')
    checkoutPage.enterPostalCode('160001')
    checkoutPage.clickContinue()
    checkoutPage.getErrorMessage().should('contain', 'First Name is required')
  })

  it('TC-023 | Should show error with empty last name', () => {
    checkoutPage.enterFirstName('Shivam')
    checkoutPage.enterPostalCode('160001')
    checkoutPage.clickContinue()
    checkoutPage.getErrorMessage().should('contain', 'Last Name is required')
  })

  it('TC-024 | Should show error with empty postal code', () => {
    checkoutPage.enterFirstName('Shivam')
    checkoutPage.enterLastName('Raj')
    checkoutPage.clickContinue()
    checkoutPage.getErrorMessage().should('contain', 'Postal Code is required')
  })

  it('TC-025 | Should display order summary before finishing', () => {
    checkoutPage.enterFirstName('Shivam')
    checkoutPage.enterLastName('Raj')
    checkoutPage.enterPostalCode('160001')
    checkoutPage.clickContinue()
    cy.get('.summary_info').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')
  })

  it('TC-026 | Should show correct item in order summary', () => {
    checkoutPage.enterFirstName('Shivam')
    checkoutPage.enterLastName('Raj')
    checkoutPage.enterPostalCode('160001')
    checkoutPage.clickContinue()
    cy.get('.cart_item').should('have.length', 1)
  })

})
