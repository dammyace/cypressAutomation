import ForgotPassword_Page from "../pages/forgotpasswordpage"

describe('forgotpassword', () =>{
    const forgotpasswordpage = new ForgotPassword_Page;


    it('As a user i want to reset password', ()=> {
        forgotpasswordpage.reset()

    })

    it('check error message is displayed when incorrect email is use to rest password', ()=> {
        forgotpasswordpage.login()
    })

})