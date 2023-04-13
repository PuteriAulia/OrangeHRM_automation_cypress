/// <reference types="cypress" />

describe("Testing for edit admin data", () => {
  const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  beforeEach(() => {
    cy.visit(loginURL);
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();

    // Find selected admin data
    cy.get(".oxd-autocomplete-text-input > input").type("Alice Duval{enter}");
    cy.wait(3000);
    cy.get(".oxd-autocomplete-option").click();
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");
    cy.get(".oxd-table-cell-actions > :nth-child(2)").click();
  });

  it("Edit user role", () => {
    cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text").click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-button--secondary").click();
    cy.get('.oxd-toast').should('contain', 'Success')
    cy.url().should("be.equal", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
    
  });

  it("Edit with unregistered username", () => {
    cy.get(".oxd-autocomplete-text-input > input").clear().type("Paul Collings");
    cy.get(".oxd-autocomplete-option").should("contain", "No Records Found");

    cy.get(":nth-child(2) > .oxd-input").type("{enter}");
    cy.get(".oxd-input-group > .oxd-text").should("contain", "Invalid");
  });

  it("Edit with registered employee name", () => {
    cy.get(":nth-child(2) > .oxd-input").clear().type("Saskia Anneth{enter}");
    cy.get(".oxd-button--secondary").dblclick();
  });

  it("Edit with registered username", () => {
    cy.get(".oxd-autocomplete-text-input > input").clear().type("Anthony Nolan");
    cy.wait(3000);
    cy.get('.oxd-autocomplete-option').click();
    cy.get(".oxd-button--secondary").click();
    cy.get('.oxd-toast').should('contain', 'Success')
    cy.url().should("be.equal", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
  });
});
