
beforeEach(() => {
	cy.visit(Cypress.config('baseUrl'))
})

describe('Shopping Cart Tests', function(){
	it('Unauthenticated user should reach Sign In tab upon Proceed to checkout', function(){
		// Arrange - setup initial app state
		cy.get('#searchbox')
		.find('#search_query_top')
		.type('black dress')
		
		cy.get('#searchbox')
		.find("button[type='submit']")
		.click()
		
		cy.wait(500)
		
		// Act - take an action
		
		// add first item to cart
		cy.get("ul[class='product_list grid row']>li")
		.first()
		.find("div.button-container a[title='Add to cart']")
		.click()
		
		cy.wait(500)		
		
		cy.get("#layer_cart")
		.find("div[class='button-container']>span")
		.click()
		
		cy.wait(1000)
		
		// add second item to cart
		cy.get("ul[class='product_list grid row']>li")
		.eq(1)
		.find("div.button-container a[title='Add to cart']")
		.click()
		
		cy.wait(500)
		
		cy.get("#layer_cart")
		.find("div[class='button-container']>a")
		.click()
		
		cy.wait(1000)
		
		// change the quantity of the second item to 2
		cy.get("#cart_summary>tbody>tr")
		.eq(1)
		.find("td[class='cart_quantity text-center']>input[type='text']")
		.type("2")
		
		cy.wait(500)
		
		// remove the first item from the cart
		cy.get("#cart_summary>tbody>tr")
		.first()
		.find("td[class='cart_delete text-center']>div>a")
		.click()
		
		cy.wait(1000)
		
		// click Proceed to checkout
		cy.get("p[class='cart_navigation clearfix']>a")
		.first()
		.click()
		
		// Assert - current step should be Sign in
		cy.get("#order_step>li")
		.eq(1)
		.should('have.class', 'step_current second')
	})
	
	
	
	it('Authenticated user should reach Address tab upon Proceed to checkout', function(){
		// Arrange - setup initial app state
		
		cy.get('a.login').click()
		
		cy.get('#login_form')
		.find('#email')
		.type(Cypress.env('email'))
		
		cy.get('#login_form')
		.find('#passwd')
		.type(Cypress.env('password'))
		
		cy.get('#login_form')
		.find('#SubmitLogin')
		.click()
		
		cy.wait(500)
		
		// search for black dress
		cy.get('#searchbox')
		.find('#search_query_top')
		.type('black dress')
		
		cy.get('#searchbox')
		.find("button[type='submit']")
		.click()
		
		cy.wait(500)
		
		// Act - take an action
		
		// add first item to cart
		cy.get("ul[class='product_list grid row']>li")
		.first()
		.find("div.button-container a[title='Add to cart']")
		.click()
		
		cy.wait(500)		
		
		cy.get("#layer_cart")
		.find("div[class='button-container']>span")
		.click()
		
		cy.wait(1000)
		
		// add second item to cart
		cy.get("ul[class='product_list grid row']>li")
		.eq(1)
		.find("div.button-container a[title='Add to cart']")
		.click()
		
		cy.wait(500)
		
		cy.get("#layer_cart")
		.find("div[class='button-container']>a")
		.click()
		
		cy.wait(1000)
		
		// change the quantity of the second item to 2
		cy.get("#cart_summary>tbody>tr")
		.eq(1)
		.find("td[class='cart_quantity text-center']>input[type='text']")
		.type("2")
		
		cy.wait(500)
		
		// remove the first item from the cart
		cy.get("#cart_summary>tbody>tr")
		.first()
		.find("td[class='cart_delete text-center']>div>a")
		.click()
		
		cy.wait(1000)
		
		// click Proceed to checkout
		cy.get("p[class='cart_navigation clearfix']>a")
		.first()
		.click()
		
		// Assert - current step should be Sign in
		cy.get("#order_step>li")
		.eq(2)
		.should('have.class', 'step_current third')
	})
	
	
})