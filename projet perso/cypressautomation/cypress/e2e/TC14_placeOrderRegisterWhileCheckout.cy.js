const userCredentials = require("../fixtures/user-credentials.json")
const accountDataValuesToCheck = [
    userCredentials.firstName,
    userCredentials.lastName,
    userCredentials.company,
    userCredentials.address,
    userCredentials.country,
    userCredentials.state,
    userCredentials.city,
    userCredentials.zipcode,
    userCredentials.mobile,
]


describe('Test Case 14: Place Order: Register while Checkout', () => {
  beforeEach(() => {
    cy.deleteUserWithAPI(userCredentials)
    cy.visit("https://automationexercise.com/")
    cy.get('h1').first().should('have.text', 'AutomationExercise')
  })

  it('Place Order: Register while Checkout', () => {
    cy.get('a[href="/products"]').click()

    cy.url().should("eq", "https://automationexercise.com/products")

    cy.addProdCart(1)

    cy.contains("Continue Shopping").click()

    cy.contains(" Cart").click()

    cy.url().should("eq", "https://automationexercise.com/view_cart")

    cy.contains("Proceed To Checkout").click()

    cy.get(".modal-content a").click()
   // cy.get('a[href="/login"]').click()

    cy.SignupUser(userCredentials)

    cy.contains(`Logged in as ${userCredentials.name}`).should('be.visible')

    cy.contains(" Cart").click()

    cy.contains("Proceed To Checkout").click()

    accountDataValuesToCheck.forEach((value) => {
                cy.get("#address_delivery").should("contain.text", value)

                cy.get("#address_invoice").should("contain.text", value)
            })
    cy.get(".form-control").type("J'aime bien les produits!")
    cy.contains("Place Order").click()
    cy.PaymentForm(userCredentials)
    cy.get(".title").should("contain.text",  "Order Placed!")
    cy.contains("Congratulations! Your order has been confirmed!").should("be.visible")
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Account Deleted!').should('be.visible')

  })
})