Feature: Game over

    As a user I should be able to lose the game.


    Scenario: Lose the game
        Given that the user is on the main page "http://localhost:3000"
        When the user clicks on the "Wait" buttom 7 times
        Then the game should end and the user should see a game over screen
