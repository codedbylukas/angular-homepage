describe('Site is acsesseble use', () => {
  it('Site is acceseble', () => {
    cy.visit('/data-security');
  });
});

describe('Link Work and text is shown', () => {
  it('Text is in page', () => {
    cy.visit('/data-security');
    cy.contains('Home');
    cy.contains('Datenschutz');
    cy.contains(
      'Es werden wennige Daten von dir gespeichert. Es wird der local Storage deines Browers genutzt um die ToDo Liste möglich zu machen. Es werden auch keine Cookies verwendet oder andere Tracking-Technologien eingesetzt. Die Webseite ist komplett kostenlos und es gibt keine Werbung.',
    );
  });
  it('Link works', () => {
    cy.visit('/data-security');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/data-security');
  });
});
