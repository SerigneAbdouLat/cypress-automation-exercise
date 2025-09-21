const userCredentials = require("../fixtures/user-credentials.json");

describe('Test Case 6: Contact Us Form', () => {
  beforeEach(() => {
    cy.registerUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should submit the contact form successfully', () => {
    cy.get('a[href="/contact_us"]').click()
    cy.ContactForm(userCredentials)
    cy.get(".status")
      .should("be.visible")
      .and("contain.text", "Success! Your details have been submitted successfully.")
    cy.get('#form-section > .btn').click()
    cy.get('h1').first().should('have.text', 'AutomationExercise')
    cy.url().should("eq", "https://automationexercise.com/")
  })
})
