Feature: Playing RPS
    As a user
    In order to play the game
    I would like to be able to select a choice and see an outcome

    Scenario: Winning
        Given I visit the site
        Then I should see "Rock"
        And I should see "Paper"
        And I should see "Scissors"
        When I click "Rock"
        And computer click "Paper"
        Then I should see "Congratulations, you won!"
