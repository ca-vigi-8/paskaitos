const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');

h1.addEventListener('click', () => {
  h1.style.color = 'green';
  h1.style.background = 'pink';
});

h2.addEventListener('click', function() {
  h2.style.fontSize = '40px';
});


function changeTextToRed() {
  h3.style.color = 'red';
  h1.style.fontSize = '50px';
}

h3.addEventListener('click', changeTextToRed);
h4.addEventListener('click', changeTextToRed);
