import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Open Landing Page
Given(/^I have open Landing Page$/, () => {
  cy.openLandingPage('/')
    .title()
    .should('include', 'Web and Mobile Development Company | 10Clouds');
});

// Verify that page is loaded correctly
Then(/^I am on "([^"]*)" page$/, url => {
  cy.url()
    .should('include', url);
});

// Select button
When(/^I select "([^"]*)" button$/, buttonText => {
  cy.selectButton(buttonText);
});

// Verify number of particular roles displayed on the website
Then(/^I should see exactly (\d+) "([^"]*)" role open$/, (amount, roleTitle) => {
  cy.get(`span:contains(${roleTitle})`)
    .should(($div) => {
      expect($div).to.have.length(amount)
    });
});

// Fill in input field with data
When(/^I type "([^"]*)" into the "([^"]*)" field$/, (text, fieldPlaceholder) => {
  cy.selectFieldAndFillIn(text, fieldPlaceholder,)
});

// Search results for roles
Then(/^I should see roles containing "([^"]*)"$/, roleTitle => {
  cy.get(`span:contains(${roleTitle})`)
    .should(($div) => {
      expect($div).to.contain(roleTitle)
    });
});
