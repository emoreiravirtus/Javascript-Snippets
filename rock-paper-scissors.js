const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    let result
  
    userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ? result = userInput : result = 'Invalid Input'
  
    return result
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3)
    let choice
    switch(randomNumber){
      case(0):
      choice = 'paper'
      break
      case(1):
      choice = 'rock'
      break
      case(2):
      choice = 'scissors'
      break
    
    }
    return choice
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    let result
    if(userChoice == computerChoice){
    result = 'tie'
    return result
  }
  
  
    if(userChoice === 'rock'){
      computerChoice === 'paper' ? result = 'Computer won' : result = 'User won'
    }
    else if(userChoice === 'paper'){
      computerChoice === 'scissors' ? result = 'Computer won' : result = 'User won'
    }
    else{ // Assuming the userChoice was 'scissors'
      computerChoice === 'rock' ? result = 'Computer won' : result = 'User won'
    }
  
    return result
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb')
    // Secret Cheat: if user types 'bomb', he wins no matther what.
    if(userChoice === 'bomb'){
      console.log('User Won!')
      return
    }
    const computerChoice = getComputerChoice()
    const result = determineWinner(userChoice, computerChoice)
    console.log(`P1:${userChoice}, Computer: ${computerChoice} -> ${result}`)
  }
  
  playGame()
