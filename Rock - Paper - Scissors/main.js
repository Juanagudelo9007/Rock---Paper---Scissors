let playerScore = 0
let computerScore = 0 

function playGame (userChoice) { 
    const choices = ['rock','paper','scissors']
    const computerChoice =  choices [Math.floor(Math.random() * 3)]

        let result = ''
     
        if (userChoice === computerChoice){ 
            result = `Both players chose ${userChoice}`
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') || 
            (userChoice === 'scissors' && computerChoice === 'paper') || 
            (userChoice === 'paper' && computerChoice === 'rock') 
             ){
                result =   `You Won ${userChoice} Beats ${computerChoice}`
                playerScore++
             } else { 
                result = `You Lost ${computerChoice} Beats ${userChoice}`
                computerScore++
             }
             
                document.getElementById("result").textContent = result;
                document.getElementById("score").textContent = `Player ${playerScore} | Computer ${computerScore}`
        
                if (playerScore === 3 || computerScore === 3){
                    endGame()
                }
            }
            function endGame(){ 
                 const finalResult = playerScore === 3 ? `Congatulations You Won` : `Sorry You Lost`
                 document.getElementById('result').textContent = finalResult

                 document.getElementById('btnrock').disabled = true
                 document.getElementById('btnscissors').disabled = true
                 document.getElementById('btnpaper').disabled = true
            }



            