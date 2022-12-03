const computerplay = ()=>{
    const options =["rock","paper","scissors"];
    return options[ Math.floor(Math.random()*options.length)];
}
const playerselection = ()=>{
    return prompt("choose your option : rock-paper-scissors");
}
const round = (playerselection,computerplay)=>{
    
        if(playerselection.toLowerCase()=="rock"){
            if(computerplay=="rock"){
                // console.log("draw !!");
                return "draw";
            }
            else if(computerplay=="paper"){
                // console.log("you lose !");
                return "lose";
            }
            else if (computerplay=="scissors"){
                // console.log("you win !");
                return "win";

            }

        }

        else if(playerselection.toLowerCase()=="paper"){
            if(computerplay=="paper"){
                // console.log("draw !!");
                return "draw";
            }
            else if(computerplay=="scissors"){
                // console.log("you lose !");
                return "lose";
            }
            else if (computerplay=="rock"){
                // console.log("you win !");
                return "win";

            }
        }
        else if(playerselection.toLowerCase()=="scissors"){
            if(computerplay=="scissors"){
                // console.log("draw !!");
                return "draw";
            }
            else if(computerplay=="rock"){
                // console.log("you lose !");
                return "lose";
            }
            else if (computerplay=="paper"){
                // console.log("you win !");
                return "win";
            }

        }
    
    }

// const result = round(playerselection(),computerplay
// console.log(result);
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
  console.log("draw");
}