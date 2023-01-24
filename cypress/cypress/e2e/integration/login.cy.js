describe('Sovos Login', () => {
    beforeEach(() => {
        cy.visit("https://dev-tir.sovos.org/login");
    });

    it('login with correct email', () => {
        cy.login('facum.ent@sovos.com','Password123');
    });
});