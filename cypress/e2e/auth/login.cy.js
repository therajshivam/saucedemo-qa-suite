const LoginPage = require('../../pages/LoginPage')
const loginPage = new LoginPage()

describe('Login Module', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('TC-001 | Should login successfully with valid credentials', () => {
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
    cy.url().should('include', '/inventory')
  })

  it('TC-002 | Should show error with wrong password', () => {
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('wrongpassword')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('be.visible')
  })

  it('TC-003 | Should show error with invalid username', () => {
    loginPage.enterUsername('invalid_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('be.visible')
  })

  it('TC-004 | Should show error with empty username', () => {
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('contain', 'Username is required')
  })

  it('TC-005 | Should show error with empty password', () => {
    loginPage.enterUsername('standard_user')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('contain', 'Password is required')
  })

  it('TC-006 | Should show error with both fields empty', () => {
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('be.visible')
  })

  it('TC-007 | Should block locked out user', () => {
    loginPage.enterUsername('locked_out_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('contain', 'locked out')
  })

  it('TC-008 | Should login with performance glitch user', () => {
    loginPage.enterUsername('performance_glitch_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
    cy.url().should('include', '/inventory')
  })

})