describe('Test Case 9: Search Product', () => {
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
    cy.get("#search_product").type("Stylish Dress")  
    cy.get("#submit_search").click()  
    cy.get('.title')
        .should('be.visible')
        .and('contain.text', 'Searched Products')
    
    //cy.get(".product-image-wrapper").its("length").should("eq", 1)
    cy.get(".product-image-wrapper").its("length").should("be.gte", 1)   // be.gte : superieur ou égale

   
  })
})