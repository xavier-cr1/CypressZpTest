import { LoansPage } from '@page-objects-models/loans.page';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('The user is in loans page', () => {
    LoansPage.visit();
    LoansPage.getBanner().should('contain.text', 'See your personalised loan rates in just 3 minutes');
});

When('The user clicks on get my personalised rates button', () => {
    LoansPage.goToGetMyPersonalisedRates();
});

When('The user fulfills the form with the values', datatable => {
    LoansPage.fulFillLoanForm(datatable);
});

Then('The user is available to complete the form', () => {
    LoansPage.clickLookUpAddress();
    LoansPage.getEmailError().should('not.exist');
    LoansPage.getPhoneError().should('not.exist');
    LoansPage.getPostCodeError().should('not.exist');
});

Then('The email invalid error {string} is displayed', (errorDisplayed: string) => {
    LoansPage.getEmailError().should('contain.text', errorDisplayed);
});