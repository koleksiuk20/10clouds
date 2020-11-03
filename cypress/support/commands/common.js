import { 
  commonButtons,
  commonInputFields 
} from '../utils/configUtils/configUtils';

// Open Landing Page
Cypress.Commands.add('openLandingPage', moduleUrl => {
  cy.visit(moduleUrl, {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
    }
  });
});

// Select wanted button
Cypress.Commands.add('selectButton', buttonText => {
  const buttonNameItem = commonButtons;

  cy.contains('span', buttonNameItem[buttonText])
    .should('be.visible')
    .click();
});

// Select wanted field and fill in
Cypress.Commands.add('selectFieldAndFillIn', (text, fieldPlaceholder) => {
  const fieldPlaceholderItem = commonInputFields;

  cy.get(`[placeholder="${fieldPlaceholderItem[fieldPlaceholder]}"]`)
    .should('be.visible')
    .type(text)
    .type('{esc}');
});
