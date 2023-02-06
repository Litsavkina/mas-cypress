export const page = {
  visitLogin: () => {
    cy.visit("/");
    cy.xpath("//a[.='Finish an Existing Application']")
      .invoke("removeAttr", "target")
      .click({ force: true });
  },

  login: () => {
    cy.get("#signIn-username").type(Cypress.env("user_login"));
    cy.get("#signIn-password").type(Cypress.env("user_valid_password"));
    cy.get("button[type='submit']").click({ force: true });
  },

  invalidLogin: () => {
    cy.get("#signIn-username").type(Cypress.env("user_login"));
    cy.get("#signIn-password").type(Cypress.env("user_invalid_password"));
    cy.get("button[type='submit']").click({ force: true });
  },
};
