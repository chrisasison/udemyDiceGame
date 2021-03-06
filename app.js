/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, currentScore, dice;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

//function to change player
function switchPlayer() {
    var diceDOM = document.querySelector('.dice');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    diceDOM.style.display = 'none'
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

//dice img default display = 'none'
document.querySelector('.dice').style.display = 'none';

//rollDice function
document.querySelector('.btn-roll').addEventListener('click', function() {
    //.btn-roll activates dice RNG on 'click'
    dice = Math.floor(Math.random() * 6) + 1;
    //dice img display on 'click' with corresponding dice value
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    console.log(dice);
    //update roundScore when dice is rolled
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
    switchPlayer();
    }
});

//hold score function
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add round score to total score
    score[activePlayer] += roundScore;
    //update active players total score
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    // check for winner.
    if (score[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    } else {
        switchPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', function() {

});
