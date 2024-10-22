Feature: Trycka på Enter the cafe

    Som användare vill jag kunna trycka på knappen "Enter the cafe" för att spelaren ska kunna gå in på cafet och få tre nya alternativ.


    Scenario: knappen Enter the cafe
    Given att användaren är inne på hemsidan "http://localhost:3000"
    When användaren trycker på knappen "Enter the cafe"
    Then användaren ska få tre nya knapp alternativ
