describe('Test Case 13: Verify Product quantity in Cart', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should Verify Product quantity in Cart', () => {
    cy.get('a[href="/products"]').click()
    cy.url().should("eq", "https://automationexercise.com/products")
    cy.contains("View Product").click()
    cy.url().should(
                "contain",
                "https://automationexercise.com/product_details",
            )
    cy.get(".product-details").should("be.visible")
    cy.get("#quantity").clear().type("4")
    cy.contains("Add to cart").click()
    cy.contains("View Cart").click()
    cy.get('#product-1')
        .should('be.visible')
        .and('contain.text', 'Blue Top')
    cy.get('.cart_quantity > .disabled')
        .should('be.visible')
        .and('contain.text', '4')

  })
})