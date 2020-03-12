const ORDER_STEPS = '#order_step>li';

class AutomationpracticeCheckoutPage {
  
  static expect() {
    return {
      secondOrderStepShouldBeSignIn: () => {
        cy.get(ORDER_STEPS)
		  .eq(1)
		  .should('have.class', 'step_current second');
      },
	  
	  thirdOrderStepShouldBeAddress: () => {
        cy.get(ORDER_STEPS)
		  .eq(2)
		  .should('have.class', 'step_current third');
      }
    };
  } 
}

export default AutomationpracticeCheckoutPage;