describe('Search elements', () => {
    beforeEach(() => {
        cy.visit("https://www.mercadolibre.com.ar");
    });

    it('search for elements with multiple results', () => {
    cy.fixture('index').then((index)=>{
        cy.contains(index.codPostal).click();
        cy.contains(index.cookies).click();
        cy.get(index.searchProducts).click().type("PS5{enter}");
        cy.get(index.PS5).eq(0).click();
        });
    });

    it('search element that does not exist', () => {
    cy.fixture('index').then((index)=>{
        cy.contains(index.codPostal).click();
        cy.contains(index.cookies).click();
        cy.get(index.searchProducts).click().type("rvvasdsadsd{enter}");
        cy.get(index.searchFailed);
        });
    });
});
