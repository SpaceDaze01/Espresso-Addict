Feature: Dubbel expresso och hipster bag 

    Som användare ska man kunna lägga in föremål i hipster bag och få en dubbel espresso om man hjälper baristan.

    Scenario: Hipster bag för föremål 
    Given att användaren är på webbsidan "http://localhost:3000"
    When användaren hjälper baristan med att exportera en öl
    Then ska användaren kunna lägga in den i sin hipster bag
    And användaren ska få två expressos som belöning