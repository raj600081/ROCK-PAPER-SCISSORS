//MY FIRST INTERACTIVE GAME
let getReady=confirm("Shall We Play rock,paper or scissors? ");
if(getReady){
    //plays
    let player=prompt("Please Enter rock,paper or scissors?");
    if(player){
       let playerNew= player.trim().toLowerCase();
        if (playerNew==="rock"  ||
            playerNew==="paper" ||
            playerNew==="scissors")
        {
            let computercChoice=(Math.floor(Math.random()*3)+1);
            let computer=computercChoice===1?"rock":
            computercChoice===2?"paper":"scissors";

            let result=playerNew===computer?alert("Tie game!"):
            playerNew==="rock"&&computer==="paper"?
            `player: ${playerNew}\ncomputer:${computer}\ncomputer Wins!`
            : playerNew==="scissors"&&computer==="rock"?
            `player: ${playerNew}\ncomputer:${computer}\ncomputer Wins!`
            : playerNew==="paper"&&computer==="scissors"?
            `player: ${playerNew}\ncomputer:${computer}\ncomputer Wins!`
            :`player: ${playerNew}\ncomputer:${computer}\nplayer Wins!`;
            alert(result)

            let playAgain= confirm("Play again?");
            playAgain? location.reload():alert("Ok thanks for playing!");
        }
        else{
            let rel=alert("You didn't enter rock,paper and scissors.");
             location.reload()


        }
}else{
    alter("Guess you changed your mind.Maybe next time.");
}
}else{
    alert("Ok,maybe next time.");
}