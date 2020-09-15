import { MainPage } from '@page-objects-models/main.page';
import { injectable, inject } from 'inversify';
import { TYPES } from 'types';
import { IMainPage } from 'cypress/integration/automation-core-pages/page-contracts/imain.page';
import { binding, given, when } from "cucumber-tsflow";

@injectable()
@binding()
export class MainSteps {
    constructor(@inject(TYPES.IMainPage)
    private _IMainPage: IMainPage) {

    }

    @given('The user navigates to zopa landing page')
    public theUserVisits() : void {
        this._IMainPage.visitLanding();
        this._IMainPage.getBanner();
    }

    @when('The user clicks on see your rates buttons inside loans placeholder')
    public theUserClicksRates(): void {
        MainPage.goToLoans();
    }
}