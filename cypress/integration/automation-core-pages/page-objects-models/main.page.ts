import { IMainPage } from "../page-contracts/imain.page";


import {injectable} from 'inversify'

@injectable()
export class MainPage implements IMainPage {
    public visitLanding(): void {
      cy.visit(Cypress.env('zopa_portal_url'));
    }

    public getBanner(): Cypress.Chainable<any> {
      return cy.get('.Align__Alignment-sc-132butt-0').children();
    }

    public static goToLoans(): void {
      cy.get('[data-automation=\'ZA.button-Loans\']').click();
    }
}