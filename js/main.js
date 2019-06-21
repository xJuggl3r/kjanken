const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

// Play game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//Get Computer's choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


//Get Winner

function getWinner(player, comp) {
    if (player === comp) {
        return 'draw';
    } else if (player === 'rock') {
        if (comp === 'paper') {
        return 'computer'
        } else {
            return 'player'
        } 
    } else if (player === 'paper') {
        if (comp === 'scissors') {
        return 'computer'
        } else {
            return 'player'
        }
    } else if (player === 'scissors') {
        if (comp === 'rock') {
        return 'comuter'
        } else {
            return 'player'
        }
    }
}


//Show Winner
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreboard.player++; //Includes player score
        //Show Modal Result
        result.innerHTML = `
        <h1 class="text-win">You Win 💪</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1)}</strong></p>
        `; 
    } else if (winner === 'computer') {
            // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose 😵</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw 😒</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

  modal.style.display = 'block';
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


//Change background on reload
function randomImage(){
    var images = [
     './img/Yui8MB.webp',
     './img/HePTM1.webp',
     './img/XDIc9u.webp',
     './img/BPlWAU.webp',
     './img/ao1ZLb.webp',
     './img/KrOS7Q.webp'];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('home-intro');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
  }
  
  document.addEventListener("DOMContentLoaded", randomImage);




// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
