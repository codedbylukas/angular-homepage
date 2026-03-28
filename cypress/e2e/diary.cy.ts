describe('Site is acsesseble use', () => {
  it('Site is acceseble', () => {
    cy.visit('/diary');
  });
});

describe('Link Work and text is shown', () => {
  it('Text is in page', () => {
    cy.visit('/diary');
    cy.contains('Home');
    cy.contains('Willkommen zu deinem Tagebuch');
  });
  it('Link works', () => {
    cy.visit('/diary');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/diary');
  });
});