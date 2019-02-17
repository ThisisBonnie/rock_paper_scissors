const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  console.log(`You threw ${userInput}`)
  return userInput
} else {
  console.log('Please input either Rock, Paper or Scissors');
	}
}
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
      case 0:
        console.log('The Computer threw Rock')
        return 'rock';
      case 1:
        console.log('The Computer threw paper')
        return 'paper';
      case 2:
        console.log('The Computer threw scissors')
        return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === 'bomb') {
      return 'You win!'
    }	else if (userChoice === computerChoice) {
      return 'the game is a tie!'
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The Computer wins!'
      } else {
        return 'You win!'
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer wins!'
      } else {
        return 'You win!'
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer wins!'
      } else {
        return 'You win'
      }
    }
  }
  function playGame() {
	userChoice = getUserChoice('bomb')
	computerChoice = getComputerChoice()
	console.log(determineWinner(userChoice, computerChoice))
  }	
playGame()