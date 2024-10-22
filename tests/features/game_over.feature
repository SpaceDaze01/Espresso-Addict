Feature: Game over 

    Som användare ska man kunna förlora spelet.


    Scenario: Förlora spelet
    Given att spelaren är på spelets sida "http://localhost:3000"
    When användaren klickar på "Wait" knappen 7 gånger
    Then spelet avslutas och användaren har förlorat 
