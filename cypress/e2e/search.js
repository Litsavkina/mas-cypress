/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Search Job component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should verify that Job search box is present and works", () => {
    cy.get(
      ".banner-content > .wpt-jobboard-search-form > .jbForm > :nth-child(4) > .form-control"
    ).type("Physical Therapist");
    cy.get(".jbForm > :nth-child(5) > .btn").click();
    cy.title().should("include", "Search Results");
  });

  it("Should have focus when user click on search job input field", () => {
    cy.get(
      ".banner-content > .wpt-jobboard-search-form > .jbForm > :nth-child(4) > .form-control"
    )
      .click()
      .should("have.focus");
  });
});
