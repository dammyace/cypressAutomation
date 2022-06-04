class Home_Page{
    visit(){
        cy.visit('/index.php')
    }

    clickSignIn(){
        cy.get('.login').click()
    }



}

export default Home_Page;