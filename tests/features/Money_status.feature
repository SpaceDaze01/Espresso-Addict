Feature: Money status

    As a user I should be able to see how much money i have in the game after an interaction.

    Scenario: Money status
        Given that the user is on the site "http://localhost:3000"
        When the user clicks on the button "Enter the cafe"
        And clicks on "Buy an espresso"
        Then the user should be able to see money status after the interaction