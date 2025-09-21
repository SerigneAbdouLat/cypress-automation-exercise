const userCredentials = require("../fixtures/user-credentials.json");

describe('Test Case 5: Register User with existing email', () => {
  beforeEach(() => {
    cy.registerUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should show error when registering with an existing email', () => {
    cy.get('a[href="/login"]').click()
    cy.SignupForm(userCredentials)
    cy.contains('Email Address already exist!').should('be.visible')
  })
})
