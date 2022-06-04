class SignIn_Page{

    login(email,password){
        cy.visit('/index.php')
        cy.get('.login').click()
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()

    }    
}

export default SignIn_Page;