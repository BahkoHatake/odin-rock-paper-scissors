function getComputerChoice(){
    let x=Math.floor(Math.random()*3)
    if (x==0){
        return("rock")
    }
    else if(x==1){
        return("paper")
    }
    else{
        return("scissors")
    }
}
function playRound(playerSelect, compSelect){
    let win =undefined
    playerSelect=playerSelect.toLowerCase()
    if (playerSelect=="rock"&&compSelect=="paper"){
        return ("You lose! Paper beats Rock")
    }
    else if (playerSelect=="rock"&&compSelect=="scissors"){
        return ("You win! Rock beats Scissor")
    }
    else if (playerSelect=="paper"&&compSelect=="scissors"){
        return ("You lose! Scissors beats Paper")
    }
    else if (playerSelect=="paper"&&compSelect=="rock"){
        return ("You win! Paper beats Rock")
    }
    else if (playerSelect=="scissors"&&compSelect=="rock"){
        return ("You lose! Rock beats Scissors")
    }
    else if (playerSelect=="scissors"&&compSelect=="paper"){
        return ("You win! Scissors beats Paper")
    }
    else{
        return("It is a draw!")
    }   
}
function game(){
    let counter1=0
    let counter2=0
    for (let i=0; i<5;i++){
        let compSelect=getComputerChoice()
        let playerSelect=prompt("Chouse ")
        let round=playRound(playerSelect,compSelect)
        console.log(round)
        let winner=round.charAt(4)
        if (winner=="w"){
            counter1++
        }
        else if (winner=="l"){
            counter2++    
    }
    }
    if(counter1>counter2){
        return("covek je pobedio")
    }
    else if(counter1<counter2){
        "Masina je pobedila"
    }
}

