Feature: Sign In
  Scenario: Valid account should sign in successfully
    Given I'm at automationpractice
    And I press Sign In
    When I type email 'andrei.scurtu6174@gmail.com'
	And I type password 'laguna69'
	And I press 'Sign In'
    Then I See My Account
	And I See Sign Out

  Scenario: Correct user with wrong password should fail authentication
    Given I'm at automationpractice
    And I press Sign In
    When I type email 'andrei.scurtu6174@gmail.com'
    And I type password 'aaawwweee'
    And I press 'Sign In'
    Then I See 'Authentication failed.'

  Scenario: Non-existent email should fail authentication
    Given I'm at automationpractice
    And I press Sign In
    When I type non-existent email 'aaaa@tombolaverde.ro'
	And I type password 'aaawwweee'
	And I press 'Sign In'
	Then I See 'Authentication failed.'

  Scenario: Custom script tag in email should mark email field as invalid
    Given I'm at automationpractice
    And I press Sign In
	When I type custom script in email field
	And I type password 'aaawwweee'	
	Then I see email field marked as invalid
	
  Scenario: Login with script tag in email should return invalid email address
    Given I'm at automationpractice
    And I press Sign In
	When I type custom script in email field
	And I type password 'aaawwweee'
	And I press 'Sign In'
	Then I see invalid email address