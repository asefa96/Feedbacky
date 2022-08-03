describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("Open the web app", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should everything mounted correctly, scroll down and button should fixed positipon", () => {
    cy.visit("http://localhost:3000")
    .contains('Your E-Commerce App')
    .get("#feedback-button")
    .get(".properCard")
    .contains('Home item')
    .get(".properCard")
    .should("have.length.greaterThan", 2)
    .window().scrollTo("bottom", { duration: 1500 })
    .get(".properCard")
    .should("have.length.greaterThan", 4)
    .get("#feedback-button")
    .wait(1000)
  });

  it("Feedback submit flow", () => {
    cy.visit("http://localhost:3000")
    .window().scrollTo("bottom", { duration: 1500 })
    .get("#feedback-button")
    .click()
    .get("#feedback-messagebox")
    .type("e2e test from cypress")
    .get("#valid-message")
    .contains("21/2000")
    .wait(1000)
    .get("#feedback-submit")
    .click()
    .get("#modal-container")
    .contains('We have got your feedback!')
    .get("#modal-exit-button")
    .wait(1000)
    .click()
    .get("#modal-container")
    .should('not.exist')

  });
});
