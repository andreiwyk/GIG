Feature: Shopping Cart
  Scenario: Unauthenticated user should reach Sign In tab upon Proceed to checkout
    Given I'm at automationpractice
    And I search for 'black dress'
	When I add first item to cart
	And I add second item to cart
	And I set the quantity of the second item to two
	And I remove the first item from the cart
    And I press proceed to checkout
	Then I See Sign In as second order step
	
  Scenario: Authenticated user should reach Address tab upon Proceed to checkout
	Given I'm at automationpractice
	And I press Sign In
    When I type email 'andrei.scurtu6174@gmail.com'
	And I type password 'laguna69'
	And I press 'Sign In'
	And I search for 'black dress'
	And I add first item to cart
	And I add second item to cart
	And I set the quantity of the second item to two
	And I remove the first item from the cart
    And I press proceed to checkout
	Then I See Address as third order step