Feature: Playing Rock Paper Scissors
    As a user
    In order to play the game
    I would like to be able to select a choice and see an outcome

	Background:
		Given I visit the page

	Scenario: Visiting the site
		Then I should see "Press a button to play!"
		And I should see a button "Rock"
		And I should see a button "Paper"
		And I should see a button "Scissor"

	Scenario: Player can see a change in score
		Then I should see "Press a button to play!"
		And I should see "Scoreboard" 
		And I should see "0", "0", "0"
		When I click on "Rock"
		Then I should see "0", "1", "0"

	Scenario: Player can choose rock and see a message
		Then I should see "Press a button to play!"
		When I click on "Rock"
		Then I should see "You chose Rock"
