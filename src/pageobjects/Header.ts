import { HomePage } from "./HomePage"
import { NavPage } from "./NavPage"

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
    
    toSearch(): NavPage {
        cy.get(searchLink).click()
        return new NavPage()
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

// <div class="cmp-custom-header__link-container">
//             <div class="cmp-custom-header__link-container-upper">
//                 <ul class="cmp-custom-header__list-upper">
//                     <li>
//                         <div data-habitat="C1"><a href="/content/mygov/en" class="cmp-custom-header__list-upper-active">Home</a></div>
//                     </li>
//                     <li>
//                         <a href="/content/mygov/en/services.html"><span>Browse</span></a>
//                     </li>
//                     <li>
//                         <a class="search-link" href="/content/mygov/en/search.html"><span>Search</span></a>
//                     </li>
//                 </ul>
//                 <div class="cmp-custom-header__menu-container">
//                     <button class="cmp-custom-header__menu-container__btn">
//                         <span class="cmp-custom-header__menu-container__label" data-open-label="Menu" data-closed-label="Close">Menu</span>
//                     </button>
//                 </div>
//                 <div><span data-habitat="C1"><div class="login-container no-initials-min-width"><button type="button" id="user-banner" class="sign-in sign-in--unauth"><div class="sign-in-btn" title="Not signed in"><span>Sign in</span></div></button></div></span></div>
//             </div>
//             <div class="cmp-custom-header__link-container-lower">
//                 <ul class="cmp-custom-header__list-lower">
//                     <li>
//                         <div data-habitat="C1"><a href="/en/create-account" class="">Create account</a></div>
//                     </li>
                    
//                         <li>
//                             <a href="/content/mygov/en/about/help.html">Help</a>
//                         </li>
                    
//                 </ul>
                
//             </div>
//         </div>