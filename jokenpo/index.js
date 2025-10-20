const result = document.querySelector(".result");
const myScore = document.querySelector("#player-score");
const myScoreMachine = document.querySelector("#myScore-computer");

let myScorePlayer = 0;
let myScoreComputer = 0;

const playHumam = (humanChoice) => {
  gameTime(humanChoice, playMachine());

  console.log(humanChoice);

  console.log("retorno" + playMachine());
};

const playMachine = () => {
  const choices = ["rock", "hand", "scissors"];

  const randoNumber = Math.floor(Math.random() * 3);

  console.log(randoNumber);

  return choices[randoNumber];
};

const gameTime = (player, compute) => {
  if (player === compute) {
    result.innerHTML = "empate";
  } else if (
    (player === "rock" && compute === "scissors") ||
    (player === "hand" && compute === "rock") ||
    (player === "scissors" && compute === "hand")
  ) {
    myScorePlayer++;
    myScore.innerHTML = myScorePlayer;
    result.innerHTML = "voce ganhou";
  } else {
    myScoreComputer++;
    myScoreMachine.innerHTML = myScoreComputer;
    result.innerHTML = "voce perdeu";
  }
};
