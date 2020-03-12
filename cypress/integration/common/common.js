import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import AutomationpracticeSigninPage from '../../pages/automationpractice/automationpractice-signin-page';

Given(/^I'm at automationpractice$/, () => {
  AutomationpracticeSigninPage.visit();
});

Given(/^I press Sign In$/, () => {
  AutomationpracticeSigninPage.pressSignInLink();
});
