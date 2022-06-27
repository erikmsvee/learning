let hyongs = [
  'Chon-Ji',
  'Dan-Gun',
  'Do-San',
  'Won-Hyo',
  'Cho-Dak (Yul-Gok)',
  'Joong-Gun',
  'Toi-Gye',
  'Hwa-Rang',
  'Choong-Moo',
  'Kwang-Gae',
  'Po-Eun'
];

const hyongLength = hyongs.length;
let hyongNumber = 1;

const pickRandomHyong = (): void => {
  const hyongIndex = Math.floor(Math.random() * hyongs.length);
  const selectedHyong = hyongs[hyongIndex];
  
	hyongs.splice(hyongIndex, 1);

  console.table(`${hyongNumber++}.${ hyongNumber <= 10 ? ' ': ''} Gjør: ${selectedHyong}`);
};

for (let i = 1; i <= hyongLength; i++) {
	pickRandomHyong(); 
}
