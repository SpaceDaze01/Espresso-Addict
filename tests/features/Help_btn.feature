Feature: Help knappen

    Som användare ska man kunna trycka på Help knappen för att få information och regler om spelet.


    Scenario: Help knappen
    Given att användaren är på första sidan "http://localhost:3000"
    When användaren trycker på "Help" knappen
    Then kommer det upp en text med information och regler om spelet
