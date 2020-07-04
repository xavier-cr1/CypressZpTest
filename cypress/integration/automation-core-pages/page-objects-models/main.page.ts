export class MainPage {

    public static visit(): void {
      cy.visit(Cypress.env('zopa_portal_url'));
    }

    public static getBanner(): Cypress.Chainable {
      return cy.get('.Hero__Caption-sc-1uswyz7-1');
    }

    public static goToLoans(): void {
      cy.get('[data-automation=\'ZA.button-Loans\']').click();
    }
}