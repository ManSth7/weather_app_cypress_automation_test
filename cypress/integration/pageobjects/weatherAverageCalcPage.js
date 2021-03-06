///<reference types ="Cypress" />

class weatherAverageCalcPage {

    searchForCity(city){
        cy.wait(10000);
        cy.get('[data-testid=searchModalInputBox]').invoke('removeAttr', 'disabled').type(city)
        cy.wait(1000)
        cy.get('[data-testid=searchModalInputBox]').type('{downArrow}')
        cy.get('[data-testid=searchModalInputBox]').type('{enter}')

    }

    selectItemList(){
        cy.get('[data-from-string="localsuiteNav_3_10 Day"]')
            .click({force : true, timeout : 3000});
    }

    calculateAverageOfHigherTemperature(){
        var avg1 = 0;
        cy.get('.DetailsSummary--highTempValue--3x6cL').each(($el, index, $list) => {
            avg1 +=parseFloat($el.text())
            if(index == $list.length - 1){
                avg1 = avg1/$list.length;
                cy.log("Average of Higher temperature level = "+ avg1);
            }
        });
    }

    calculateAverageOfLowerTemperature(){
        var avg2 = 0;
        cy.get('.DetailsSummary--lowTempValue--1DlJK').each(($el, index, $list) => {
            avg2 +=parseFloat($el.text())
            if(index == $list.length - 1){
                avg2 = avg2/$list.length;
                cy.log("Average of Lower temperature level = "+ avg2);
            }
        });
    }
}

export default  weatherAverageCalcPage