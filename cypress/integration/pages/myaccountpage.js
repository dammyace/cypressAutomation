class MyAccount_Page{
    
    verifyMyAcoount(){
        cy.get('.account').contains('adedamola adeosun')
    }
    clickSignOut(){
        cy.get('.logout').click()
    }
}

export default MyAccount_Page;