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


