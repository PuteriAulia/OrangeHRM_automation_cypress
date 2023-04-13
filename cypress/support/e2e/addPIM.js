/// <reference types="cypress" />

describe("Testing for add PIM", () => {
    const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  
    beforeEach(() => {
      cy.visit(loginURL);
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
      cy.get(".oxd-button").click();
      cy.get(":nth-child(2) > .oxd-main-menu-item").click();
      cy.get('.orangehrm-header-container > .oxd-button').click()
    });

    it("Add PIM with correct data", () => {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Saskia')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rose')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('August{enter}')

        // Response
        cy.get('.oxd-toast').should('contain', 'Success')
    });

    it("Add PIM without first name", () => {
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rose')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('August{enter}')

        // Response
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('contain', 'Required')
        cy.url().should("be.equal", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
        
    });

    it("Add PIM without middle name", () => {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Saskia')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('August{enter}')

        // Response
        cy.get('.oxd-toast').should('contain', 'Success')
    });

    it("Add PIM without last name", () => {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Saskia')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rose{enter}')

        // Response
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('contain', 'Required')
        cy.url().should("be.equal", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
    });
});