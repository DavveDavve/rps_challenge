describe('Rock Paper Scissor basic logic', () => {
    let rps = new RPS
    let rock = 1
    let paper = 2
    let scissors = 3
    function RPS() {
        this.check = (userChoice, ComputerChoice) => {
            if ((userChoice==2 && ComputerChoice==1)
            ||(userChoice==1 && ComputerChoice==3)
            ||(userChoice==3 && ComputerChoice==2)){
                return 'Win';
            } else if ((userChoice==1 && ComputerChoice==2)
            ||(userChoice==3 && ComputerChoice==1)
            ||(userChoice==2 && ComputerChoice==3)) {
                return 'Loss';
            } else if (userChoice == ComputerChoice) {
                return 'Draw'
            };
        }
    }
    it('rock wins over scissors', () => {
        let userChoice = rock
        let computerChoice = scissors
        expect(rps.check(userChoice, computerChoice)).to.eql('Win')
    })
    it('paper wins over rock', () => {
        let userChoice = paper
        let computerChoice = rock
        expect(rps.check(userChoice, computerChoice)).to.eql('Win')
    }) 
    it('paper loses to scissors', () => {
        let userChoice = paper
        let computerChoice = scissors
        expect(rps.check(userChoice, computerChoice)).to.eql('Loss')
    })
    it('if user and computer have same choice', () => {
        let userChoice = paper
        let computerChoice = paper
        expect(rps.check(userChoice, computerChoice)).to.eql('Draw')
    })
})