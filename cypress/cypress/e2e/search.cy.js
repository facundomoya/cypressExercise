describe('Search elements', () => {
    beforeEach(() => {
        cy.visit("https://www.mercadolibre.com.ar");
    });

    it('search for elements with multiple results', () => {
        cy.search('PS5{enter}');
    });

    it('search element that does not exist', () => {
    cy.fixture('index').then((index)=>{
        cy.contains(index.codPostal).click();
        cy.contains(index.cookies).click();
        cy.get(index.searchProducts).click().type("rvvasdsadsd{enter}");
        cy.get(index.searchFailed);
        });
    });

    it('search with elements with special code', () => {
        cy.readFile('cypress/support/text/search.txt').then((text)=>{
            cy.search(text);
        });
    });
});
