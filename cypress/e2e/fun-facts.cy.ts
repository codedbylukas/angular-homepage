describe('Site is acsesseble use', () => {
  it('Site is acceseble', () => {
    cy.visit('/fun-facts');
  });
});

describe('Link Work and text is shown', () => {
  it('Text is in page', () => {
    cy.visit('/fun-facts');
    cy.contains('Fun Facts');
    cy.contains('Click mich');
    cy.contains('Clicke den anderen Button um den Fackt zu sehen.');
    cy.contains('Home');
  });
  it('Link works', () => {
    cy.visit('/fun-facts');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/fun-facts');
  });
});
