const playSound = (soundFile) => {
  const audio = new Audio(soundFile);
  audio.play();
};

const handleDrumClasses = (selecteClass) => {
  document.querySelector(`.${selecteClass}`).classList.add('pressed');

  setTimeout(() => {
    document.querySelector(`.${selecteClass}`).classList.remove('pressed');
  }, 200);
};

const handleDrumPlaying = (drum) => {
  let soundFolder = 'sounds/';

  switch (drum) {
    case 'w':
      playSound(`${soundFolder}crash.mp3`);
      break;
    case 'a':
      playSound(`${soundFolder}kick-bass.mp3`);
      break;
    case 's':
      playSound(`${soundFolder}snare.mp3`);
      break;
    case 'd':
      playSound(`${soundFolder}tom-1.mp3`);
      break;
    case 'l':
      playSound(`${soundFolder}tom-2.mp3`);
      break;
    case 'j':
      playSound(`${soundFolder}tom-3.mp3`);
      break;
    case 'k':
      playSound(`${soundFolder}tom-4.mp3`);
      break;
    default:
      console.log('Error');
      return;
  }
};

const handleClicked = (event) => {
  const buttonClicked = event.target.innerText;
  handleDrumPlaying(buttonClicked);
  handleDrumClasses(buttonClicked);
};

const handleKeypress = (event) => {
  const keyPressed = event.key;
  handleDrumPlaying(keyPressed);
  handleDrumClasses(keyPressed);
};

document.querySelectorAll('.drum').forEach((el) => {
  el.addEventListener('click', handleClicked);
});

document.addEventListener('keydown', handleKeypress);
