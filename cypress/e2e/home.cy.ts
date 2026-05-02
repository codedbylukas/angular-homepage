describe('Text is here there', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
  });
  it('Test text', () => {
    cy.visit('/');
    cy.contains('Hallo, ich bin Lukas');
    cy.contains('Coole Webseiten');
    cy.contains('Footer');
  });
  it('Test links text contain', () => {
    cy.visit('/');
    cy.contains('Sand Spiel');
    cy.contains('Lustige Fakten');
    cy.contains('ToDo Liste');
    cy.contains('Datenschutz');
    cy.contains('Rate Spiel');
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
  });
  it('Test if Datenschutz is able to Click it', () => {
    cy.visit('/');
    cy.contains('Datenschutz').click();
    cy.url().should('include', '/data-security');
    cy.visit('/');
  });
  it('Test if Gessing game is able to Click it', () => {
    cy.visit('/');
    cy.contains('Rate Spiel').click();
    cy.url().should('include', '/number-gessing-game');
    cy.visit('/');
  });
});
describe('Img test', () => {
  it('Should check if the de image is loaded', () => {
    cy.visit('/');
    cy.get('img[alt="DE"]')
      .should('be.visible')
      .and(($img) => {
        const img = $img[0] as HTMLImageElement;
        expect(img.naturalWidth).to.be.gt(0);
      });
  });
  it('Should check if the us image is loaded', () => {
    cy.visit('/');
    cy.get('img[alt="US"]')
      .should('be.visible')
      .and(($img) => {
        const img = $img[0] as HTMLImageElement;
        expect(img.naturalWidth).to.be.gt(0);
      });
  });
});
