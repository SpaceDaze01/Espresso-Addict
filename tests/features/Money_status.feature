Feature: Money status

    Som användare ska man kunna se hur mycket pengar man har i spelet efter interaktion.

    Scenario: Money status
    Given att användaren är på spelets hemsida "http://localhost:3000"
    When användaren trycker på "Enter the cafe" knappen
    And trycker på "Buy an espresso"
    Then ska användaren se hur mycket pengar hen har kvar i spelet