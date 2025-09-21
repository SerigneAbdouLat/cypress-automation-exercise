const userCredentials = require("../fixtures/user-credentials.json");

describe('Test Case 4: Logout User', () => {
  beforeEach(() => {
    cy.registerUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should logout successfully', () => {
    cy.get('a[href="/login"]').click()
    cy.LoginForm(userCredentials)
    cy.contains(`Logged in as ${userCredentials.name}`).should('be.visible')
    cy.get('a[href="/logout"]').click()
    cy.contains('Login to your account').should('be.visible')
  })
})
