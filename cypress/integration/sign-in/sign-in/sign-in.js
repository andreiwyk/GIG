import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import AutomationpracticeSigninPage from '../../../pages/automationpractice/automationpractice-signin-page';
import AutomationpracticeLoggedinPage from '../../../pages/automationpractice/automationpractice-loggedin-page';

When(/^I type email 'andrei.scurtu6174@gmail.com'$/, () => {
  AutomationpracticeSigninPage.typeEmail('andrei.scurtu6174@gmail.com');
});

When(/^I type password 'laguna69'$/, () => {
  AutomationpracticeSigninPage.typePassword('laguna69');
});

When(/^I type password 'aaawwweee'$/, () => {
  AutomationpracticeSigninPage.typePassword('aaawwweee');
});

When(/^I press 'Sign In'$/, () => {
  AutomationpracticeSigninPage.pressSignIn();
});

Then(/^I See My Account$/, () => {
  AutomationpracticeLoggedinPage.expect().toSeeMyAccount();
});

Then(/^I See Sign Out$/, () => {
  AutomationpracticeLoggedinPage.expect().toSeeSignOut();
});

Then(/^I See 'Authentication failed.'$/, () => {
  AutomationpracticeSigninPage.expect().toSeeAuthenticationFailed();
});

When(/^I type non-existent email 'aaaa@tombolaverde.ro'$/, () => {
  AutomationpracticeSigninPage.typeEmail('aaaa@tombolaverde.ro');
});

When(/^I type custom script in email field$/, () => {
  AutomationpracticeSigninPage.typeEmail('<script>location.reload()</script>');
});

Then(/^I see email field marked as invalid$/, () => {
  AutomationpracticeSigninPage.expect().toSeeEmailFieldMarkedAsInvalid();
});

Then(/^I see invalid email address$/, () => {
  AutomationpracticeSigninPage.expect().toSeeInvalidEmailAddress();
});