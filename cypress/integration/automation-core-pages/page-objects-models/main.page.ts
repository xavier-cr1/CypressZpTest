export class MainPage {

    public static visit(): void {
      cy.visit(Cypress.env('zopa_portal_url'));
    }

    public static getBanner(): Cypress.Chainable {
      return cy.get('.Align__Alignment-sc-132butt-0').children();
    }

    public static goToLoans(): void {
      cy.get('[data-automation=\'ZA.button-Loans\']').click();
    }
}