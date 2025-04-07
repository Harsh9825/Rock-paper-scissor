let yourScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#massage");


const genComChoice = () => {
    let option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const userScorePara= document.querySelector("#yourScore");
const compScorePara= document.querySelector("#comScore");

const drawGame = () =>{

    msg.innerText="Game draw! Play again";
    msg.style.backgroundColor="yellow";
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        yourScore++;
        userScorePara.innerText= yourScore;
        msg. innerText= "You Win!";
        msg. style.backgroundColor="green";
    } else{
       comScore++;
       compScorePara.innerText= comScore;
        msg. innerText="You lose!";
        msg. style.backgroundColor="red";
    }
};

const playGame =(userChoice) =>{
    console.log("User choice =",userChoice);

    const compChoice = genComChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});