Feature: Manage loans page
 Test user interface functionalities of the loans page

Background: Go to Get my personalised rates form
    Given The user is in loans page
    When The user clicks on get my personalised rates button

Scenario: Fulfill Get my personalised rates form with valid values
    When The user fulfills the form with the values
    | loanNeed  | emailAddress          | title   | firstName   |lastName   | dateOfBirth   | phoneNumber   | employmentStatus   | anualIncomeBeforeTax   | homeOwnership         | postCode |
    | Car       | xavier-test@zopa.com  | Mr      | Xavier      | Casafont  | 27-02-1990    | +44 2075806060| Employed full-time | 42000                  | Yes, with mortgage    | SE1 2QG  |
    Then The user is available to complete the form

Scenario: Fulfull Get my personalised rates with invalid email address
    When The user fulfills the form with the values
    | loanNeed  | emailAddress          | title   | firstName   |lastName   | dateOfBirth   | phoneNumber   | employmentStatus   | anualIncomeBeforeTax   | homeOwnership         | postCode |
    | Car       | xavier-invalid-email  | Mr      | Xavier      | Casafont  | 27-02-1990    | +44 2075806060| Employed full-time | 42000                  | Yes, with mortgage    | SE1 2QG  |
    Then The email invalid error "Oops, that doesn't look quite right. Please check your email address." is displayed