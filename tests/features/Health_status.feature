Feature: Health status

    Som användare ska man kunna se status för hälsan i spelet och hur den förändras. 
    

    Scenario: Health status och förändringar
    Given att användaren är på spel webbsidan "http://localhost:3000"
    When användaren integrerar genom att trycka på olika knappar 
    Then minskar spelarens hälsotillstånd