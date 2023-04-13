/// <reference types="cypress" />

describe("Testing for delete admin", () => {
    const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  
    beforeEach(() => {
      cy.visit(loginURL);
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
      cy.get(".oxd-button").click();
      cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    });

    it("Delete admin", () => {
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get('.oxd-button--label-danger').click()
    
        //Response
        cy.get('.oxd-toast').should('contain', 'Success')
        cy.url().should("be.equal", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
      });
});