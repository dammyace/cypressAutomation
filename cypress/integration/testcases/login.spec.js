import SignIn_Page from "../pages/signinpage.js"

import MyAccount_Page from "../pages/myaccountpage.js"


describe('Login Test', () =>{
    const signinpage = new SignIn_Page;
    const myaccountpage = new MyAccount_Page;

    it('check user can login successfully', () =>{
        signinpage.login("dammyace007@gmail.com","today01")
        myaccountpage.verifyMyAcoount()
        myaccountpage.clickSignOut()
    
    })

    it('check error message is displayed when user enter incorrect details', ()=>{
        signinpage.login("maxtest+2@yahoo.com","today01")
        cy.get('#center_column > :nth-child(2) > p').contains('There is 1 error')
        

    })


})