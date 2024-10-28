Feature: Health status

    As a user I should be able to see the status bar for the health and see how it changes when I interact with the game.


    Scenario: Health status bar
        Given that the user is on the first page "http://localhost:3000"
        When the user interacts by clicking on the "Wait" button on the page
        Then the "Health" condition should go down to 45