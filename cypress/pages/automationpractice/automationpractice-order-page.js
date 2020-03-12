import AutomationpracticeCheckoutPage from './automationpractice-checkout-page';

const CART_ITEMS = '#cart_summary>tbody>tr';
const CART_ITEM_QUANTITY_INPUT = 'td[class="cart_quantity text-center"]>input[type="text"]';
const CART_ITEM_DELETE = 'td[class="cart_delete text-center"]>div>a';
const CART_PROCEED_TO_CHECKOUT = 'p[class="cart_navigation clearfix"]>a';

class AutomationpracticeOrderPage {
  
  static setQuantityOfTheSecondItemToTwo(){
	  cy.get(CART_ITEMS)
		.eq(1)
		.find(CART_ITEM_QUANTITY_INPUT)
		.type("2");
		
	  cy.wait(500);
  }
  
  static removeTheFirstItemFromTheCart(){
	  cy.get(CART_ITEMS)
		.first()
		.find(CART_ITEM_DELETE)
		.click();
		
	  cy.wait(1000);
  }
  
  static pressProceedToCheckout(){
	  cy.get(CART_PROCEED_TO_CHECKOUT)
		.first()
		.click();
	  
	  return new AutomationpracticeCheckoutPage();
  }  
}

export default AutomationpracticeOrderPage;