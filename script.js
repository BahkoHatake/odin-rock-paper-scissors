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
    playerSelect=toLowerCase(playerSelect)
    if (playerSelect=="rock"&&compSelect=="paper"){
        return ("You lose! Paper beats Rock")
    }
    else if (playerSelect=="rock"&&compSelect=="scissors"){
        return ("You win! Rock beats Scissors")
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



function muda(x,y){
}