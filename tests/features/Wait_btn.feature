Feature: Wait knappen

    Som användare ska jag kunna trycka på Wait knappen för att integrera med spelet.


    Scenario: Wait knappen 
    Given att användaren är spel sidan "http://localhost:3000"
    When användaren trycker på "Wait" knappen
    Then ska användaren kunna integrera med spelet med hjälp av olika direktiv som dyker upp