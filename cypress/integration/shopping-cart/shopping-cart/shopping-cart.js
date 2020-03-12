import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import AutomationpracticeSigninPage from '../../../pages/automationpractice/automationpractice-signin-page';
import AutomationpracticeLoggedinPage from '../../../pages/automationpractice/automationpractice-loggedin-page';

import AutomationpracticeSearchPage from '../../../pages/automationpractice/automationpractice-search-page';
import AutomationpracticeOrderPage from '../../../pages/automationpractice/automationpractice-order-page';
import AutomationpracticeCheckoutPage from '../../../pages/automationpractice/automationpractice-checkout-page';

Given(/^I search for 'black dress'$/, () => {
  AutomationpracticeSigninPage.search('black dress');
});

When(/^I add first item to cart$/, () => {
  AutomationpracticeSearchPage.addFirstItemToCart();
});

When(/^I add second item to cart$/, () => {
  AutomationpracticeSearchPage.addSecondItemToCart();
});

When(/^I set the quantity of the second item to two$/, () => {
  AutomationpracticeOrderPage.setQuantityOfTheSecondItemToTwo();
});

When(/^I remove the first item from the cart$/, () => {
  AutomationpracticeOrderPage.removeTheFirstItemFromTheCart();
});

When(/^I press proceed to checkout$/, () => {
  AutomationpracticeOrderPage.pressProceedToCheckout();
});

Then(/^I See Sign In as second order step$/, () => {
  AutomationpracticeCheckoutPage.expect().secondOrderStepShouldBeSignIn();
});

Then(/^I See Address as third order step$/, () => {
  AutomationpracticeCheckoutPage.expect().thirdOrderStepShouldBeAddress();
});

When(/^I type email 'andrei.scurtu6174@gmail.com'$/, () => {
  AutomationpracticeSigninPage.typeEmail('andrei.scurtu6174@gmail.com');
});

When(/^I type password 'laguna69'$/, () => {
  AutomationpracticeSigninPage.typePassword('laguna69');
});

When(/^I press 'Sign In'$/, () => {
  AutomationpracticeSigninPage.pressSignIn();
});

When(/^I search for 'black dress'$/, () => {
  AutomationpracticeSigninPage.search('black dress');
});