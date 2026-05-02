describe('Site is acsesseble use', () => {
  it('Site is acceseble', () => {
    cy.visit('/todo-list');
  });
});

describe('Link Work and text is shown', () => {
  it('Text is in page', () => {
    cy.visit('/todo-list');
    cy.contains('Meine Todo-Liste');
    cy.contains('Speichern');
    cy.contains('Ganze Liste löschen');
    cy.contains('Hier darunter ist die To-Do-Liste:');
    cy.contains('Home');
  });
  it('Link works', () => {
    cy.visit('/todo-list');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/todo-list');
  });
});
