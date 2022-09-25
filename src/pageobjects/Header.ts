import { HomePage } from "./HomePage"
import { NavPage } from "./NavPage"
import { SearchPage } from "./SearchPage"

const homeLink = '.cmp-custom-header__list-upper-active'
const browseLink = '.cmp-custom-header__link-container a[href*="services.html"]'
const searchLink = '.search-link'
const signInLink = '.sign-in-btn > span'
const createAccountLink = '.cmp-custom-header__list-lower a[href*="create-account"]'
const helpLink = '.cmp-custom-header__list-lower a[href*="help"]'

export class Header {
    
    toHome(): HomePage {
        cy.get(homeLink).click()
        return new HomePage()
    }
    
    toBrowse(): NavPage {
        cy.get(browseLink).click()
        return new NavPage()
    }
    
    toSearch(): SearchPage {
        cy.get(searchLink).click()
        return new SearchPage()
    }
    
    toSignIn(): NavPage {
        cy.get(signInLink).click()
        return new NavPage()
    }
    
    tocreateAccount(): NavPage {
        cy.get(createAccountLink).click()
        return new NavPage()
    }
    
    toHelp(): NavPage {
        cy.get(helpLink).click()
        return new NavPage()
    }
}
