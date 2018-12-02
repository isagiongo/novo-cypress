describe('Links página inicial', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })

    it('deve validar o titulo da pagina', () => {
        cy.title().should('include', 'Cypress.io: Kitchen Sink')
    })

    it('deve clicar no link Type e validar url', () => {
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })

    it('deve clicar no link Window e validar url', () => {
        cy.contains('window').click()
        cy.url().should('include', 'commands/window')
    })

})


// it('deve validar entrada de email', () => {
//     cy.get('.action-email').type('teste@gmail.com').should('have.value', 'teste@gmail.com')
// })