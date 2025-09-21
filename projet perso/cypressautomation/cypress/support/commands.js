// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Cypress.Commands.add("userInput", (searchTxt) => {
    //cy.get("input[name='q']", { timeout: 10000 }).should('be.visible').type(searchTxt + '{enter}');
   // cy.get('input[type="search"]').first().should('be.visible').type('Java{enter}');

//});

// ajouter un produit au panier
Cypress.Commands.add('addProdCart',(nbprod) => { 
     cy.get(".product-image-wrapper")
        .eq(nbprod - 1)
        .trigger("mouseover")
        .within(() => {
            cy.contains("Add to cart").click()
        })

})

// Remplir la formulaire du Login
Cypress.Commands.add('LoginForm',(userCredentials) => { 

      //5.Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible')
  
      // 6. Enter correct email address and password 
      cy.get('input[data-qa="login-email"]').type(userCredentials.email)
      cy.get('input[data-qa="login-password"]').type(userCredentials.password)
  
      // 7. Click 'login' button
      cy.get('button[data-qa="login-button"]').click();
});

// Remplir la formulaire du signup
Cypress.Commands.add('SignupForm',(userCredentials) => { 
      //5. Vérifier qu'on est bien sur le formulaire
      cy.contains('New User Signup!').should('be.visible')
  
      // 6. Entrez le nom et l'adresse e-mail
      cy.get('input[data-qa="signup-name"]').type(userCredentials.name)
      cy.get('input[data-qa="signup-email"]').type(userCredentials.email)
  
      // 7. Cliquer sur Signup
      cy.get('button[data-qa="signup-button"]').click();
});

Cypress.Commands.add('AccountInformationForm',(userCredentials) => { 
      // 8. Vérifiez que « Enter Account Information » est visible
      cy.contains('Enter Account Information').should('be.visible');

      // 9. Remplissez les détails : Titre, Nom, E-mail, Mot de passe, Date de naissance
      cy.get('#id_gender1').check(); // titre 
      cy.get('input[data-qa="password"]').type(userCredentials.password); // mot de passe
      cy.get('#days').select(userCredentials.days);        
      cy.get('#months').select(userCredentials.months);  
      cy.get('#years').select(userCredentials.years);   
    
      // 10. Cochez la case « Inscrivez-vous à notre newsletter ! »
      cy.get('#newsletter').check();

      // 11. Cochez la case « Recevez des offres spéciales de nos partenaires ! »
      cy.get('#optin').check();
      // 12. Remplissez les détails : Prénom, Nom, Société, Adresse, Adresse 2, Pays, État, Ville, Code postal, Numéro de portable
      cy.get('#first_name').type(userCredentials.firstName);
      cy.get('#last_name').type(userCredentials.lastName);
      cy.get('#company').type(userCredentials.company);
      cy.get('#address1').type(userCredentials.address);
      //cy.get('#address2').type('Harlem');
      cy.get('#country').select(userCredentials.country)
      cy.get('#state').type(userCredentials.state);
      cy.get('#city').type(userCredentials.city);
      cy.get('#zipcode').type(userCredentials.zipcode);
      cy.get('#mobile_number').type(userCredentials.mobile)

      // 13. Cliquez sur le bouton « Créer un compte »
      cy.get('button[data-qa="create-account"]').click();
});


Cypress.Commands.add('SignupUser',(userCredentials) => { 
      cy.SignupForm(userCredentials)
      cy.AccountInformationForm(userCredentials)
      
      //Vérifiez que « ACCOUNT CREATED! » est visible
      cy.contains('Account Created!').should('be.visible');

      //15. Cliquez sur le bouton « Continuer »
      cy.get('a[data-qa="continue-button"]').click();
});

// Creer un compte pour un utilisateur via l'api du site web
Cypress.Commands.add("registerUserWithAPI", (userCredentials) => {
    return cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/createAccount",
        failOnStatusCode: false,
        form: true,
        body: {
            name: userCredentials.name,
            email: userCredentials.email,
            password: userCredentials.password,

            birth_date: userCredentials.days,
            birth_month: userCredentials.months,
            birth_year: userCredentials.years,

            firstname: userCredentials.firstName,
            lastname: userCredentials.lastName,

            company: userCredentials.company,
            address1: userCredentials.address,

            country: userCredentials.country,
            state: userCredentials.state,
            city: userCredentials.city,
            zipcode: userCredentials.zipcode,

            mobile_number: userCredentials.mobile,
        },
    })
})

// Creer un compte pour un utilisateur via l'api du site web
Cypress.Commands.add("deleteUserWithAPI", (userCredentials) => {
    return cy.request({
        method: "DELETE",
        url: "https://automationexercise.com/api/deleteAccount",
        failOnStatusCode: false,
        form: true,
        body: {
           
            email: userCredentials.email,
            password: userCredentials.password    
        },
    })
})

// Remplir la formulaire de contact
Cypress.Commands.add('ContactForm',(userCredentials) => { 

      cy.contains('Get In Touch').should('be.visible')

      // 6. Entrez le nom et l'adresse e-mail
      cy.get('input[data-qa="name"]').type(userCredentials.name)
      cy.get('input[data-qa="email"]').type(userCredentials.email)
      cy.get('input[data-qa="subject"]').type('Entrer en contact ')
      cy.get('[data-qa="message"]').type('Bonjour je vous contacte pour ...')
      cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/example.json')
      // 7. Cliquer sur Signup
      cy.get('input[data-qa="submit-button"]').click();
});

// Remplir la formulaire de paiement
Cypress.Commands.add('PaymentForm',(userCredentials) => { 

      cy.contains('Payment').should('be.visible')

      cy.get('input[data-qa="name-on-card"]').type(userCredentials.nameOnCard)
      cy.get('input[data-qa="card-number"]').type(userCredentials.ccNumber)
      cy.get('input[data-qa="cvc"]').type(userCredentials.CVC)
      cy.get('input[data-qa="expiry-month"]').type(userCredentials.expirationMonth)
      cy.get('input[data-qa="expiry-year"]').type(userCredentials.expirationYear)
      cy.get('[data-qa="pay-button"]').click();
});




