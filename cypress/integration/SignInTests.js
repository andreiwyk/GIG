
beforeEach(() => {
	cy.visit(Cypress.config('baseUrl'))
})

describe('Sing In Tests', function (){
	it('Valid account should sign in successfully', function(){
		// Arrange - setup initial app state
		cy.get('a.login').click()
		
		// Act - take an action
		cy.get('#login_form')
		.find('#email')
		.type(Cypress.env('email'))
		
		cy.get('#login_form')
		.find('#passwd')
		.type(Cypress.env('password'))
		
		cy.get('#login_form')
		.find('#SubmitLogin')
		.click()
		
		// Assert
		cy.get('#center_column h1.page-heading')
		.should('have.text', 'My account')
		.should('be.visible')
		
		cy.get("#header a[title='Log me out']")
		.should('contain', 'Sign out')
		.should('be.visible')
	})
	
	it('Correct user with wrong password should fail authentication', function(){
		// Arrange - setup initial app state
		cy.get('a.login').click()
		
		// Act - take an action
		cy.get('#login_form')
		.find('#email')
		.type(Cypress.env('email'))
		
		cy.get('#login_form')
		.find('#passwd')
		.type(Cypress.env('wrongPassword'))
		
		cy.get('#login_form')
		.find('#SubmitLogin')
		.click()
		
		// Assert
		cy.get('#center_column div[class="alert alert-danger"]')
		.should('contain', 'Authentication failed.')
	})
	
	it('Non-existent email should fail authentication', function(){
		// Arrange - setup initial app state
		cy.get('a.login').click()
		
		// Act - take an action
		cy.get('#login_form')
		.find('#email')
		.type(Cypress.env('nonExistentEmail'))
		
		cy.get('#login_form')
		.find('#passwd')
		.type(Cypress.env('wrongPassword'))
		
		cy.get('#login_form')
		.find('#SubmitLogin')
		.click()
		
		// Assert
		cy.get('#center_column div[class="alert alert-danger"]')
		.should('contain', 'Authentication failed.')
	})
	
	it('Custom script tag in email should mark email field as invalid', function(){
		// Arrange - setup initial app state
		cy.get('a.login').click()
		
		// Act - take an action
		cy.get('#login_form')
		.find('#email')
		.type('<script>location.reload()</script>')
		
		cy.get('#login_form')
		.find('#passwd')
		.type(Cypress.env('wrongPassword'))
		
		// Assert
		cy.get('#login_form>div:first>div:first')
		.should('have.class', 'form-error')
	})
	
	it('Login with script tag in email should return invalid email address', function(){
		// Arrange - setup initial app state
		cy.get('a.login').click()
		
		// Act - take an action
		cy.get('#login_form')
		.find('#email')
		.type('<script>location.reload()</script>')
		
		cy.get('#login_form')
		.find('#passwd')
		.type(Cypress.env('wrongPassword'))
		
		cy.get('#login_form')
		.find('#SubmitLogin')
		.click()
		
		// Assert
		cy.get('#center_column div[class="alert alert-danger"]')
		.should('contain', 'Invalid email address.')
	})
})