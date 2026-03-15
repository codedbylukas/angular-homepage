describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Hallo, ich bin Lukas');
    cy.contains('Coole Webseiten');
    cy.url().should('include', '/sand-site');
  });
});
