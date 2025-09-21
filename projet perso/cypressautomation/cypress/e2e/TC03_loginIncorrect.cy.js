const userCredentials = require("../fixtures/user-credentials.json");

describe('Test Case 3: Login User with incorrect email and password', () => {
  beforeEach(() => {
    cy.registerUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should not login with invalid credentials', () => {
    cy.get('a[href="/login"]').click()
    cy.LoginForm({ email: "incorre@gmail.com", password: "incorect012!" })
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})
