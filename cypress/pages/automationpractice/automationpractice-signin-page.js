import AutomationpracticeLoggedinPage from './automationpractice-loggedin-page';
import AutomationpracticeSearchPage from './automationpractice-search-page';

const SIGNIN_LINK = 'a.login';
const LOGIN_FORM = '#login_form';
const EMAIL_TEXT = '#email';
const PASSWORD_TEXT = '#passwd';
const SIGNIN_BUTTON = '#SubmitLogin';
const CENTER_COLUMN_ALERT_DANGER = '#center_column div[class="alert alert-danger"]';
const EMAILFIELD_ALERT_INVALID = '#login_form>div:first>div:first';

const SEARCH_BOX = '#searchbox';
const SEARCH_QUERY_TOP = '#search_query_top';
const SEARCH_SUBMIT = 'button[type="submit"]';


class AutomationpracticeSigninPage {
  static visit() {
    cy.visit('/');
  }
  
  static pressSignInLink(){
	  cy.get(SIGNIN_LINK).click();
  }
  
  static typeEmail(email){
	  cy.get(LOGIN_FORM)
	  .find(EMAIL_TEXT)
	  .type(email);
  }
  
  static typePassword(password){
	  cy.get(LOGIN_FORM)
	  .find(PASSWORD_TEXT)
	  .type(password);
  }

  static pressSignIn(){
	  cy.get(LOGIN_FORM)
	  .find(SIGNIN_BUTTON)
	  .click();
	  
	  return new AutomationpracticeLoggedinPage();
  }
  
  static search(term){
	  cy.get(SEARCH_BOX)
		.find(SEARCH_QUERY_TOP)
		.type(term);
		
	  cy.get(SEARCH_BOX)
    	.find(SEARCH_SUBMIT)
		.click();
		
	  cy.wait(500);
	  
	  return new AutomationpracticeSearchPage();
  }
  
  static expect() {
    return {
      toSeeAuthenticationFailed: () => {
        cy.get(CENTER_COLUMN_ALERT_DANGER)
		.should('contain', 'Authentication failed.');
      },
	  
	  toSeeEmailFieldMarkedAsInvalid: () => {
        cy.get(EMAILFIELD_ALERT_INVALID)
		.should('have.class', 'form-error');
      },
	  
	  toSeeInvalidEmailAddress: () => {
        cy.get(CENTER_COLUMN_ALERT_DANGER)
		.should('contain', 'Invalid email address.');
      }	  
	  
    };
  }
}

export default AutomationpracticeSigninPage;
