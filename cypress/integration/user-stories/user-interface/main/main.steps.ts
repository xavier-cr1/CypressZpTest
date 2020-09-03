import { MainPage } from '@page-objects-models/main.page';
import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import { injectable, inject } from 'inversify';
import { TYPES } from 'types';
import { IMainPage } from 'cypress/integration/automation-core-pages/page-contracts/imain.page';



@injectable()
export class MainSteps {
    constructor(@inject(TYPES.IMainPage)
    private _IMainPage: IMainPage) {

    }

    test(): void {
        this._IMainPage.getBanner();
    }
}

Given('The user navigates to zopa landing page', () => {
    MainPage.visit();
    MainPage.getBanner().should('contain.text', 'FeelGood Money');
});

When('The user clicks on see your rates buttons inside loans placeholder', () => {
    MainPage.goToLoans();
});
