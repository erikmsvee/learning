const beersOnTheWall = (bottles: number): void => {
  
  while(bottles > 0) {
    let bottleWord = '';
    let leftBottles = '';

    if (bottles === 1) {
      bottleWord = 'bottle'
      leftBottles = 'no more bottles';
    } else {
      bottleWord = 'bottles'
      leftBottles = `${bottles - 1} ${bottles === 2 ? 'bottle' : 'bottles'}`;
    }
    
    console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take 1 down, pass it around, ${leftBottles} of beer on the wall.`);
  
    bottles--;
  }

    console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
}

beersOnTheWall(100);