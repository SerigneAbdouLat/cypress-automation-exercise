const userCredentials = require("../fixtures/user-credentials.json")

describe('Test Case 1: Register User', () => {
  
  beforeEach(() => {
    cy.deleteUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should register a new user successfully', () => {
    cy.get('a[href="/login"]').click()
    cy.SignupUser(userCredentials)
    cy.contains(`Logged in as ${userCredentials.name}`).should('be.visible')
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Account Deleted!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()
  })
})
