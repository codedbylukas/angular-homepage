describe('Site is acsesseble use', () => {
  it('Site is acceseble', () => {
    cy.visit('/sand-site');
  });
});

describe('Link Work and text is shown', () => {
  it('Text is in page', () => {
    cy.visit('/sand-site');
    cy.contains('Gelber Regen!');
    cy.contains('Home');
  });
  it('Link works', () => {
    cy.visit('/sand-site');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/sand-site');
  });
});
