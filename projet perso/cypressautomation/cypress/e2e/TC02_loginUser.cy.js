const userCredentials = require("../fixtures/user-credentials.json");

describe('Test Case 2: Login User with correct email and password', () => {

  beforeEach(() => {
    cy.registerUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should login with valid credentials', () => {
    cy.get('a[href="/login"]').click()
    cy.LoginForm(userCredentials)
    cy.contains(`Logged in as ${userCredentials.name}`).should('be.visible')
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Account Deleted!').should('be.visible')
  })
})
