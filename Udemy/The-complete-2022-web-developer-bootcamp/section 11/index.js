const changeClass = () => {
  const classList = document.querySelector('#alert-button').classList;

  if (classList.contains('be-red')) {
    classList.remove('be-red');
  } else {
    classList.add('be-red');
  }
};

const changeAttribute = () => {
  const element = document.querySelector('a');

  element.setAttribute('href', 'http://bing.com');
};
