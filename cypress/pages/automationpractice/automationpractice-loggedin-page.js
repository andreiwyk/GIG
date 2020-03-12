const CENTER_COLUMN = '#center_column h1.page-heading';
const PAGE_HEADER = "#header a[title='Log me out']";

class AutomationpracticeLoggedinPage {
  static expect() {
    return {
      toSeeMyAccount: () => {
        cy.get(CENTER_COLUMN)
		.should('have.text', 'My account')
		.should('be.visible');
      },
	  
	  toSeeSignOut: () => {
        cy.get(PAGE_HEADER)
		.should('contain', 'Sign out')
		.should('be.visible');
      },
    };
  }
}

export default AutomationpracticeLoggedinPage;
