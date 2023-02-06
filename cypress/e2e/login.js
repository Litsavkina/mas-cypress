/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

const { page } = require("../support/pageObjects/page");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Login component", () => {
  beforeEach(() => {
    page.visitLogin();
    cy.wait(1000);
  });

  it("Should verify user can login with valid credentials", () => {
    page.login();
    cy.xpath("//p[.='Welcome, Marina']").should("have.text", "Welcome, Marina");
    cy.get("h1[class='sc-gsnTZi gWsPkg']").should(
      "include.text",
      "Complete your profile"
    );
  });

  it("Should show notification message with wrong credentials", () => {
    page.invalidLogin();
    cy.xpath("//span[.='Wrong email or password.']").should(
      "have.text",
      "Wrong email or password."
    );
  });

  it("Should show correct error messages input fields for email address and password", () => {
    cy.get("button[type='submit']").click({ force: true });
    cy.get("#signIn-username-error > .sc-gsnTZi").should(
      "have.text",
      "Please provide a valid email address"
    );
    cy.get("#signIn-password-error > .sc-gsnTZi").should(
      "have.text",
      "Please provide a valid password."
    );
  });

  it("Should login with Remember me checkbox input field active", () => {
    cy.get("#signIn-username").type(Cypress.env("user_login"));
    cy.get("#signIn-password").type(Cypress.env("user_valid_password"));
    cy.get("span[class='sc-iIPllB fQTmTP'] > span").click();
    cy.get("button[type='submit']").click({ force: true });
    cy.xpath("//p[.='Welcome, Marina']").should("have.text", "Welcome, Marina");
    cy.get("h1[class='sc-gsnTZi gWsPkg']").should(
      "include.text",
      "Complete your profile"
    );
  });
});
