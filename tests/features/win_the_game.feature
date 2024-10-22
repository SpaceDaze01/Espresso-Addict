Feature: Win the game
  As a user I want to win the game by obtaining 5 cups of espresso (based on my empirical knowledge about how to win the game).

  Scenario: At the right place with the right starting values
    Given that I have started the game by navigating to "http://localhost:3000"
    Then the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "nothing cool"
    And I should be at the location "outside the Cloud Forest Cafe"

  Scenario: I navigate from outside the Cloud Forest Cafe to a crowded friendly bar
    Given that I make the choice to "Go north"
    And that I make the choice to "Go east"
    Then the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "nothing cool"
    And I should be at the location "a crowded bar where everyone is friendly"

  Scenario: I stay at the crowded friendly bar and wait for the bartender to give me a beer
    Given that I am at the location "a crowded bar where everyone is friendly"
    When I wait for the event "The bartender offers you a can of beer for free" to take place
    Then the value of my "Health" should be "less than before"
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "a can of beer"

  Scenario: I navigate from outside the crowded friendly bar to the guitarist and the sax player
    Given that I make the choice to "Go west"
    And that I make the choice to "Go south"
    And that I make the choice to "Go south"
    And that I make the choice to "Go west"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "a can of beer"
    And I should be at the location "A guitarist and a sax player"

  Scenario: I stay with guitarist and the sax player
    Given that I am at the location "A guitarist and a sax player"
    When I wait for the event "why don't come on up and jam with us?" to take place
    Then the value of my "Health" should be "less than before"
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "a can of beer"
    And I should be given the new choice "Jam with the band"

  Scenario: I choose to jam with the guitarist and the sax player
    Given that I am at the location "A guitarist and a sax player"
    And that I make the choice to "Jam with the band"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 15
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "a can of beer"

  Scenario: I navigate from the guitarist and the sax player to inside the Cloud Forest Cafe
    Given that I am at the location "A guitarist and a sax player"
    And that I make the choice to "Go east"
    And that I make the choice to "Go north"
    And that I make the choice to "Enter the cafe"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 15
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "a can of beer"
    And I should be at the location "in the Cloud Forest Cafe"

  Scenario: I stay at the Cloud Forest Cafe and wait for the barista to call a friend
    Given that I am at the location "in the Cloud Forest Cafe"
    When I wait for the event "The barista is in a dark corner phoning a friend" to take place
    Then the value of my "Health" should be "less than before"
    And the value of my "Money" should be 15
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "a can of beer"
    And I should be given the new choice "Give beer to barista"

  Scenario: I give the barista my beer
    Given that I am at the location "in the Cloud Forest Cafe"
    And that I make the choice to "Give beer to barista"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 15
    And the value of my "Espressos" should be 2
    And my hipster bag should contain "nothing cool"

  Scenario: I buy the third espresso of the day
    Given that I am at the location "in the Cloud Forest Cafe"
    And that I make the choice to "Buy an espresso"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 3
    And my hipster bag should contain "nothing cool"

  Scenario: I buy the fourth espresso of the day
    Given that I am at the location "in the Cloud Forest Cafe"
    And that I make the choice to "Buy an espresso"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 5
    And the value of my "Espressos" should be 4
    And my hipster bag should contain "nothing cool"

  Scenario: I buy the fifth espresso of the day
    Given that I am at the location "in the Cloud Forest Cafe"
    And that I make the choice to "Buy an espresso"
    Then the value of my "Health" should be "unchanged"
    And the value of my "Money" should be 0
    And the value of my "Espressos" should be 5
    And my hipster bag should contain "nothing cool"
    And I should be at the location "full of caffeine"
    And I should be given the new choice "Play again"