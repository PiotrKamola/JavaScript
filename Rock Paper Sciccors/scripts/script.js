let stats = JSON.parse(localStorage.getItem('stats')) || {
  wins: 0,
  loses: 0,
  ties: 0
}

let move = 0;
let moveStr;
let enemyStr;
let whoWin;

function playGame(move){
const enemy = Math.floor(Math.random() * 3)

if(move === 0){
  moveStr = "Rock";
}else if(move === 1){
  moveStr = "Paper";
}else{
  moveStr = "Scissors";
}

if(enemy === 0){
  enemyStr = "Rock";
}else if(enemy === 1){
  enemyStr = "Paper";
}else{
  enemyStr = "Scissors";
}


if(move === enemy){
  stats.ties++;
  whoWin = "Tie";
}else if(enemy === move+1){
  stats.loses++
  whoWin = "Lose";
}else if(move == 2 && enemy == 0){
  stats.loses++;
  whoWin = "Lose";
}else{
  stats.wins++
  whoWin = "Won";
}

moves(moveStr, enemyStr, whoWin);
changeScores(moveStr, enemyStr, whoWin);
localStorage.setItem('stats', JSON.stringify(stats));
}

function moves(move, enemy, whoWin){
if(move && enemy && whoWin){
  document.getElementById("resetScoresText").classList.add("hiddenText");
  document.getElementById("moves").classList.remove("hiddenText");
  document.getElementById("whoWonText").classList.remove("hiddenText");

  if(move === "Rock"){
    document.getElementById("myMove").src="./images/rock.jpg";
  }else if (move === "Paper"){
    document.getElementById("myMove").src="./images/paper.jpg";
  }else{
    document.getElementById("myMove").src="./images/scissors.jpg";
  }

  if(enemy === "Rock"){
    document.getElementById("computerMove").src="./images/rock.jpg";
  }else if (enemy === "Paper"){
    document.getElementById("computerMove").src="./images/paper.jpg";
  }else{
    document.getElementById("computerMove").src="./images/scissors.jpg";
  }

  document.getElementById("myMove").classList.remove("winnerColor");
  document.getElementById("myMove").classList.remove("looserColor");
  document.getElementById("computerMove").classList.remove("winnerColor");
  document.getElementById("computerMove").classList.remove("looserColor");

  if(whoWin === "Won"){
    document.getElementById("myMove").classList.add("winnerColor");
    document.getElementById("computerMove").classList.add("looserColor");
    document.getElementById("whoWonText").innerHTML = "You Won";
  }else if (whoWin === "Lose"){
    document.getElementById("myMove").classList.add("looserColor");
    document.getElementById("computerMove").classList.add("winnerColor");
    document.getElementById("whoWonText").innerHTML = "You Lose";
  }else{
    document.getElementById("whoWonText").innerHTML = "You Tied";
  }

}else{
  document.getElementById("moves").classList.add("hiddenText");
  document.getElementById("whoWonText").classList.add("hiddenText");
  document.getElementById("resetScoresText").classList.remove("hiddenText");
}
}

function changeScores(move, enemy, whoWin){
document.getElementById("scores")
  .textContent = `Wins = ${stats.wins} | Loses = ${stats.loses} | Ties = ${stats.ties}\n`;
}