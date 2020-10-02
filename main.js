// Dark Mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Global Variables
    const selRock = document.querySelector('#rock');
    const selPaper = document.querySelector('#paper');
    const selScissors = document.querySelector('#scissors');
    
    let = playerScore = 0;
    let = computerScore = 0;

    let computerChoice = computerPlay();
    let playerChoice = "";
    let playerWins = document.querySelector('#pWins');
    let computerWins = document.querySelector('#cWins');
    let result = document.querySelector('#res');
    const replay = document.querySelector('#replay');

// Fireworks
var fireworks = document.querySelector('[href="style2.css"]');
var stylesheet = fireworks.sheet || fireworks.styleSheet;
fireworks.disabled = true;

 function showFireworks() {
    fireworks.disabled = false;
}

result.textContent = 'Select Rock, Paper or Scissors to play. First to 5 wins.';

function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return 'rock';
    } else if (play === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(playerSel, computerSel) {
    let playerChoice = playerSel.toLowerCase();
    let computerChoice = computerSel;

    if ((playerChoice === 'rock' && computerChoice === 'scissors')
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerWins.textContent = `${playerScore += 1}`;
        result.textContent = `You win! ${playerChoice.slice(0, 1).toUpperCase()}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice}.`;
    } else if (playerChoice === computerChoice) {
        result.textContent = `It's a draw!`;
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')
    || (computerChoice === 'paper' && playerChoice === 'rock')
    || (computerChoice === 'scissors' && playerChoice === 'paper')) {
        computerWins.textContent = `${computerScore += 1}`;
        result.textContent = `You lose! ${computerChoice.slice(0, 1).toUpperCase()}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice}.`;
    } else if ((playerChoice !== 'rock', 'paper', 'scissors')) {
        result.textContent = `Something went wrong. Try again.`;
    }
};

function hideDisplay(){
    replay.style.display = "none";
};

replay.disabled = true;

function game(){
    playRound(playerSel, computerSel)

        if(playerScore > 4){
            result.textContent = `You won! Here's the score: ${playerScore} to ${computerScore}.`
            result.style.color = '#66bb6a';
            showFireworks();
            gameOver();
        }
        else if(computerScore > 4){
            result.textContent = `You Lose. Here's the score: ${playerScore} to ${computerScore}.` 
            result.style.color = '#ff4655';
            gameOver();
        }
};

selRock.addEventListener('click', ()=>{
    playerSel = "rock"
    computerSel = computerPlay()
    game()
  });
selPaper.addEventListener('click', ()=>{
    playerSel = "paper"
    computerSel = computerPlay()
    game()
  });
selScissors.addEventListener('click', ()=>{
    playerSel = "scissors"
    computerSel = computerPlay()
    game()
  });


function showDisplay(){
    replay.style.display = "block";
    replay.textContent = "Play Again?";
};

function gameOver(){
    selScissors.style.pointerEvents = 'none';
    selPaper.style.pointerEvents = 'none';
    selRock.style.pointerEvents = 'none';
    replay.disabled = false;
    showDisplay()
};

replay.addEventListener('click', ()=>{
    playAgain();
});

function playAgain(){
    selScissors.style.pointerEvents = 'auto';
    selPaper.style.pointerEvents = 'auto';
    selRock.style.pointerEvents = 'auto';
    result.textContent = "Select Rock, Paper or Scissors to play. First to 5 wins.";
    playerScore = 0;
    computerScore = 0;
    playerWins.textContent = playerScore;
    computerWins.textContent = computerScore;
    result.style.color = 'var(--font-color)';
    fireworks.disabled = true;
    hideDisplay()
};
