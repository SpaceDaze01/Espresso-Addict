Feature: Full screen mode

    As a user I should be able to play in full screen mode.


    Scenario: Full screen mode
        Given that the user is on the game page "http://localhost:3000"
        When the user clicks on the "Full screen" icon
        Then the user should be able to play in full screen mode "true"