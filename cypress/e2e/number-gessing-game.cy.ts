describe('Site is acsesseble use', () => {
  it('Site is acceseble', () => {
    cy.visit('/number-gessing-game');
  });
});

describe('Link Work and text is shown', () => {
  it('Text is in page', () => {
    cy.visit('/number-gessing-game');
    cy.contains('Zahlenratespiel');
    cy.contains('Ich habe mir eine Zahl zwischen 1 und 100 ausgedacht. Kannst du sie erraten?');
    cy.contains('Raten');
    cy.contains('Home');
  });
  it('Link works', () => {
    cy.visit('/number-gessing-game');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/number-gessing-game');
  });
});
