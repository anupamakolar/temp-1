// import creds from '../../../fixtures/json/creds.json';
import url from '../../fixtures/json/url.json';

let loginPageElements = {
  passwordInputField: '#txtPassword',
  signInButton: '#btnSignIn',
  usernameInputField: '#txtUserName',
};

export default class LoginPage {
  visit() {
    cy.visit(url.testUrl);
    return this;
  }

  // login() {
  //   cy.get(adminLoginPageElements.usernameInputField)
  //     .clear()
  //     .type(creds.tpg_admin_username)
  //     .wait(500);
  //   cy.get(adminLoginPageElements.passwordInputField)
  //     .clear()
  //     .type(creds.tpg_admin_password)
  //     .wait(500);
  //   cy.get(adminLoginPageElements.signInButton).click();
  // }
}
