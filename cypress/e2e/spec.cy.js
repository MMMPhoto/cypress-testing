describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.navbar-nav').first().click()
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu').contains('li', 'Querying').click()
    cy.get('#get').click().find('a').click()
  })
})