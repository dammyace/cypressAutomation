import CreateAccount_Page from "../pages/createaccountpage"


describe('createaccount', () =>{

    const createaccountpage = new CreateAccount_Page;

    it('check user can create an account succefully', () =>{
        createaccountpage.create()
    
    })

    it('check user can login in successfully',()=>{
        createaccountpage.login()



    })

})