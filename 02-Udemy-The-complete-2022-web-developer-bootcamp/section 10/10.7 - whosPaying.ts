const peopleCommingToLunch = ['Erik M', 'Mary', 'Cecilie', 'Armands', 'Leffi', 'Stefan', 'Nicole'];

const whosPaying = (names: string[]): string => {
  const amountOfPeople = names.length;

  const randomPerson = Math.floor(Math.random() * amountOfPeople);

  return `${names[randomPerson]} is going to buy lunch today!`;
};

const payer = whosPaying(peopleCommingToLunch);

console.log(payer);
