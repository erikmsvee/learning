const diceRandomizer = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const diceOneNumber = diceRandomizer();
const diceTwoNumber = diceRandomizer();

document.querySelector('.img1').setAttribute('src', `images/dice${diceOneNumber}.png`);
document.querySelector('.img2').setAttribute('src', `images/dice${diceTwoNumber}.png`);

document.querySelector('h1').textContent = 
  diceOneNumber > diceTwoNumber 
  ? 'Player one wins' 
  : diceOneNumber === diceTwoNumber 
    ? 'Its a draw'
    : 'Player two wins';