const sectionBattle = document.getElementById('battlefield');
const messageResult = document.getElementById('message-result');
const imgPlayer = document.getElementById('img-player');
const imgPc = document.getElementById('img-pc');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const messageResultPoint = document.getElementById('message-result-point');
const messageResultPointPC = document.getElementById('message-result-point-pc');

let playerSelection;
let computerSelection;
let img_player;
let img_pc;
let x =0;
let y=0;


n=0;
while(n < 4){
  const images = [
    {
      name: "Rock",
      url: "assets/piedra.png"
    },
    {
      name: "Paper",
      url: "assets/papel.png"
    },
    {
      name: "Scissors",
      url: "assets/tijera.png"
    },
  ];

  function play(){
    sectionBattle.style.display = 'none';
  };

  rock.addEventListener('click', function(){
    playerSelection = "Rock";
    getComputerChoice();
  });

  paper.addEventListener('click', function(){
    playerSelection = "Paper";
    getComputerChoice();
  });

  scissors.addEventListener('click', function(){
    playerSelection = "Scissors";
    getComputerChoice();
  });

  function getComputerChoice(){
    let random = nRandom();

    if(random == 0){
      computerSelection = "Rock";
    } else if (random == 1){
      computerSelection = "Paper";
    } else if (random == 2){
      computerSelection = "Scissors"
    }

    battle();
  };

  function battle(){
    if(playerSelection == computerSelection){
      messageResult.innerHTML = "Tie";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
      messageResult.innerHTML = "Congrats! You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
      messageResult.innerHTML = "Congrats! You win!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
      messageResult.innerHTML = "Congrats! You win!";
    }else {
      messageResult.innerHTML = "You missed";
    };

    addImages();
  };

  function nRandom(){
    let n = Math.floor(Math.random()*3);
    return n;
  }

  function addImages(){
    for(let i=0; i<images.length; i++){
      if(playerSelection == images[i].name){
        img_player = images[i].url;
        let insert = `<img class="img-battle" src=${img_player} alt="player-choice">`;
        imgPlayer.innerHTML = insert;
      };

      if(computerSelection == images[i].name){
        img_pc = images[i].url;
        let insert2 = `<img class="img-battle" src=${img_pc} alt="computer-choice">`;
        imgPc.innerHTML = insert2;
      };
    };
    sectionBattle.style.display = 'flex';

    showPoints();
  };

  function showPoints(){
    if(playerSelection == computerSelection){
      messageResultPoint.innerHTML = x;
      messageResultPointPC.innerHTML = y;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
      x = x + 1;
      messageResultPoint.innerHTML = x;
      messageResultPointPC.innerHTML = y;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
      x = x + 1;
      messageResultPoint.innerHTML = x;
      messageResultPointPC.innerHTML = y;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
      x = x + 1;
      messageResultPoint.innerHTML = x;
      messageResultPointPC.innerHTML = y;
    }else {
      y = y + 1;
      messageResultPoint.innerHTML = x;
      messageResultPointPC.innerHTML = y;
    };
  };

  window.addEventListener('load', play);

  n++;
}

