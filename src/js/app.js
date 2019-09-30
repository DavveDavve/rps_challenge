let userWin = 0;
let computerWin = 0;
let userDraw = 0;

function RPS(userChoice) {
    
    let choiceStack = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum]; 

    if (userChoice == computerChoice) {
            document.getElementById('game-message').innerHTML = "It's a Draw!" + `The Computer chose ${computerChoice}!`;
            userDraw++;
            document.getElementById('draws').innerHTML = userDraw.toString();
    } else if (["RockScissors", "PaperRock", "ScissorsPaper"].indexOf(userChoice + computerChoice) != -1) {
            document.getElementById('game-message').innerHTML = "You Won!" + `The Computer chose ${computerChoice}!`;
            ++userWin;
            document.getElementById('wins').innerHTML = userWin.toString();
    } else {
            document.getElementById('game-message').innerHTML = "You Lost!" + `The Computer chose ${computerChoice}!`;
            computerWin++;
            document.getElementById('losses').innerHTML = computerWin.toString();
    }
}

// 
    function onClickReset() {
    userWin = 0;
    document.getElementById('wins').innerHTML = userWin.toString();
    userDraw = 0;
    document.getElementById('draws').innerHTML = userDraw.toString();
    computerWin = 0;
    document.getElementById('losses').innerHTML = computerWin.toString();
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = RPS;
} 
