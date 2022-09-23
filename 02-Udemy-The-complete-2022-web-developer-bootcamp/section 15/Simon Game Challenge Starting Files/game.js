const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

const nextSequence = () => {
  userClickedPattern = [];
  level++;

  $('#level-title').text(`Level ${level}`);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
};

const playSound = (color) => {
  const sound = new Audio(`sounds/${color}.mp3`);
  sound.play();
};

const animatePress = (currentColor) => {
  const button = $(`#${currentColor}`);
  button.addClass('pressed');

  setTimeout(() => {
    button.removeClass('pressed');
  }, 100);
};

const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').text('Game over, press any key to restart');

    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);

    startOver();
  }
};

const startOver = () => {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
};

$('.btn').click((event) => {
  if (level > 0) {
    const clickedButton = event.target.id;
    userClickedPattern.push(clickedButton);

    animatePress(clickedButton);
    playSound(clickedButton);

    checkAnswer(userClickedPattern - 1);
  }
});

$(document).on('keypress', (event) => {
  nextSequence();
});
