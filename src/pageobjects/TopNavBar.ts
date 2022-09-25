import { HomePage } from "./HomePage"
import { NavPage } from "./NavPage"

const raisingkidsLink = '.top-navigation-bar__item  a[href*="raising-kids.html"]'
const livingarrngementsLink = '.top-navigation-bar__item  a[href*="living-arrangements.html"]'
const ageingLink = '.top-navigation-bar__item  a[href*="ageing.html"]'
const workLink = '.top-navigation-bar__item  a[href*="work.html"]'
const educationLink = '.top-navigation-bar__item  a[href*="education.html"]'
const healthanddisabilityLink = '.top-navigation-bar__item  a[href*="health-and-disability.html"]'




export class TopNavBar {
    
    toRaisingKids(): NavPage {
        cy.get(raisingkidsLink).click()
        return new NavPage()
    }
    
    toLivingArrangements(): NavPage {
        cy.get(livingarrngementsLink).click()
        return new NavPage()
    }
    
    toAgeing(): NavPage {
        cy.get(ageingLink).click()
        return new NavPage()
    }
    
    toWork(): NavPage {
        cy.get(workLink).click()
        return new NavPage()
    }
    
    toEducation(): NavPage {
        cy.get(educationLink).click()
        return new NavPage()
    }
    
    toHealthAndDisability(): NavPage {
        cy.get(healthanddisabilityLink).click()
        return new NavPage()
    }
}



// <ul role="list" class="top-navigation-bar__list">
//         <li class="top-navigation-bar__item ">
//             <a aria-current="true" href="/content/mygov/en/services/raising-kids.html" class="top-navigation-bar__link"><span>Raising kids</span></a>
//         </li>
    
//         <li class="top-navigation-bar__item ">
//             <a aria-current="true" href="/content/mygov/en/services/living-arrangements.html" class="top-navigation-bar__link"><span>Living arrangements</span></a>
//         </li>
    
//         <li class="top-navigation-bar__item ">
//             <a aria-current="true" href="/content/mygov/en/services/ageing.html" class="top-navigation-bar__link"><span>Ageing</span></a>
//         </li>
    
//         <li class="top-navigation-bar__item ">
//             <a aria-current="true" href="/content/mygov/en/services/work.html" class="top-navigation-bar__link"><span>Work</span></a>
//         </li>
    
//         <li class="top-navigation-bar__item ">
//             <a aria-current="true" href="/content/mygov/en/services/education.html" class="top-navigation-bar__link"><span>Education</span></a>
//         </li>
    
//         <li class="top-navigation-bar__item ">
//             <a aria-current="true" href="/content/mygov/en/services/health-and-disability.html" class="top-navigation-bar__link"><span>Health and disability</span></a>
//         </li>
//     </ul>

