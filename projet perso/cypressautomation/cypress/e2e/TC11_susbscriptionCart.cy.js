const userCredentials = require("../fixtures/user-credentials.json");

describe('Test Case 11: Verify Subscription in Cart page', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
})
  it('Should allow the user to subscribe to the newsletter from the Cart page', () => {
    cy.contains(" Cart").click()
    cy.get('#footer').scrollIntoView()
    cy.get('#footer').within(() => {
      cy.contains('Subscription').should('be.visible')
      cy.get('#susbscribe_email').type(userCredentials.email)
      cy.get('#subscribe').click()
      cy.get('#success-subscribe')
        .should('be.visible')
        .and('contain.text', 'You have been successfully subscribed!')
    })
  })
})
