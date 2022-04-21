// Paselektinti HTML elementą
let paragraph = document.querySelector('p');

paragraph.textContent = 'Labas rytas';
paragraph.innerHTML = 'Labas <span style="color: red;">rytas</span>';

// Sukurti HTML elementą
let spanElement = document.createElement('span');
spanElement.textContent = '!';

// Prideda su JS sukurtą HTML elementą į kito elemento pabaigą
paragraph.append(spanElement);

// Prideda su JS sukurtą HTML elementą į kito elemento pradžią
paragraph.prepend(spanElement);

// Prideda su JS sukurtą HTML elementą po kitu elementu
paragraph.after(spanElement);

// Prideda su JS sukurtą HTML elementą prieš kitą elementą
paragraph.before(spanElement);

// Pašalina HTML elementą iš DOM
spanElement.remove();

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis animi repudiandae! Ut neque omnis dolor, quasi eaque cupiditate enim, ducimus, adipisci cum ab quidem? Cumque ad nihil repellat iure.';

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
newParagraph.className = newParagraph.className + ' trecia-klase';
// newParagraph.className += ' trecia-klase';

// Prideda klase prie HTML elemento
newParagraph.classList.add('ketvirta-klase', 'septinta-klase');

// Pasalina klase is HTML elemento
newParagraph.classList.remove('pirma-klase');

// Prideda klase prie HTML elemento, jeigu tokios dar neturi ir pasalina jeigu ja turi
newParagraph.classList.toggle('toggle');
newParagraph.classList.toggle('toggle');
newParagraph.classList.toggle('toggle');

// Patikrina ar HTML elementas turi nurodyta klase (grazina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'));

// Keicia HTML elemento ID
newParagraph.id = 'paragrafo-id';

let link = document.createElement('a');
newParagraph.after(link);
link.textContent = 'Nuoroda';

// Keicia HTML elemento atributus
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank');
link.setAttribute('title', 'Cia yra nuoroda');
link.setAttribute('class', 'nuorodos-klase');
link.setAttribute('class', 'nuorodos-antra-klase');
link.removeAttribute('class');

link.style.border = '1px solid black';
link.style.padding = '5px 10px';

link.style = `background: green; 
              color: white; 
              font-size: 25px; 
              display: inline-block;`;

