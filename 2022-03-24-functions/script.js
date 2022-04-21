// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// let pirmaKrastine1 = 10;
// let antraKrastine1 = 10;
// console.log((pirmaKrastine1 + antraKrastine1) * 2);

// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.


console.log('Perimetras: ' + (15 + 10) * 2);
console.log('Perimetras: ' + (15 + 25) * 2);
console.log('Perimetras: ' + (15 + 30) * 2);
console.log('Perimetras: ' + (15 + 35) * 2);
console.log('Perimetras: ' + (15 + 40) * 2);
console.log('Perimetras: ' + (10 + 45) * 2);
console.log('Perimetras: ' + (10 + 50) * 2);
console.log('Perimetras: ' + (10 + 55) * 2);
console.log('Perimetras: ' + (10 + 60) * 2);
console.log('Perimetras: ' + (10 + 120) * 2);

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos kūrimas
function hello() {
  console.log('Sveikas');
}
// Funkcijos iškvietimas
hello();

// Funkcija, kuri grąžina reikšmę
function hello2() {
  let personName = 'Tom';
  return 'Hello, ' + personName;
}

console.log(hello2());
document.querySelector('h1').textContent = hello2();

let helloText = hello2();
console.log(helloText + ', fella.');


function helloWithName(pName) {
  return 'Hello ' + pName;
}

console.log(helloWithName('Romanas'));
console.log(helloWithName('Tom'));

// function perimeter(height, width) {
//   let rectHeight = height ? height : 0;
//   let rectWidth = width ? width : 0;

//   let per = rectHeight * 2 + rectWidth * 2;

//   return 'Perimetras: ' + per + ' kv. m.';
// }

function perimeter(height = 0, width = 0) {
  let per = height * 2 + width * 2;

  return 'Perimetras: ' + per + ' m.';
}

console.log(perimeter(10, 10));
console.log(perimeter(10, 15));
console.log(perimeter(10, 20));
console.log(perimeter(10, 25));
console.log(perimeter(15));
console.log(perimeter(0, 20));


// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampis plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.
// 5. Sukurti naują funkciją, kuri priima pirmos funkcijos reikšmę ir į ekraną išveda rezultatą.


function rectArea(height, width, units = 'vnt') {
  // return `Stačiakampio plotas yra ${height * width} kv. vnt.`

  if (height && width) {    
    let area = height * width;
    let text = `Stačiakampio plotas yra ${area} kv. ${units}.`;
    return text;
  } else {
    console.log('Nenurodytas aukštis arba plotis');
    return 'Nenurodytas aukštis arba plotis';
  }
}

console.log(rectArea(10, 15, 'm'));
console.log(rectArea(100, 50, 'cm'));
console.log(rectArea(100, 50));
console.log(rectArea(100));

document.querySelector('h2').textContent = rectArea(100, 50, 'm');

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function triangleArea(height, width, units) {
  if (height && width) {    
    let area = height * width / 2;
    let text = `Stačiojo trikampio plotas yra ${area} kv. ${units}.`;
    return text;
  } else {
    console.log('Nenurodytas aukštis arba plotis');
    return 'Nenurodytas aukštis arba plotis';
  }
}

console.log(triangleArea(50, 50, 'km'));
document.querySelector('h3').textContent = triangleArea(10, 15, 'cm');

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

// PIRMAS BŪDAS
// function renderArea(rectHeight, rectWidth, triangleHeight, triangleWidth, rectUnits, triangleUnits) {
//   let rectText = rectArea(rectHeight, rectWidth, rectUnits);
//   let triangleText = triangleArea(triangleHeight, triangleWidth, triangleUnits);

//   return rectText + ' ' + triangleText;
// }

// console.log(renderArea(15, 15, 20, 20, 'm', 'm'));
// console.log(renderArea(10, 10, 10, 10, 'm', 'm'));

// ANTRAS BŪDAS
// function renderArea2(height, width, units) {
//   let rectText = rectArea(height, width, units);
//   let triangleText = triangleArea(height, width, units);

//   return rectText + ' ' + triangleText;
// }

// console.log(renderArea2(10, 10, 'm'))
// document.querySelector('h4').textContent = renderArea2(10, 10, 'm');

// TREČIAS BŪDAS
let rectText = rectArea(10, 10, 'cm');
let triangleText = triangleArea(20, 20, 'cm');

function renderArea3(rText, tText) {
  document.querySelector('h4').textContent = rText + ' ' + tText;
}

// renderArea3(rectText, triangleText);
renderArea3(rectArea(10, 10, 'cm'), triangleArea(20, 20, 'cm'));


// Pasisveikinimo funkcijos refaktorinimas
function greetingFunc(personName, isLoggedIn, time, isBirthday) {
  let greeting = '';
  let nameText = (isLoggedIn && personName) ? ', ' + personName : '';

  let birthdayText = (isBirthday && isLoggedIn) ? ' and have a great birthday!' : '';

  if (time >= 5 && time <= 12) {
    greeting = 'Good Morning';
  } else if (time >= 13 && time <= 18) {
    greeting = 'Good Afternoon';
  } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Hello';
  }

  return greeting + nameText + birthdayText;
}

console.log(greetingFunc('John', true));
console.log(greetingFunc('John', true, 9));
console.log(greetingFunc('John', true, 15));
console.log(greetingFunc('John', true, 15, true));
console.log(greetingFunc('Tom', true));


// ARROW FUNCTION
// function func() {

// }

const arrowFunc = () => {
  return 'Labas';
}
console.log(arrowFunc());

// const arrowFunc2 = (name) => {
//   return 'Labas, ' + name + '.';
// }

// const arrowFunc2 = name => {
//   return 'Labas, ' + name + '.';
// }

// const arrowFunc2 = name => 'Labas, ' + name + '.';

// const arrowFunc3 = () => 'Labas';

const arrowFunc4 = (name, lastName) => 'Labas ' + name + ' ' + lastName;

console.log(arrowFunc4('John', 'Doe'));


// Globalus kintamasis (scope) - gali pasiekti visi
let first = 'Labas';
console.log(first);

function testFunc() {
  // first = 15;

  // Lokalus kintamasis - pasiekiamas TIK toje funkcijoje
  // let second = 'Sveikas';

  let first = 20;
  console.log(first);
}

testFunc();

console.log(first);