/// <reference types="cypress" />

describe("Testing for add admin", () => {
  const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  beforeEach(() => {
    cy.visit(loginURL);
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  });

  it("Add admin with correct data", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    // Input user role
    cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();

    // Input empleyee name
    cy.get(".oxd-autocomplete-text-input > input").type("Alice Duval");
    cy.get(".oxd-autocomplete-option > span").click();

    // Input status
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();

    // Input username
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type("alice");

    // Input password
    cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin_1234");

    // Input confirm password
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin_1234{enter}");
  });

  it("Add admin with unregistered name", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    // Input user role
    cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();

    // Input empleyee name
    cy.get(".oxd-autocomplete-text-input > input").type("alice");

    // Input status
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();

    // Input username
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type("alice");

    // Input password
    cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin_1234");

    // Input confirm password
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin_1234{enter}");

    // Invalid response
    cy.get(".oxd-input-group > .oxd-text").should("contain", "Invalid");
    cy.url().should("be.equal", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
  });
});
