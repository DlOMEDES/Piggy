/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//  track the score of each player and dice roll
var scores, roundScore , activePlayer, dice;
//needed variables
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;
init();
//setting the neutral score values
// document.querySelector('.dice').style.display = 'none';
// document.getElementById('score-0').textContent = '0';  
// document.getElementById('score-1').textContent = '0';  
// document.getElementById('current-0').textContent = '0';  
// document.getElementById('current-1').textContent = '0';  

document.querySelector('.btn-roll').addEventListener('click', function() {
  //  ROLL A RANDOM NUMBER
  dice = Math.floor(Math.random() * 6) + 1;
  
  //  DISPLAY RESULTS
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';

  //  IF ROLLED 1 UPDATE ROUNDSCORE
  if(dice !== 1) {
    //  ADD SCORE
    roundScore += dice; /*roundscore = roundscore + dice */
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //  NEXT PLAYER(made a new function below DRY)

    // /* if(activeplayer === 0) {
    //   activeplayer = 1;
    //   else {
    //     activePlayer = 0;
    //   }
    // }*/
    // activePlayer === 0 ? activePlayer = 1: activePlayer = 0; //same code above
		// roundScore = 0;

		// document.getElementById('current-0').textContent = '0'
		// document.getElementById('current-1').textContent = '0'
    // document.querySelector('.player-0-panel').classList.toggle('active');
		// document.querySelector('.player-1-panel').classList.toggle('active');
		// document.querySelector('.dice').style.display = 'none';
    
    // CALLING NEW FUNCTION
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  // ADD CURRENT SCORE TO GLOBAL SCORE
  // scores[activePlayer] = scores[activePlayer] + roundScore;
  scores[activePlayer] += roundScore; 
  // var globalScore = scores[activePlayer] + roundScore; //above are two other ways to write the same code
  
  // UPDATE THE UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
  // CHECK IF PLAYER WON THE GAME
  if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');    
    document.querySelector('.btn-roll').classList.add('end-game');
    document.querySelector('.btn-hold').classList.add('end-game');
  } else {
    //  CALLING NEXT PLAYER FUNCTION
    nextPlayer();
  }
});

//  NEXT PLAYER FUNCTION USED FOR DRY!
function nextPlayer() {
  
  activePlayer === 0 ? activePlayer = 1: activePlayer = 0; //same code above
		roundScore = 0;

		document.getElementById('current-0').textContent = '0'
		document.getElementById('current-1').textContent = '0' 
    document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display = 'none';  
};

// NEW GAME CALLS FUNCTION INIT 
document.querySelector('.btn-new').addEventListener('click', init);

// INITIALIZE GAME FUNCTION
function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';  
  document.getElementById('score-1').textContent = '0';  
  document.getElementById('current-0').textContent = '0';  
  document.getElementById('current-1').textContent = '0';  

  // RESTORING DEFAULT GAME
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.btn-roll').classList.remove('end-game');
  document.querySelector('.btn-hold').classList.remove('end-game');
};


//selcect dom id for current player
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
