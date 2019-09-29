Feature: Playing RPS
    As a user
    In order to play the game
    I would like to be able to view a list possible options to select

    Scenario: Selecting a choice
        Given I visit the site
        Then I should see "Rock"
        And I should see "Paper"
        And I should see "Scissors"
        When I click "Rock"
