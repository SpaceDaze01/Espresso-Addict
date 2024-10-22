Feature: Riktning i spelet

    Som användare ska man kunna få olika knapp alternativ vart jag vill förflytta mig i spelet.


    Scenario: Riktnings förslag 
    Given att användaren är på start sidan "http://localhost:3000"
    When användaren ska göra ett val i spelet
    Then ska användaren kunna få upp olika knapp alternativ vart hen vill gå 
    