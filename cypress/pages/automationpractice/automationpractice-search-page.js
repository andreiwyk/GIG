import AutomationpracticeOrderPage from './automationpractice-order-page';

const PRODUCT_LIST = 'ul[class="product_list grid row"]>li';
const ADD_TO_CART_BUTTON = 'div.button-container a[title="Add to cart"]';
const LAYER_CART = '#layer_cart';
const LAYER_CART_CONTINUE_SHOPPING = 'div[class="button-container"]>span';
const LAYER_CART_PROCEED_TO_CHECKOUT = 'div[class="button-container"]>a';

class AutomationpracticeSearchPage {
  
  static addFirstItemToCart(){
	  cy.get(PRODUCT_LIST)
		.first()
		.find(ADD_TO_CART_BUTTON)
		.click();
		
	  cy.wait(500);
	  
	  cy.get(LAYER_CART)
		.find(LAYER_CART_CONTINUE_SHOPPING)
		.click();
		
	  cy.wait(1000);
  }
  
  static addSecondItemToCart(){
	  cy.get(PRODUCT_LIST)
		.eq(1)
		.find(ADD_TO_CART_BUTTON)
		.click();
		
	  cy.wait(500);
		
	  cy.get(LAYER_CART)
		.find(LAYER_CART_PROCEED_TO_CHECKOUT)
		.click();
	
	  cy.wait(1000);
	  
	  return new AutomationpracticeOrderPage();
  }
}

export default AutomationpracticeSearchPage;