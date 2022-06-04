class ForgotPassword_Page{


    reset(){
        cy.visit('/index.php')
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('#email').type('laura@gmail.com')
        cy.get('.submit > .btn > span').click()
        cy.get('.alert').contains('A confirmation email has been sent to your address: laura@gmail.com')

    }
    login(){
        cy.visit('/index.php')
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('#email').type('hade@gmail.com')
        cy.get('.submit > .btn > span').click()
        cy.get('ol > li').contains('There is no account registered for this email address')


        
    }

}

export default ForgotPassword_Page;