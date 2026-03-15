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
    cy.contains('Es werden keine Daten von dir gespeichert. Es werden auch keine Cookies verwendet oder andere Tracking-Technologien eingesetzt. Die Webseite ist komplett kostenlos und es gibt keine Werbung. ');
  });
  it('Link works', () => {
    cy.visit('/data-security');
    cy.contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('/data-security');
  });
});

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
