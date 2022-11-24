describe('view from here page load', () => {
  it('passes', () => {
    cy.visit('https://viewfromhere.herokuapp.com')
    // cy.get('#map').should('not.contain', 'Loading...')
    // cy.get('#map').within(() => {
      cy.get('.gm-style').within(() => {
        cy.get('div[role="button"]').eq(20).children('map').should('have.id', 'gmimap20')
        cy.get('#gmimap20').children('area').click({force: true})
        cy.get('.info-div').click()
      })
    // })
  })
})