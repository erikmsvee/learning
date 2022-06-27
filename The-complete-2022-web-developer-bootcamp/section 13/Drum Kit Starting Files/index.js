console.log('Running');

const buttonClicked = (event) => {
  const button = event.srcElement.innerText;

  switch(button) {
    case 'w':
      console.log('w pressed');
      break;
    case 'a':
      console.log('a pressed');
      break;
    case 's':
      console.log('s pressed');
      break;
    case 'd':
      console.log('d pressed');
      break; 
    case 'l':
      console.log('l pressed');
      break; 
    case 'dj':
      console.log('j pressed');
      break; 
    case 'k':
      console.log('k pressed');
      break; 
  }
};

const buttonsElements = document.querySelectorAll('button');

buttonsElements.forEach(( el ) => {
  el.addEventListener('click', buttonClicked);
});
