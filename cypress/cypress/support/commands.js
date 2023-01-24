Cypress.Commands.add('search', (value)=>{
    cy.fixture('index').then((index)=>{
        cy.contains(index.codPostal).click();
        cy.contains(index.cookies).click();
        cy.get(index.searchProducts).click().type(value);
        cy.get(index.PS5).eq(0).click();
        });
});

Cypress.Commands.add('login', (email, password) => {
    cy.fixture('login').then((login)=>{
        cy.get(login.email).click().type(email);
        cy.get(login.password).click().type(password);
        cy.contains('Login').click();
        });
});