
describe('Test Case 8: Verify All Products and product detail page', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Should Verify All Products and product detail page', () => {
    cy.get('a[href="/products"]').click()
    cy.url().should("eq", "https://automationexercise.com/products")
    cy.get('.title')
        .should('be.visible')
        .and('contain.text', 'All Products')
    cy.get(".product-image-wrapper")
        .first()
        .within(() => {
            cy.contains("View Product").click()
        })
    //cy.url().should("eq", "https://automationexercise.com/product_details/1")
    cy.get(".product-information > h2").should("be.visible")
    cy.get(".product-information > :nth-child(3)").should("be.visible")
    cy.get(".product-information > :nth-child(5)").should("be.visible")
    cy.get(".product-information > :nth-child(6)").should("be.visible")
    cy.get(".product-information > :nth-child(7)").should("be.visible")
    cy.get(".product-information > :nth-child(8)").should("be.visible")
  })
})