var vardas = "Romanas"; // String tipo kintamasis (tekstas)
let pavarde = 'Venckus'; // String tipo kintamasis (tekstas)
let miestas = `Kaunas`;
const ASMENS_KODAS = 37878787878; // number tipo kintamasis (skaičius)
let yraPilnametis = true; // Boolean tipo kintamasis (true/false)

console.log("Hello, " + vardas + ", how are you?");
console.log('Hello, ' + vardas + ', how are you?');
console.log(`Hello, ${vardas}, how are you?`);

console.log('Jonas pasakė: "Labas rytas".');
console.log(`Jonas pasakė: "Labas rytas".`);
console.log("John's car.");
console.log(`John's car.`);

console.log("Jonas pasakė: \\\"That's my car\".");
console.log('Jonas pasakė: \"That\'s my car\".');
console.log('Jonas pasakė: \\"That\'s my car\".');


// Romanas Venckus, asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.
console.log(vardas + " " + pavarde + ", asmens kodas: " + ASMENS_KODAS + ", gyvenamasis miestas: " + miestas + ".");
console.log(`${vardas} ${pavarde}, asmens kodas: ${ASMENS_KODAS}, gyvenamasis miestas: ${miestas}.`);

// SĄLYGOS

console.log(10 == 10);
console.log('vienas' == 'vienas');
console.log(10 == '10');

console.log(10 === 10);
console.log('vienas' === 'vienas');
console.log(10 === '10');

console.log(10 >= 10);
console.log(10 > 10);
console.log(10 <= 10);
console.log(10 < 10);

console.log(10 !== 10);
console.log(!true);


// Matematiniai operatoriai
let num1 = 10;
let num2 = '10';
let num3 = 22;

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num3 % num1);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);


// IF, IF/ELSE
console.log('-----------------IF, IF/ELSE-------------------');

let light = 'GREEN';

// if (light === 'green') {
//   console.log('Galima eiti');
// }

// if (light === 'yellow') {
//   console.log('Pasiruošk');
// }

// if (light === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedęs');
// }

if (light === 'green' || light === 'gren' || light === 'žalia') {
  console.log('Galima eiti');
} else if (light === 'yellow') {
  console.log('Pasiruošk');
} else if (light === 'red') {
  console.log('STOP');
} else {
  console.log('Šviesoforas sugedęs.');
}

// LOTERIJOS BILIETAS
console.log('-----------------LOTERIJOS BILIETAS-------------------');
let age = 10;

// if (age < 18) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Galima');
// }

// if (age <= 17) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Galima');
// }

// if (age > 17) {
//   console.log('Galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age < 0) {
//   console.log('Amžius negali būti neigiamas');
// } else if (age >= 18 && age < 120) {
//   console.log('Galima');
// } else if (age >= 120) {
//   console.log('Amžius per didelis');
// } else {
//   console.log('Pirkti negalima');
// }

if (age < 0) {
  console.log('Amžius negali būti neigiamas');
} else if (age < 18) {
  console.log('Pirkti negalima');
} else if (age < 120) {
  console.log('Galima');
} else {
  console.log('Amžius per didelis');
}

// SLAPTAŽODIS
console.log('-----------------SLAPTAŽODIS-------------------');

let password = 'ADWASDasasdaasdsdASD';
console.log(typeof password);
console.log(password.toLowerCase());
console.log(password.trim().length);

if (password.length >= 16) {
  
  if (password.length >= 20) {
    console.log('Slaptažodis yra tinkamas.');
  } else {
    console.log('Slaptažodis yra tinkamas, bet rekomenduojama bet 20 simbolių.');
  }

} else {
  console.log('Slaptažodis yra per trumpas. Jį turėtų sudaryti bent 16 simbolių.');
}

// AND ir OR operatoriai (&& ir ||)


// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS: 
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.
console.log('--------------------1 LYGIS------------------');
// Kiek bus 123 + 456 = 579
// let task1 = prompt('Kiek bus 123 + 456?');
let task1 = 777;

// Kaip vadinasi arčiausiai Žemės esanti žvaigždė? Saulė
// let task2 = prompt('Kaip vadinasi arčiausiai Žemės esanti žvaigždė?');
let task2 = 'menulis';

// if (task1 == 579 || task2 == 'Saulė') {
//   if (task1 == 579 && task2 == 'Saulė') {
//     console.log('Perėjai į kitą lygį. Abu atsakymai teisingi.');
//   } else if (task1 == 579) {
//     console.log('Perėjai į kitą lygį. Pirmas atsakymas teisingas.');
//   } else {
//     console.log('Perėjai į kitą lygį. Antras atsakymas teisingas.');
//   }
// } else {
//   console.log('Į kitą lygį nepatekai. Abu atsakymai buvo neteisingi');
// }

if (task1 == 579 && task2 == 'Saulė') {
  // Pataikyti abu variantai
  console.log('Abu atsakymai teisingi.');
} else if (task1 == 579) {
  // Pirmas teisingas, antras neteisingas
  console.log('Antras atsakymas neteisingas.');
} else if (task2 == 'Saulė') {
  // Antras teisingas, pirmas neteisingas
  console.log('Pirmas atsakymas neteisingas.');
} else {
  // Abu neteisingi
  console.log('Abu neteisingi.');
}

console.log('--------------------2 LYGIS------------------');
// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

let task3 = 777;
let task4 = 'Žemė'

if (task3 != 777 && task4 != 'Žemė') {
  // Į kitą lygį nepatekai: abu neteisingi.
  console.log('Į kitą lygį nepatekai: abu neteisingi.');
} else if (task3 != 777) {
  // Į kitą lygį nepatekai: antras teisingas, pirmas neteisingas.
  console.log('Į kitą lygį nepatekai: antras teisingas, pirmas neteisingas.')
} else if (task4 != 'Žemė') {
  // Į kitą lygį nepatekai: pirmas teisingas, antras neteisingas.
  console.log('Į kitą lygį nepatekai: pirmas teisingas, antras neteisingas.')
} else {
  // Abu teisingi - patekai į kitą lygį
  console.log('Abu teisingi - patekai į kitą lygį.')
}

console.log('--------------------3 LYGIS------------------');
// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kurie klausimai nebuvo atsakyti.

let task5 = 555;
let task6 = 666;
let task7 = 777;
const answer5 = 555;
const answer6 = 666;
const answer7 = 777;

if (task5 == answer5 && task6 == answer6 && task7 == answer7) {
  // Patekai į kitą lygį: visi trys atsakymai teisingi.
  console.log('Patekai į kitą lygį: visi trys atsakymai teisingi.');
} else if (task5 != answer5 && task6 == answer6 && task7 == answer7) {
  // Patekai į kitą lygį: pirmas neteisingas.
  console.log('Patekai į kitą lygį: pirmas neteisingas.');
} else if (task5 == answer5 && task6 != answer6 && task7 == answer7) {
  // Patekai į kitą lygį: antras neteisingas.
  console.log('Patekai į kitą lygį: antras neteisingas.');
} else if (task5 == answer5 && task6 == answer6 && task7 != answer7) {
  // Patekai į kitą lygį: trečias neteisingas.
  console.log('Patekai į kitą lygį: trečias neteisingas.');
} else if (task5 == answer5 && task6 != answer6 && task7 != answer7) {
  // Nepatekai į kitą lygį: pirmas teisingas.
  console.log('Nepatekai į kitą lygį: pirmas teisingas.');
} else if (task5 != answer5 && task6 == answer6 && task7 != answer7) {
  // Nepatekai į kitą lygį: antras teisingas.
  console.log('Nepatekai į kitą lygį: antras teisingas.');
} else if (task5 != answer5 && task6 != answer6 && task7 == answer7) {
  // Nepatekai į kitą lygį: trečias teisingas.
  console.log('Nepatekai į kitą lygį: trečias teisingas.');
} else {
  // Nepatekai į kitą lygį: nepateikei nei vieno :(
  console.log('Nepatekai į kitą lygį: nepateikei nei vieno :(');
}


// Pagal amŽiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

console.log('-----------------MOKYKLA-------------------');

// let amzius = Number(prompt('Koks amzius?'));
let amzius = 5;

if (isNaN(amzius)) {
  console.log('Reikia įvesti skaičių');
} else if (amzius < 0) {
  console.log('Įvestas amžius yra netinkamas. Skaičius turi būti teigiamas');
} else if (amzius < 6) {
  console.log('Į mokyklą neina.');
} else if (amzius < 7) {
  console.log('Į mokyklą tikriausiai neina, bet gali būti ir pirmokas');
} else if (amzius < 11) {
 
  if (amzius === 10) {
    console.log('Tikriausiai pradinukas, bet gali būti ir penktokas');
  } else {
    console.log('Pradinė.');
  }
  
} else if (amzius === 14) {
  console.log('Tikriausiai pagrindinė, bet gali būti ir devintokas');
} else if (amzius < 15) {
  console.log('Pagrindinė.');
} else if (amzius < 19) {
  console.log('Gimnazija.');
} else if (amzius < 120) {
  console.log('Baigė mokyklą.');
} else {
  console.log('Įvestas amžius yra per didelis');
}

console.log('-----------------Šviesoforas 2.0-------------------');

let lightColor = 'blue';

switch (lightColor) {
  case 'green':
    document.querySelector('h1').textContent = 'Gali eiti';
    document.querySelector('h1').style.color = 'green';
    console.log('Gali eiti');
    break;
    
  case 'yellow':
    document.querySelector('h1').textContent = 'Pasiruošk';
    document.querySelector('h1').style.color = 'yellow';
    console.log('Pasiruosk');
    break;
    
  case 'red':
    document.querySelector('h1').textContent = 'STOP';
    document.querySelector('h1').style.color = 'red';
    console.log('STOP');
    break;
    
  default:
    document.querySelector('h1').textContent = 'Šviesoforas sugedęs';
    document.querySelector('h1').style.color = 'black';
    console.log('Sugedo');
}


console.log('-----------------Balai-------------------');
// Sukurti vertinimo sistemą, kuri skaitinį vertinimą paverčia į žodžius:
// 1 - Labai blogai
// 2 - Blogai
// 3 - Vidutiniškai
// 4 - Gerai
// 5 - Puikiai
// Vertinimą reikia įvesti per prompt.

// let grade = Number(prompt('Įvesti balą'));

// switch (grade) {
//   case 1:
//     console.log('Labai blogai');
//     document.querySelector('h2').textContent = 'Labai blogai';
//     document.querySelector('h2').style.color = 'white';
//     document.querySelector('h2').style.background = 'red';

//     break;
//   case 2:
//     console.log('Blogai');
//     document.querySelector('h2').textContent = 'Blogai';
//     break;
//   case 3:
//     console.log('Vidutiniškai');
//     document.querySelector('h2').textContent = 'Vidutiniškai';
//     break;
//   case 4:
//     console.log('Gerai');
//     document.querySelector('h2').textContent = 'Gerai';
//     break;
//   case 5:
//     console.log('Puikiai');
//     document.querySelector('h2').textContent = 'Puikiai';
//     break;
//   default:
//     document.querySelector('h2').textContent = 'Oops... :(';
//     console.log('ERROR');
// }

// let grade = Number(prompt('Skaičius'));
let grade = Number('44');



switch (true) {
  // case (isNaN(grade)):
  //   document.querySelector('h2').textContent = 'Blogas formatas';
  //   console.log('ERROR');

  case (grade > 50):
    document.querySelector('h2').textContent = 'Skaičius turi būti mažesnis nei 51';
    console.log('ERROR');
    break;

  case (grade > 40):
    console.log('Puikiai');
    document.querySelector('h2').textContent = 'Puikiai';
    break;

  case (grade > 30):
    console.log('Gerai');
    document.querySelector('h2').textContent = 'Gerai';
    break;

  case (grade > 20):
    console.log('Vidutiniškai');
    document.querySelector('h2').textContent = 'Vidutiniškai';
    break;
  
  case (grade > 10):
    console.log('Blogai');
    document.querySelector('h2').textContent = 'Blogai';
    break;
  
  case (grade > 0):
    console.log('Labai blogai');
    document.querySelector('h2').textContent = 'Labai blogai';
    document.querySelector('h2').style.color = 'white';
    document.querySelector('h2').style.background = 'red';
    break;

  case (grade <= 0):
    document.querySelector('h2').textContent = 'Skaičius privalo būti teigiamas';
    break;

  default:
    document.querySelector('h2').textContent = 'Blogas formatas';
    console.log('ERROR');
}



let num = 5;
console.log(num);

num = 6;
console.log(num);


// Sudėtis
console.log(num + 1);

num = num + 1;
console.log(num);

num += 1;
console.log(num);

num += 2;
console.log(num);

num++;
console.log(num);

let str = 'Labas';
console.log(str);

str = str + ' vakaras';
console.log(str);

str += '.';
console.log(str);

str += 1;
console.log(str);

// str++;
// console.log(str);

// Atimtis
console.log(num);
console.log(num - 1);
console.log(num);

num = num - 1;
console.log(num);

num -= 1;
console.log(num);

num -= 2;
console.log(num);

num--;
console.log(num);

let modNum = num;
modNum += 522;
console.log(modNum);
console.log(num);

console.log(str);
str = str - 'vakaras';
console.log(str);

// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

let personName = '';
let isLoggedIn = true;
let time = 15;
let isBirthday = true;

// PIRMAS BŪDAS
const greetingText = document.querySelector('h3');

// if (time >= 5 && time <= 12) {
//   greetingText.textContent = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   greetingText.textContent = 'Good Afternoon';
// } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
//   greetingText.textContent = 'Good Evening';
// } else {
//   greetingText.textContent = 'Hello';
// }

// if (isLoggedIn && personName) {
//   // greetingText.textContent = greetingText.textContent + ', ' + personName;
//   greetingText.textContent = `${greetingText.textContent}, ${personName}`;
// }

// if (isBirthday) {
//   greetingText.textContent += ' and have a great birthday!';
// }


// ANTRAS BŪDAS
// let greeting = '';
// let nameText = '';
// let birthdayText = '';

// if (time >= 5 && time <= 12) {
//   greeting = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   greeting = 'Good Afternoon';
// } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
//   greeting = 'Good Evening';
// } else {
//   greeting = 'Hello';
// }

// switch (time) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     greeting = 'Good Evening';
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//     greeting = 'Good Morning';
//     break;
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//     greeting = 'Good Afternoon';
//     break;
//   case 19:
//   case 20:
//   case 21:
//   case 22:
//   case 23:
//     greeting = 'Good Evening';
//     break;
//   default:
//     greeting = 'Hello';
// }

// if (isLoggedIn && personName) {
//   nameText = ', ' + personName;
// }

// if (isBirthday) {
//   birthdayText = ' and have a great birthday!';
// }

// greetingText.textContent = greeting + nameText + birthdayText;


// TREČIAS BŪDAS
let greeting = '';
let nameText = (isLoggedIn && personName) ? ', ' + personName : '';
// nameText = (isLoggedIn && personName) && ', ' + personName;

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

greetingText.textContent = greeting + nameText + birthdayText;


// PIRMINIAI SKAIČIAI

function checkIfPrimary(num) {
  let isPrimary = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrimary = false;
      break;
    } 
  }

  if (isPrimary) {
    console.log('Skaicius ' + num + ' yra pirminis.');
  } else {
    console.log('Skaicius ' + num + ' nera pirminis.');
  }
}

checkIfPrimary(37)