describe("Testing on account section", () => {
  const loginURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  beforeEach( () => {
    cy.visit(loginURL);
  })

  it("Login with correct data", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click();
  });

  it("Login with incorrect username", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin1");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should("contain", "Invalid credentials");
  });

  it("Login with incorrect password", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin1");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should("contain", "Invalid credentials");
  });

  it("Login with unregistered username and password", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin1");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin1");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should("contain", "Invalid credentials");
  });

  it("Login without input username and password", () => {
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-input-group > .oxd-text").should("contain", "Required");
    cy.get(":nth-child(3) > .oxd-input-group > .oxd-text").should("contain", "Required");
  });
});
