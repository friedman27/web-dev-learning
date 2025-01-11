let buttonColours = ['red', 'blue', 'green', 'yellow'];

let userClickedPattern = [];
let gamePattern = [];

let level = 0;
let started = false;
let answerIndex = 0;

$(document).on('keydown', (event) => {
  if (!started) {
    nextSequence();
    started = true;
  }
});

$('.btn').click(function () {
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer();
});

function nextSequence() {
  userClickedPattern = [];
  answerIndex = 0;

  level++;
  $('#level-title').text(`Level ${level}`);

  let randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColour);

  buttonFade(randomChosenColour);
  playSound(randomChosenColour);
}

function buttonFade(color) {
  $('#' + color)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

function playSound(color) {
  let soundURL = './sounds/' + color + '.mp3';
  let buttonSound = new Audio(soundURL);
  buttonSound.play();
}

function animatePress(color) {
  let button = $('#' + color);
  button.addClass('pressed');
  setTimeout(function () {
    button.removeClass('pressed');
  }, 100);
}

function checkAnswer() {
  if (userClickedPattern[answerIndex] === gamePattern[answerIndex]) {
    answerIndex++;
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    resetGame();
  }
}

function resetGame() {
  $('#level-title').text('Game Over Man');
  $('body').addClass('game-over');

  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  started = false;

  setTimeout(function () {
    $('body').removeClass('game-over');
  }, 200);
}
