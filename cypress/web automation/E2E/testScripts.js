/// <reference types="cypress" />

describe("Guru99 Test Suite", function () {
  const validID = "mngr487812";
  const invalidID = "17684";
  const validPassword = "bYdyvYj";
  const invalidPassword = "1234567890";
  const validPin = "453945";
  const customerName = "Emmanuel Francis";
  const address = "Plot 5 ABC";
  const city = "PortHarcourt";
  const state = "Rivers State";
  const mobileNum = "09016137098";
  const email = "francemma67@gmail.com";
  const customerPassword = "fed4a141@";
  const customerAccountNumber = "119886";
  const withdrawalAmount = "80";

  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
    cy.get(":nth-child(1) > :nth-child(2) > input").as("userIdInput");
    cy.get(":nth-child(2) > :nth-child(2) > input").as("passwordInput");
    cy.get('[type="submit"]').as("loginButton");
  });

  it("Verify user can login with valid credentials", function () {
    cy.get("@userIdInput").type(validID);
    cy.get("@passwordInput").type(validPassword);
    cy.get("@loginButton").click();
  });

  it("Verify user cannot login with invalid credentials", function () {
    cy.get("@userIdInput").type(invalidID);
    cy.get("@passwordInput").type(invalidPassword);

    cy.on("window:before:load", (win) => {
      cy.get("@loginButton").click();
    });

    cy.on("window:alert", (str) => {
      expect(str).to.equal("User or Password is not valid");

      cy.get("body").type("{esc}");
    });
  });

  it("Verify user can create new customer", function () {
    cy.get(":nth-child(1) > :nth-child(2) > input").type(validID);
    cy.get(":nth-child(2) > :nth-child(2) > input").type(validPassword);
    cy.get('[type="submit"]').click();
    cy.wait(300);
    cy.get(".menusubnav > :nth-child(2) > a").click();
    cy.get(":nth-child(4) > :nth-child(2) > input").type(customerName);
    cy.wait(500);
    cy.get("#dob").type("2000-04-05");
    cy.wait(500);
    cy.get("textarea").type(address);
    cy.get(":nth-child(8) > :nth-child(2) > input").type(city);
    cy.get(":nth-child(9) > :nth-child(2) > input").type(state);
    cy.get(":nth-child(10) > :nth-child(2) > input").type(validPin);
    cy.get(":nth-child(11) > :nth-child(2) > input").type(mobileNum);
    cy.get(":nth-child(12) > :nth-child(2) > input").type(email);
    cy.get(":nth-child(13) > :nth-child(2) > input").type(customerPassword);
    cy.wait(500);

    cy.get('[type="submit"]').click();
  });

  it("Verify user can open account for new customer", function () {
    cy.get(":nth-child(1) > :nth-child(2) > input").type(validID);
    cy.get(":nth-child(2) > :nth-child(2) > input").type(validPassword);
    cy.get('[type="submit"]').click();
    cy.wait(300);
    cy.get(".menusubnav > :nth-child(5) > a").click();
    cy.get(":nth-child(2) > :nth-child(2) > input").type(18674);
    cy.get("select").select("Current").should("have.value", "Current");
    cy.get(":nth-child(4) > :nth-child(2) > input").type(5000);
    cy.get('[type="submit"]').click();
  });

  it("Verify user can withdraw money from an existing account", function () {
    cy.get(":nth-child(1) > :nth-child(2) > input").type(validID);
    cy.get(":nth-child(2) > :nth-child(2) > input").type(validPassword);
    cy.get('[type="submit"]').click();
    cy.wait(300);
    cy.get(".menusubnav > :nth-child(9) > a").click();
    cy.get(":nth-child(6) > :nth-child(2) > input").type(customerAccountNumber);
    cy.get(":nth-child(7) > :nth-child(2) > input").type(withdrawalAmount);

    it("Verify user can withdraw money from an existing account", function () {
      cy.get(":nth-child(1) > :nth-child(2) > input").type(validID);
      cy.get(":nth-child(2) > :nth-child(2) > input").type(validPassword);
      cy.get('[type="submit"]').click();
      cy.wait(300);
      cy.get(".menusubnav > :nth-child(9) > a").click();
      cy.get(":nth-child(6) > :nth-child(2) > input").type(
        customerAccountNumber
      );
      cy.get(":nth-child(7) > :nth-child(2) > input").type(withdrawalAmount);
      cy.get(
        "table.layout:nth-child(8) table:nth-child(1) tbody:nth-child(1) tr:nth-child(8) td:nth-child(2) > input:nth-child(1"
      ).type("Test Funds");

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });

      cy.get('[type="submit"]').click();
    });

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get('[type="submit"]').click();
  });
});
