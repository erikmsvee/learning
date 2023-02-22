const fizzBuzz = (amountOfPlayers: number): string[] => {
  let game: string[] = ['Start'];

  for (let playerNumber = 1; playerNumber <= amountOfPlayers; playerNumber++) {
    if (playerNumber % 5 === 0 && playerNumber % 3 === 0) {
      game.push('FizzBuzz');
    } else if (playerNumber % 3 === 0) {
      game.push('Fizz');
    } else if (playerNumber % 5 === 0) {
      game.push('Buzz');
    } else {
      game.push(playerNumber.toString());
    }
  }

  game.push('End');

  return game;
};

const gamePlay = fizzBuzz(15);

console.table(gamePlay);
