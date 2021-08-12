import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../page-objects/test-login-page';

const testLoginPage = new LoginPage();

// Step definitions for Login, Assertions and Logout

Given('I visit the login page', () => {
  testLoginPage.visit();
});

Then('I login as {string}', (userName) => {
  cy.get('#username').clear().type(userName);
});

Then('I enter password as {string}', (passWord) => {
  cy.get('#password').clear().type(passWord);
});

When('I click on Login button', () => {
  cy.xpath('//*[@id="login"]/button/i').click();
});

Then('I am in the {string}', (areatext) => {
  cy.contains(areatext);
});

Then('Error message {string} is displayed', (errtext) => {
cy.contains(errtext);
});

When('I click on Logout button', () => {
  cy.xpath('//*[@id="content"]/div/a/i').click();
});

Then('I see the message {string}', (logoutmsg) => {
  cy.contains(logoutmsg);
});

