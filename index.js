const computerplay = ()=>{
    const options =["rock","paper","scissors"];
    return options[ Math.floor(Math.random()*options.length)];
}
const playerselection = ()=>{
 const answer =prompt("choose your option : rock-paper-scissors").toLowerCase().trim();
 if ( answer === "rock"|| answer === "paper" ||answer === "scissors") {
    return answer;
  } 
  else {
      console.log("wrong input");
       playerselection();
  }
}
const round = (playerselection,computerplay)=>{
    
    if (playerselection === computerplay) {
       return "draw";
      } else if (playerselection === "rock" && computerplay=== "scissors") {
        return "win";
      } else if (playerselection === "paper" && computerplay === "rock") {
        return "win";
      } else if (playerselection === "scissors" && computerplay === "paper") {
        return "win"
      } else {
        return "lose";
      }
    
    }

let playerscore=0;
let computerscore=0;
let  i=0;
const game = ()=>{
    while (i<5){
     const result=round(playerselection(),computerplay());
        if (result=="win"){
            console.log("one the round");
            playerscore++;
            i++;
           
        }
        else if (result=="lose")
        {
            console.log("lost the round");
            computerscore++;
            i++;
            
        }
        else if (result=="draw")
        {
            console.log("draw");
            i++;
            
        }
    }
}
game();
if(playerscore>computerscore){
    console.log("you win");
}
else if (playerscore<computerscore)
{
    console.log("you lose");
}
else 
{
  console.log("it is a draw");
}
