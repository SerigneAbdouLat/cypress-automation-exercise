
describe('Test Case 7: Verify Test Cases Page', () => {
  beforeEach(() => {
    //cy.registerUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should open the Test Cases page', () => {
    cy.contains('Test Cases').click()
    cy.get('.title')
      .should('be.visible')
      .and('contain.text', 'Test Cases')
  })
})
