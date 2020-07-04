import { MainPage } from '@page-objects-models/main.page';
import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('The user navigates to zopa landing page', () => {
    MainPage.visit();
    MainPage.getBanner().should('contain.text', 'FeelGood Money');
});

When('The user clicks on see your rates buttons inside loans placeholder', () => {
    MainPage.goToLoans();
});
