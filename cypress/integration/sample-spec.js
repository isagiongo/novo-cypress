describe('Titulo', () => {
    it('deve clicar no link Type e validar url', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email').type('teste@gmail.com').should('have.value', 'teste@gmail.com')
    })
})