/// <reference types="cypress" />

define("Testing for search admin", () => {
  const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  beforeEach(() => {
    cy.visit(loginURL);
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  });

  it("Search admin data by username", () => {
    cy.get(":nth-child(2) > .oxd-input").type("Alice.Duval{enter}");
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div").should("contain", "Alice.Duval");
  });

  it("Search admin data by user role", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").should("contain", "Admin");
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");
    cy.get(".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div").should("contain", "Admin");
  });

  it("Search admin data by name", () => {
    cy.get(".oxd-autocomplete-text-input > input").type("Alice Duval{enter}");
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div").should("contain", "Alice.Duval");
  });

  it.only("Search admin data by status", () => {
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").should("contain", "Enabled");
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");
    cy.get(".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(5)").should("contain", "Enabled");
  });
});
