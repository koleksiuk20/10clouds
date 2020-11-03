import './commands/common';

before(function() {
  // Clear local storage before running tests
  cy.clearLocalStorage();
});

// Prevent Cypress from failing the test
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Prevent page load from the time outs 
Cypress.on('window:before:load', function (window) {
  const original = window.EventTarget.prototype.addEventListener;

  window.EventTarget.prototype.addEventListener = function () {
    if (arguments && arguments[0] === 'beforeunload') {
      return;
    }
    return original.apply(this, arguments);
  }

  Object.defineProperty(window, 'onbeforeunload', {
    get: function () { },
    set: function () { }
  });
});
