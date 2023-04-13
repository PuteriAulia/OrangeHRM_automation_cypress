/// <reference types="cypress" />

describe("Testing for search PIM", () => {
  const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  beforeEach(() => {
    cy.visit(loginURL);
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
  });

  it("Search PIM by employee name", () => {
    cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input").type("Cecil Bonaparte");
    cy.wait(2000);
    cy.get(".oxd-autocomplete-option").click();
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");

    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(3)").should("contain", "Cecil");
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4)').should("contain", "Bonaparte");
  });

  it("Search PIM by employee id", () => {
    cy.get(':nth-child(2) > .oxd-input').type('0204{enter}')

    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2)').should('contain', '0204')
  });

  it("Search PIM by employee status", () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");

    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(6)').should('contain', 'Full-Time Permanent')
  });

  it("Search PIM by employee include", () => {
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");
  });

  it("Search PIM by supervisor name", () => {
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Fiona Grace')
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown').click()
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");

    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(8)').should('contain', 'Fiona Grace')
  });

  it("Search PIM by job title", () => {
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.wait(2000)
    cy.get(':nth-child(23) > span').click()
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(5)').should('contain','Software Engineer')
  });

  it("Search PIM by sub unit", () => {
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.wait(2000)
    cy.get('.oxd-select-dropdown > :nth-child(5)').click()
    cy.get(":nth-child(2) > .oxd-input").type("{enter}");

    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(7)').should('contain', 'Development')
  });
});
