let userWin = 0;
let computerWin = 0;
let userDraw = 0;
let outcomeDisplay = document.getElementById('game-message')
let drawScore = document.getElementById('draws')
let userWinScore = document.getElementById('wins')
let userLoseScore = document.getElementById('losses')
let rockBtn = document.getElementById('Rock')
let paperBtn = document.getElementById('Paper')
let scissorsBtn = document.getElementById('Scissors')

  function draw(userChoice) {
    userDraw++;
    drawScore.innerHTML = userDraw;
    return outcomeDisplay.innerHTML = `You chose ${userChoice} ` + "and it's a draw! Better luck next time!";
  }

  function win(userChoice) {
    userWin++;
    userWinScore.innerHTML = userWin;
    return outcomeDisplay.innerHTML = `You chose ${userChoice} ` + "and you won! You outsmarted the AI!";
  }

  function loss(userChoice) {
    computerWin++;
    userLoseScore.innerHTML = computerWin.toString();
    return outcomeDisplay.innerHTML = `You chose ${userChoice} ` + "and you lost! Watch out for those pesky robots!";
  }

  function onClickReset() {
    userWin = 0;
    userWinScore.innerHTML = userWin.toString();
    userDraw = 0;
    drawScore.innerHTML = userDraw.toString();
    computerWin = 0;
    userLoseScore.innerHTML = computerWin.toString();
  };