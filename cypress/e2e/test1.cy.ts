import { HomePage } from "../../src/pageobjects/HomePage"

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://my.gov.au')
      cy.viewport(1536, 960)
    })
  
    it('Test header navigation', () => {
        let home=new HomePage()
        home
        .header.toHome()
        .header.toBrowse()
        .header.toSearch()
        .header.tocreateAccount()
        .header.toHelp()
        .header.toSignIn()
    })
  
    it('Test footer navigation', () => {
        let home=new HomePage()
        home
        .footer.toAbout()
        .footer.toHelp()
        .footer.toContact()
        .footer.toFeedback()
    })
})