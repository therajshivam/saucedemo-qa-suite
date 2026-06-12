class CheckoutPage {
  enterFirstName(name) {
    cy.get('#first-name').clear().type(name)
  }
  enterLastName(name) {
    cy.get('#last-name').clear().type(name)
  }
  enterPostalCode(code) {
    cy.get('#postal-code').clear().type(code)
  }
  clickContinue() {
    cy.get('#continue').click()
  }
  clickFinish() {
    cy.get('#finish').click()
  }
  getErrorMessage() {
    return cy.get('[data-test="error"]')
  }
  getOrderConfirmation() {
    return cy.get('.complete-header')
  }
}
module.exports = CheckoutPage