describe("Open User Page", () => {
  it("Successfully Open Sign In Page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="signin-tittle"]')
      .should("exist")
      .should("have.text", "Sign In");
  });

  it("Successfully Open Sign In Page", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get('[data-testid="signin-tittle"]')
      .should("exist")
      .should("have.text", "Sign In");
  });

  it("Successfully Open Sign Up Page", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-testid="signup-tittle"]')
      .should("exist")
      .should("have.text", "Sign Up");
  });
});

describe("Open Admin Page", () => {
  it("Successfully Sign Up", async () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("input[name=name]").type("Cypress");
    cy.get("input[name=email]").type("cypress@gmail.com");
    cy.get("input[name=password]").type("12345678");
    cy.get("button[name=submitBtn]").click();
    await cy
      .url()
      .should("include", "/admin")
      .get('[data-testid="signed in text"]')
      .should("have.text", "You are logged in as Cypress");
  });

  it("Successfully Sign In", async () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("input[name=email]").type("cypress@gmail.com");
    cy.get("input[name=password]").type("12345678");
    cy.get("button[name=submitBtn]").click();

    await cy
      .url()
      .should("include", "/admin")
      .get('[data-testid="signed in text"]')
      .should("have.text", "You are logged in as Cypress");
  });
});
