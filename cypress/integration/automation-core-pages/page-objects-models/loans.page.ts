import { UserLoan } from '@page-entities/user-loan';
import * as EmailValidator from 'email-validator';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as PostCodeValidator from 'postcode-validator';

export class LoansPage {

    public static visit(): void {
      cy.visit(Cypress.env('zopa_loans_url'));
    }

    public static getBanner(): Cypress.Chainable {
      return cy.get('#maincontent').find('h1');
    }

    public static goToGetMyPersonalisedRates(): void {
      cy.get('[data-automation=\'ZA.button-personal-rate\']').first().click();
    }

    public static fulFillLoanForm(datatable: any): void {
      datatable.hashes().forEach((element: any) => {
        const newUserLoan = element as UserLoan;
        this.selectLoanFor(newUserLoan.loanNeed);
        this.typeEmail(newUserLoan.emailAddress);
        this.selectTitle(newUserLoan.title);
        this.typeFirstName(newUserLoan.firstName);
        this.typeLastName(newUserLoan.lastName);
        this.typeDateOfBirth(newUserLoan.dateOfBirth);
        this.typePhoneNumber(newUserLoan.phoneNumber);
        this.selectEmploymentStatus(newUserLoan.employmentStatus);
        this.typeAnnualIncomeBeforeTax(newUserLoan.anualIncomeBeforeTax);
        this.selectHomeOwnership(newUserLoan.homeOwnership);
        this.typePostCode(newUserLoan.postCode);
      });
    }
  
    public static getEmailError(): Cypress.Chainable {
      return cy.get('[data-automation=\'ZA.error-email\']');
    }
    
    public static getPhoneError(): Cypress.Chainable {
      return cy.get('[data-automation=\'ZA.error-phone\']');
    }

    public static getPostCodeError(): Cypress.Chainable {
      return cy.get('[data-automation=\'ZA.PostcodeErrorMessage\']');
    }

    public static clickLookUpAddress(): void {
      cy.get('[data-automation=\'ZA.addressLookup\']').click();
    }

    private static selectLoanFor(loan: string): void {
      if(loan === 'Car') {
        cy.get('#radio-id-CAR').click({force: true});
      }
      else if(loan === 'Home improvement') {
        cy.get('#radio-id-HOME_IMPROVEMENTS').click({force: true});
      }
      else if(loan === 'Home improvement') {
        cy.get('#radio-id-CONSOLIDATE').click({force: true});
      }
      else {
        cy.get('#radio-id-OTHER').click({force: true});
      }
    }

    private static typeEmail(emailAddress: string): void {
        cy.get('#text-id-email').type(emailAddress);
        //manual email error display
        cy.get('#about-you').click();
        if(!EmailValidator.validate(emailAddress))  {   
          this.getEmailError();
        }
    }

    private static selectTitle(title: string): void {
      if(title === 'Mr') {
        cy.get('#radio-id-Mr').click({force: true});
      }
      else if(title === 'Ms') {
        cy.get('#radio-id-Ms').click({force: true});
      }
      else if(title === 'Miss') {
        cy.get('#radio-id-Miss').click({force: true});
      }
      else {
        cy.get('#radio-id-Mrs').click({force: true});
      }
    }

    private static typeFirstName(firstName: string): void {
      cy.get('#text-id-firstName').type(firstName);
    }

    private static typeLastName(lastName: string): void {
      cy.get('#text-id-lastName').type(lastName);
    }

    private static typeDateOfBirth(dateOfBirth: string): void {
      var day = dateOfBirth.split('-')[0];
      var month = dateOfBirth.split('-')[1];
      var year = dateOfBirth.split('-')[2];
      cy.get('#text-id-day').type(day);
      cy.get('#text-id-month').type(month);
      cy.get('#text-id-year').type(year);
    }

    private static typePhoneNumber(phoneNumber: string): void {
      var passedPhone = parsePhoneNumberFromString(phoneNumber);
      if(passedPhone?.isValid() || passedPhone?.country === 'GB') {
        cy.get('#text-id-phone').type(phoneNumber.split(' ')[1]);
      }
      else {
        cy.get('#text-id-phone').type(phoneNumber.split(' ')[1]);
        cy.get('#about-you').click();
        this.getPhoneError();
      }
    }

    private static selectEmploymentStatus(employmentStatus: string): void {
      if(employmentStatus === 'Employed full-time') {
        cy.get('#radio-id-EMPLOYED_FULL_TIME').click({force: true});
      }
      else if(employmentStatus === 'Self-employed') {
        cy.get('#radio-id-SELF_EMPLOYED').click({force: true});
      }
      else if(employmentStatus === 'Director of a limited company') {
        cy.get('#radio-id-OWNER_OR_PARTNER').click({force: true});
      }
      else if(employmentStatus === 'Employed part-time') {
        cy.get('#radio-id-EMPLOYED_PART_TIME').click({force: true});
      }
      else if(employmentStatus === 'Currently unemployed') {
        cy.get('#radio-id-UNEMPLOYED').click({force: true});
      }
      else if(employmentStatus === 'Retired, not working') {
        cy.get('#radio-id-RETIRED').click({force: true});
      }
      else {
        cy.get('#radio-id-HOMEMAKER').click({force: true});
      }
    }

    private static typeAnnualIncomeBeforeTax(annualIncome: string): void {
      cy.get('#text-id-annualIncome').type(annualIncome);
    }

    private static selectHomeOwnership(homeOnwership: string): void {
      if(homeOnwership === 'Yes, outright owner') {
        cy.get('#radio-id-OWNER_NO_MORTGAGE').click({force: true});
      }
      else if(homeOnwership === 'Yes, with mortgage') {
        cy.get('#radio-id-OWNER_WITH_MORTGAGE').click({force: true});
      }
      else {
        cy.get('#radio-id-RENTING').click({force: true});
      }
    }

    private static typePostCode(postalCode: string): void{
      var isValidPassedPostalCode = PostCodeValidator.postcodeValidator(postalCode, 'UK');
      if(isValidPassedPostalCode) {
        cy.get('#text-id-postCode').type(postalCode);
      }
      else {
        cy.get('#text-id-postCode').type(postalCode);
        cy.get('#about-you').click();
        this.getPostCodeError();
      }
    }
}