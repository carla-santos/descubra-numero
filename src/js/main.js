'use strict';

function initGame() {
  const btnCheck = document.querySelector('.js-btn--check');
  const btnAgain = document.querySelector('.js-btn--again');
  const guessValue = document.querySelector('.js-checkbox-input');

  let secretNumber = Math.floor(Math.random() * 20) + 1;

  let score = 20;
  let highscore = 0;

  const gameActive = function (btnActivate = false) {
    btnCheck.disabled = btnActivate;
  };

  const displayMsg = function (message) {
    document.querySelector('.js-score__msg').textContent = message;
  };

  const displayFinalMsg = function (finalMsg = true) {
    const msg = finalMsg ? alert('Parabéns!! Você ganhou o jogo! 😍🏆') : alert('Que azar!! Tente novamente! 😣😥');
    return msg;
  };

  const setGuess = function (guess) {
    guessValue.value = guess;
  };

  const setScore = function (score) {
    document.querySelector('.score').textContent = score;
  };

  const setHighscore = function (highscore) {
    document.querySelector('.highscore').textContent = highscore;
  };

  const setNumber = function (value) {
    document.querySelector('.js-number').textContent = value;
  };

  const gameWinn = function () {
    highscore = highscore > score ? highscore : score;
    setHighscore(highscore);
    setNumber(secretNumber);
    displayFinalMsg(true);
    displayMsg('Clique no botão jogar novamente');
    gameActive(true);
  };

  const wrongGuess = function (message) {
    displayMsg(message);
    score--;
    setScore(score);
  };

  const gameLost = function () {
    setScore(0);
    displayFinalMsg(false);
    displayMsg('Clique no botão jogar novamente');
    gameActive(true);
  };

  const checkNumber = function () {
    const guess = Number(guessValue.value);

    if (!guess || guess <= 0 || guess > 20) {
      displayMsg('⛔ Valor inválido!!');
    } else if (guess === secretNumber) {
      gameWinn();
    } else if (guess !== secretNumber) {
      score > 1 ? wrongGuess(guess > secretNumber ? '👆 Muito alto!' : '👇 Muito baixo') : gameLost();
    }
  };

  btnCheck.addEventListener('click', checkNumber);

  const playAgain = function () {
    score = 20;
    setScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMsg('Comece o jogo...');
    setNumber('?');
    setGuess('');
    gameActive();
  };

  btnAgain.addEventListener('click', playAgain);
}
initGame();
