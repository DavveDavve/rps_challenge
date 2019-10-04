function RPS(userChoice) {

  let choiceStack = ['Rock', 'Paper', 'Scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = choiceStack[randomNum];

  if (userChoice === computerChoice) {
      return draw(userChoice);
  } else if (['RockScissors', 'PaperRock', 'ScissorsPaper'].indexOf(userChoice + computerChoice) != -1) {
      return win(userChoice);
  } else {
      return loss(userChoice);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RPS;
} 