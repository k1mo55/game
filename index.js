const computerplay = ()=>{
    const options =["rock","paper","scissors"];
    return options[ Math.floor(Math.random()*options.length)];
}
const playerselection = ()=>{
    return prompt("choose your option : rock-paper-scissors");
}
const round = (playerselection,computerplay)=>{
    
        if(playerselection.trim().toLowerCase()=="rock"){
            if(computerplay=="rock"){
                return "draw";
            }
            else if(computerplay=="paper"){
                return "lose";
            }
            else if (computerplay=="scissors"){                
                return "win";
            }

        }

        else if(playerselection.trim().toLowerCase()=="paper"){
            if(computerplay=="paper"){               
                return "draw";
            }
            else if(computerplay=="scissors"){                
                return "lose";
            }
            else if (computerplay=="rock"){
                return "win";

            }
        }
        else if(playerselection.trim().toLowerCase()=="scissors"){
            if(computerplay=="scissors"){           
                return "draw";
            }
            else if(computerplay=="rock"){               
                return "lose";
            }
            else if (computerplay=="paper"){               
                return "win";
            }
        }    
    }


let playerscore=0;
let computerscore=0;
let  i=0;
const game = ()=>{
    while (i<5){
     const result=round(playerselection(),computerplay());
        if (result=="win"){
            console.log("won the round");
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
