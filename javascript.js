const sectionBattle = document.getElementById('battlefield');
const messageResult = document.getElementById('message-result');
const imgPlayer = document.getElementById('img-player');
const imgPc = document.getElementById('img-pc');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerSelection;
let computerSelection;
let img_player;
let img_pc;

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
  playerSelection == "Rock";
  getComputerChoice();
});

paper.addEventListener('click', function(){
  playerSelection == "Paper";
  getComputerChoice();
});

scissors.addEventListener('click', function(){
  playerSelection = "Scissors";
  getComputerChoice();
});

function getComputerChoice(){
  var random = nRandom();

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
      imgPlayer = images[i].url;
      var insert = `<img class="img-battle" src=${img_player} alt="">`;
      imgPlayer.innerHTML = insert;
    };

    if(playerSelection == images[i].name){
      imgPc = images[i].url;
      var insert = `<img class="img-battle" src=${img_pc} alt="">`;
      imgPc.innerHTML = insert;
    };
  };
  sectionBattle.style.display = 'flex';
};

window.addEventListener('load', play);

