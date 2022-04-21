const plants = ['apple', 'tomato', 'orange', 'banana', 'pineapple'];
console.log(plants);

// POP metodas pašalina paskutinį masyvo narį - modifikuoja originalų masyvą
let removedPlants = plants.pop();
console.log(plants);
console.log(removedPlants);

// SHIFT metodas pašalina pirmą masyvo narį - modifikuoja originalų masyvą
plants.shift();
console.log(plants);

// PUSH metodas prideda į masyvo pabaigą naują narį - modifikuoja originalų masyvą
plants.push('pear');
console.log(plants);

// UNSHIFT metodas prideda į masyvo pradžią naują narį - modifikuoja originalų masyvą
plants.unshift('potato', 'pear');
console.log(plants);

plants[2] = 'pear';
console.log(plants);

// plants[10] = 'tomato';

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// INDEKSAS         0       1        2       3         4
// Slice (+)    0     1        2        3       4          5
// Slice (-)   -5     -4       -3      -2       -1         

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo reikšmių

console.log('----------SLICE-----------');
console.log(animals);

let slicedAnimals1 = animals.slice(2);
console.log(slicedAnimals1);

console.log(animals);

let slicedAnimals2 = animals.slice(2, 4);
console.log(slicedAnimals2);

let slicedAnimals3 = animals.slice(-4, -2);
console.log(slicedAnimals3);

let slicedAnimals4 = animals.slice(3, 0);
console.log(slicedAnimals4);

// SLICE UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
// 2. Išimti tris paskutinius pirkinius.
// 3. Išimti ketvirtą ir penktą pirkinį.
// 4. Išimti antrą ir trečią pirkinį.
// 5. Išimti visus, išskyrus pirmą pirkinį.

const shoppingList = ['kirvis', 'baterijos', 'tulikinis', 'žiebtuvėlis', 'medikamentai', 'konservai', 'twixas'];

let task1 = shoppingList.slice(0, 2);
console.log(task1);

let task2 = shoppingList.slice(-3);
console.log(task2);

let task3 = shoppingList.slice(3, 5);
console.log(task3);

let task4 = shoppingList.slice(1, 3);
console.log(task4);

let task5 = shoppingList.slice(1);
console.log(task5);

// SPLICE
// splice - modifikuoja (mutuoja) originalų masyvą.
console.log('----------------SPLICE----------------');

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);
// let splicedNums = nums.splice(1);
// let splicedNums = nums.splice(1, 2);
// let splicedNums = nums.splice(1, 2, 'aštuoni');
let splicedNums = nums.splice(1, 2, 'aštuoni', 'devyni');

// nums.splice(1, 1);
// nums.splice(4, 1);

console.log(nums);
console.log(splicedNums);

// UŽDUOTIS:
// Sukurti 10-ties filmų masyvą ir iš jo:
let moviesList = [`filmas1`, `filmas2`, `filmas3`, `filmas4`, `filmas5`, `filmas6`, `filmas7`, `filmas8`, `filmas9`, `filmas10`];
// 1. Išimti pirmus 5 filmus.
const moviesTask1 = moviesList.slice(0, 5);
console.log(moviesTask1);

// 2. Išimti 4 paskutinius filmus.
const moviesTask2 = moviesList.slice(-4);
console.log(moviesTask2);

// 3. Išimti nuo trečio iki septinto filmo.
const moviesTask3 = moviesList.slice(2, 6);
console.log(moviesTask3);

// 4. Išimti antrą ir trečią filmą.
const moviesTask4 = moviesList.slice(1, 3);
console.log(moviesTask4);

// 5. Išimti visus, išskyrus pirmą filmą.
const moviesTask5 = moviesList.slice(1);
console.log(moviesTask5);

// 6. Išimti 5 filmus skaičiuojant nuo trečio.
const moviesTask6 = moviesList.slice(2, 7);
console.log(moviesTask6);

// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
const moviesTask7 = moviesList.slice(-4, -1);
console.log(moviesTask7);

// 8. Vietoje penkto filmo įrašyti du naujus filmus.
moviesList.splice(4, 1, 'filmas11', 'filmas12');
console.log(moviesList);

// 9. Pašalinti pirmą filmą.
// moviesList.shift();
moviesList.splice(0, 1);
console.log(moviesList);

// 10. Įrašyti naują filmą į masyvo pradžią.
// moviesList.unshift('filmas13');
moviesList.splice(0, 0, 'filmas13');
console.log(moviesList);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// moviesList.splice(1, 3);
// console.log(moviesList);
let moviesTask11 = moviesList.slice(1, 4);
console.log(moviesTask11);

// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// moviesList.splice(-4, 3);
// console.log(moviesList);
let moviesTask112 = moviesList.slice(-5, -2);
console.log(moviesTask112);

// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
// console.log(moviesList.reverse());

// concat metodas - sujungia masyvus į vieną masyvą
let moviesTask113 = moviesTask11.concat(moviesTask112).reverse();
console.log(moviesTask113);

// flat metodas - masyve esantcius kitus masyvus "isskleidzia"
let moviesTask114 = [moviesTask11, moviesTask112];
// let moviesTask114 = moviesTask11;
// moviesTask114.push(moviesTask112);
let mergerMovies = moviesTask114.flat().reverse();
console.log(mergerMovies);

// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.
let moviesList2 = [`filmas1`, `filmas2`, `filmas3`, `filmas4`, `filmas5`, `filmas6`, `filmas7`, `filmas8`, `filmas9`, `filmas10`, 'filmas11'];

function listMovies1(arr) {
  let moviesListElement = document.querySelector('ul');
  
  for (let i = 0; i < arr.length; i++) {
    moviesListElement.innerHTML += `<li>${i+1}. ${arr[i]}</li>`;
  }
}

// listMovies1(moviesList2);

// 13. Modifikuoti duomenis taip kad filmai turėtų ne tik pavadinimus, tačiau ir išleidimo datą.
// PIRMAS BŪDAS
let moviesNameList = [`filmas1`, `filmas2`, `filmas3`, `filmas4`, `filmas5`, `filmas6`, `filmas7`, `filmas8`, `filmas9`, `filmas10`, 'filmas11'];
let moviesYearList = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

// ANTRAS BŪDAS
let moviesWithYearList = [
  [`filmas1`, 1999],
  [`filmas2`, 2000],
  [`filmas3`, 2001],
  [`filmas4`],
  [`filmas5`, 2003],
  [`filmas6`, 2004],
  [`filmas7`, 2005],
  [`filmas8`, 2006],
  [`filmas9`, 2007],
  [`filmas10`, 2008],
];

// 13.1. Prie filmų sąrašo (ul - li elementuose) pridėti išleidimo datą.

// PIRMAS BŪDAS
function listMoviesWithYear(moviesList, moviesYear) {
  let moviesListElement = document.querySelector('ul');
  
  if (moviesList.length === moviesYear.length) {
    for (let i = 0; i < moviesList.length; i++) {
      moviesListElement.innerHTML += `<li>${i+1}. ${moviesList[i]} (${moviesYear[i]})</li>`;
    }
  } else {
    console.error('Filmu pavadinimų sąrašo ilgis nesutampa su filmų metų sąrašo ilgiu');
  }
}

// listMoviesWithYear(moviesNameList, moviesYearList);

// ANTRAS BŪDAS

// console.log('Pavadinimas:', moviesWithYearList[0][0]);
// console.log('Metai:', moviesWithYearList[0][1]);

// console.log('Pavadinimas:', moviesWithYearList[1][0]);
// console.log('Metai:', moviesWithYearList[1][1]);

// console.log('Pavadinimas:', moviesWithYearList[2][0]);
// console.log('Metai:', moviesWithYearList[2][1]);

// console.log('Pavadinimas:', moviesWithYearList[3][0]);
// console.log('Metai:', moviesWithYearList[3][1]);

function listMoviesWithYear2(moviesArr) {
  let moviesListElement = document.querySelector('ul');
  
  for (let i = 0; i < moviesArr.length; i++) {
    let year = moviesArr[i][1];
    // let movieYear = moviesArr[i][1] ? `(${moviesArr[i][1]})` : '';
    let movieYear = year ? `(${year})` : '';
    
    // let movieYear = '';
    // if (year) {
    //   movieYear = `(${year})`;
    // }

    moviesListElement.innerHTML += `<li>${i+1}. ${moviesArr[i][0]} ${movieYear}</li>`;
  }
}

// listMoviesWithYear2(moviesWithYearList);
  
// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

console.log('-----------------NESTED ARRAYS-------------------');
let movies1 = [`filmas1`, `filmas2`, `filmas3`, `filmas4`, `filmas5`, `filmas6`, `filmas7`, `filmas8`, `filmas9`, `filmas10`, 'filmas11'];
let movies2 = ['filmas12', 'filmas13', 'filmas14'];
let movies3 = ['filmas15', 'filmas16', 'filmas17', 'filmas18'];

let allMovies = [movies1, movies2, movies3];

function nestedMovies(moviesArr) {
  let moviesListElement = document.querySelector('ul');
  let moviesNumber = 1;

  for (let i = 0; i < moviesArr.length; i++) {
    // for (let j = 0; j < moviesArr[i].length; j++) {
      // moviesListElement.innerHTML += `<li>${moviesNumber}. ${moviesArr[i][j]}</li>`;
      // moviesNumber++;
    // }

    let array = moviesArr[i];

    for (let j = 0; j < array.length; j++) {
      moviesListElement.innerHTML += `<li>${moviesNumber}. ${array[j]}</li>`;
      moviesNumber++;
    }
  }
}

// nestedMovies([movies1, movies2, movies3]);
// nestedMovies(allMovies);

let allMoviesConcat = movies1.concat(movies2, movies3);
listMovies1(allMoviesConcat);

// MAP METODAS - masyvo metodas, kuris paleidžia funkciją kiekvienam masyvo nariui.

console.log('------------------MAP-------------------');

const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Marijampolė', 'Alytus'];

for (let i = 0; i < cities.length; i++) {
  console.log('For ciklas: ' + cities[i]);
}

// cities.map((city, index, array) => {
//   // document.querySelector('ul').innerHTML += '<li>Map ciklas: ' + city + '</li>';
//   // console.log(array[index - 1]);
//   // console.log(array[index + 1]);
//   console.log('Map ciklas: ' + index + ' ' + city);
// });

cities.map((city, index, originalArray) => {
  console.log(originalArray);
  console.log(index);
  console.log('Map ciklas: ' + city);
});

cities.forEach((city) => {
  console.log('For Each ciklas: ' + city);
});

// const myAwesomeArray = [1, 2, 3, 4, 5]

// const startForEach = performance.now()
// myAwesomeArray.forEach(x => (x + x) * 10000000000)
// const endForEach = performance.now()
// console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)

// const startMap = performance.now()
// myAwesomeArray.map(x => (x + x) * 10000000000)
// const endMap = performance.now()
// console.log(`Speed [map]: ${endMap - startMap} miliseconds`)

let numArr = [1, 2, 3, 4, 5, 10];
console.log(numArr);

let mapArray = numArr.map((number) => {
  return number * number;
});

console.log(numArr);
console.log(mapArray);

let forEachArray = numArr.forEach((number) => {
  return number * number;
});

console.log(numArr);
console.log(forEachArray);

// FILTER
let filteredArray = numArr.filter((number) => {
  return number >= 5;
});

console.log(numArr);
console.log(filteredArray);

let skaiciai = [1, 2, 3, 4, 5, 6, 7, -8, 9, 10, 11, -12, 13, 14, 15, 16, 17, 18, 19, -20];
// 1. Sukurti 20-ties skaičių masyvą ir išfiltruoti skaičius, kurie:
// 1.1. Yra didesni už 10
// let numberTask1 = skaiciai.filter((num) => {
//   return num > 10;
// });

const testFunc = arg => 'labas';

let numberTask1 = skaiciai.filter(num => num > 10);

console.log(numberTask1)

// 1.2. Yra neigiami
// let numberTask2 = skaiciai.filter((num) => {
//   return num < 0;
// });

let numberTask2 = skaiciai.filter(num => num < 0);
console.log(numberTask2)

// 1.3. Dalinasi iš 3 arba 5
// let numberTask3 = skaiciai.filter((num) => {
//   return num % 3 === 0 || num % 5 === 0;
// });

let numberTask3 = skaiciai.filter(num => num % 3 === 0 || num % 5 === 0);
console.log(numberTask3)

// 1.4. Dalinasi iš 4 ir yra didesni už 13
// let numberTask4 = skaiciai.filter((num) => {
//   return num % 4 === 0 && num > 13;
// });

let numberTask4 = skaiciai.filter(num => num % 4 === 0 && num > 13);
console.log(numberTask4)

// 2. Sukurti 20-ties žodžių masyvą ir išfiltruoti žodžius, kurie:
let zodziai = ["strip", "cheerful", "feeble", "homeless", "zip", "pencil", "impartial", "assorted", "lucky", "wacky", "compete", "faded", "skinny", "sheep", "drown", "government", "unite", "zoo", "bang", "fixas"];
// 2.1. Baigiasi raide e
let stringTask1 = zodziai.filter(word => {
  console.log(word);
  // console.log(word.slice(-1));
  console.log(word[word.length - 1]);

  return word.slice(-1) === 'e';
});
console.log(stringTask1);

// 2.2. Turi daugiau raidžių nei 8
let stringTask2 = zodziai.filter(word => word.length > 8);
console.log(stringTask2);

// 2.3. Turi neporinį raidžių skaičių
let stringTask3 = zodziai.filter(word => {
  return word.length % 2 !== 0;
});
console.log(stringTask3);

// 2.4. Savyje turi raidžių junginį as
let stringTask4 = zodziai.filter(word => word.includes('as'));
console.log(stringTask4);

// REDUCE
const numberArray = [1, 2, 3, 4];

let arraySum = numberArray.reduce((sum, currentNumber) => {
  console.log('Sum: ' + sum);
  console.log('Current: ' + currentNumber);
  let currentSum = sum + currentNumber;
  console.log(currentSum);

  return currentSum;
}, 0);

// console.log(arraySum);
let reducedStr = zodziai.reduce((prev, current, index) => {
  if (zodziai.length - 1 > index) {
    return prev + ', ' + current;
  } else {
    return prev + ', ' + current + '.';
  }
}) + '.';

console.log(reducedStr);

console.log(zodziai.join(', '));

// UŽDUOTIS SUDĖTINGESNĖ:
// 1. Sukurti 10-ies skaičių masyvą.
// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"
// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"
// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"
// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"
// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"