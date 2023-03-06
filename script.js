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
    }   }

let counter1=0;
let counter2=0;
const winner=document.querySelector(".winner");
const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const div=document.querySelector(".display");
const buttons=document.querySelectorAll(".container button");

const fButton=document.createElement("button")
fButton.classList.add("b1")
fButton.textContent="Try again"
fButton.addEventListener("click",()=>{
    location.reload() 
})

const finnish=document.querySelector(".finnish")


buttons.forEach(button=>button.addEventListener("click", () =>{
    let round=playRound(button.className,getComputerChoice())
    div.textContent=round
    if(round.slice(4,5)=="w"){
        counter1++
    }
    else if (round.slice(4,5)=="l"){
        counter2++
    }
    p1.textContent= String(counter1)
    p2.textContent= String(counter2)
    if(counter1==5){
        winner.textContent="THE WINNER IS PLAYER ONE"
        finnish.appendChild(fButton)
    }
    else if(counter2==5){
        winner.textContent="THE WINNER IS COMPUTER"
        finnish.appendChild(fButton)
    }   
}))
