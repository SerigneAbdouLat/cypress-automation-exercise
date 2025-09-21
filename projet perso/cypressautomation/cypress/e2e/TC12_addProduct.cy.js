

describe('Test Case 12: Add Products in Cart', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should add Products in Cart', () => {
    cy.get('a[href="/products"]').click()
    cy.url().should("eq", "https://automationexercise.com/products")
    cy.addProdCart(1)
    cy.contains("Continue Shopping").click()
    cy.addProdCart(2)
    cy.contains("View Cart").click()
    cy.get('#product-1')
        .should('be.visible')
        .and('contain.text', 'Blue Top')
    cy.get('#product-2')
        .should('be.visible')
        .and('contain.text', 'Men Tshirt')
  })
})