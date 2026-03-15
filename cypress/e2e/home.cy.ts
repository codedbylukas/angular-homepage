describe('Text is here there', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
  });
  it('Test text', () => {
    cy.visit('/');
    cy.contains('Hallo, ich bin Lukas');
    cy.contains('Coole Webseiten');
  });
  it('Test links text contain', () => {
    cy.visit('/');
    cy.contains('Sand Spiel');
    cy.contains('Lustige Fakten');
    cy.contains('ToDo Liste');
  });
});

describe('Text is possibe to click it', () => {

  it('Test if Sand Game is able to Click it', () => {
    cy.visit('/');
    cy.contains('Sand Spiel').click();
    cy.url().should('include', '/sand-site');
  });
  it('Test if Lustige Fakten is able to Click it', () => {
    cy.visit('/');
    cy.contains('Lustige Fakten').click();
    cy.url().should('include', '/fun-facts');
  });
  it('Test if ToDo Liste is able to Click it', () => {
    cy.visit('/');
    cy.contains('ToDo Liste').click();
    cy.url().should('include', '/todo-list');
    cy.visit("/")
  });
});
