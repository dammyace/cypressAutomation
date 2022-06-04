class CreateAccount_Page{
    
    create(){
        var faker = require("faker");
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email_create').type(faker.internet.email())
        cy.get('#SubmitCreate > span').click()
        cy.get(':nth-child(3) > .top').click()
        cy.get('#customer_firstname').type('adedamola')
        cy.get('#customer_lastname').type('adeosun')
        cy.get('#passwd').type('today01')
        cy.get('#days').select('10')
        cy.get('#months').select('August')
        cy.get('#years').select('1985')
        cy.get('#company').type('adeade')
        cy.get('#address1').type('1279 Limer Street')
        cy.get('#city').type('Atlanta')
        cy.get('#id_state').select('Georgia')
        cy.get('#postcode').type('30303')
        cy.get('#id_country').select('United States')
        cy.get('#phone_mobile').type('706-418-0251')
        cy.get('#submitAccount > span').click()
    }

    login(){
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('dammyace007@gmail.com')
        cy.get('#passwd').type('today01')
        cy.get('#SubmitLogin > span').click()


    }





}
export default CreateAccount_Page;