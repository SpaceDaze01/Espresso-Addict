Feature: Health status

    As a user I should be able to see the status bar for the health and see how it changes when I interact with the game.


    Scenario: Health status bar
        Given that the user is on the first page "http://localhost:3000"
        When the user interact by clicking on different buttons on the page
        Then the health condition is lowered