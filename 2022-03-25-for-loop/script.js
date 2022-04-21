// console.log('- ' + 1 + '!');
// console.log('- ' + 2 + '!');
// console.log('- ' + 3 + '!');
// console.log('- ' + 4 + '!');
// console.log('- ' + 5 + '!');
// console.log('- ' + 6 + '!');
// console.log('- ' + 7 + '!');
// console.log('- ' + 8 + '!');
// console.log('- ' + 9 + '!');
// console.log('- ' + 10 + '!');
// console.log('- ' + 11 + '!');
// console.log('- ' + 12 + '!');
// console.log('- ' + 13 + '!');
// console.log('- ' + 14 + '!');
// console.log('- ' + 15 + '!');
// console.log('- ' + 16 + '!');
// console.log('- ' + 17 + '!');
// console.log('- ' + 18 + '!');
// console.log('- ' + 19 + '!');
// console.log('- ' + 20 + '!');

// function count(num) {
//   console.log('-' + num + '!');
// }

// count(1);
// count(2);
// count(3);
// count(4);
// count(5);

// FOR CIKLAS
// for (kintamasis, salyga, kintamojo pakeitimas) {

// }


// for (let i = 0; i < 30; i++) {
//   if (i > 10) {
//     i+=5;
//   }
//   console.log(i);
// }



// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.

function loop1(count, nth) {
  for (let i = 1; i <= count; i++){
    if (i % nth === 0) {
      console.log(i * 2);
    }
  }
}

// loop1(100, 20);
// 2. Padaugina skaičių iš 5.

function loop2(count, nth) {
  for (let i = 1; i <= count; i += nth){
    console.log(i * 5);
  }
}

loop2(100, 20);

// 3. Prideda prie skaičiaus 5.

function loop3() {
  for (let i = 1; i <= 100; i++){
    console.log(i + 5);
  }
}

// loop3();

// 4. Atima iš skaičiaus 2.
function loop4() {
  for (let i = 1; i <= 100; i++){
    console.log(i - 2);
  }
}

// loop4();

// 5. Pakelia skaičių kvadratu.
function loop5() {
  for (let i = 1; i <= 100; i++){
    console.log(i * i);
  }
}

// loop5();

// 6. Pakelia skaičių kūbu.
function loop6() {
  for (let i = 1; i <= 100; i++){
    let answer = i * i * i;
    console.log(`${i} * ${i} * ${i} = ${answer}`);
  }
}

// loop6();

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.
function loop7(count) {
  for (let i = count; i > 0; i--){
    let answer = i * 2;
    console.log(`${i} * 2 = ${answer}`);
  }
}
// loop7(50);

// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų kiek kartų ciklas turi kartotis.
// 9.2. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.


// FIZZ BUZZ
console.log('-----------------FIZZ BUZZ------------------');

// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// function fizzBuzzTask1(start = 1, end = 100) {
//   for (let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       // Jeigu dalinasi ir iš 3, ir iš 5
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       // Jeigu dalinasi tik iš 3
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       // Jeigu dalinasi tik iš 5
//       console.log('Buzz');
//     } else {
//       // Visi kiti variantai
//       console.log(i);
//     }
//   }
// }

function fizzBuzzTask1(start = 1, end = 100) {
  for (let i = start; i <= end; i++) {
    let output = '';

    if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else {
      output = i;
    }

    console.log(output);
  }
}

// fizzBuzzTask1(1, 100);

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".

// function fizzBuzzTask2(start = 1, end = 150) {
//   for (let i = start; i <= end; i++) {
//     let output = '';

//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//       output = 'FizzBuzzBiff';
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       output = 'FizzBuzz';
//     } else if (i % 3 === 0 && i % 7 === 0) {
//       output = 'FizzBiff';
//     } else if (i % 5 === 0 && i % 7 === 0) {
//       output = 'BuzzBiff';
//     } else if (i % 3 === 0) {
//       output = 'Fizz';
//     } else if (i % 5 === 0) {
//       output = 'Buzz';
//     } else if (i % 7 === 0) {
//       output = 'Biff'
//     } else {
//       output = i;
//     }

//     console.log(output);
//   }
// }

// function fizzBuzzTask2(start = 1, end = 150) {
//   for (let i = start; i <= end; i++) {
//     let output = '';

//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//       output = 'FizzBuzzBiff';
//     }
    
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//       output = 'FizzBuzz';
//     }
    
//     if (i % 3 === 0 && i % 5 !== 0 && i % 7 === 0) {
//       output = 'FizzBiff';
//     }
    
//     if (i % 3 !== 0 && i % 5 === 0 && i % 7 === 0) {
//       output = 'BuzzBiff';
//     }
    
//     if (i % 3 === 0 && i % 5 !== 0 && i % 7 !== 0) {
//       output = 'Fizz';
//     }
    
//     if (i % 3 !== 0 && i % 5 === 0 && i % 7 !== 0) {
//       output = 'Buzz';
//     }
    
//     if (i % 3 !== 0 && i % 5 !== 0 && i % 7 === 0) {
//       output = 'Biff'
//     }
    
//     if (i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//       output = i;
//     }

//     console.log(output);
//   }
// }

// fizzBuzzTask2(1, 150);

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

// function fizzBuzzTask3(start = 1, end = 100) {
//   for (let i = start; i <= end; i++) {
//     let output = '';

//     if (i % 3 === 0) {
//       // output = output + 'Fizz';
//       output += 'Fizz';
//     }

//     if (i % 5 === 0) {
//       output += 'Buzz';
//     }

//     if (i % 7 === 0) {
//       output += 'Biff';
//     }

//     if (i % 9 === 0) {
//       output += 'Fuzz';
//     }

//     if (output === '') {
//       output = i;
//     }

//     console.log(output);
//   }
// }

function fizzBuzzTask3(start = 1, end = 400) {
  for (let i = start; i <= end; i++) {
    let output = '';

    i % 3 === 0 && (output += 'Fizz');
    i % 5 === 0 && (output += 'Buzz');
    i % 7 === 0 && (output += 'Biff');
    i % 9 === 0 && (output += 'Fuzz');
    i % 11 === 0 && (output += 'Buff');
    output === '' && (output = i);

    console.log(output);
    renderHtmlElement(output, '#fizz-buzz-list', 'li');
  }
}

fizzBuzzTask3();

document.querySelector('h1').textContent = 'Labas <em>vakaras</em>';
document.querySelector('h2').innerHTML = 'Labas <em>vakaras</em>';

// 2.1. Sukurti funkciją, kuri priima tekstą ir jį išveda į ekraną.
// 2.2. Ši funkcija tekstą išveda į pasirinktą HTML elementą.
// 2.3. Jeigu tekstas nėra įrašomas, tai funkcija neturi suveikti.
// 2.4. Jeigu HTML elementas nėra įrašomas, tai pagal nutylėjimą jis turėtų būti h2 elementas.

function renderHtmlElement(text, elementSelector, element = 'h2') {
  // if (text) {
  //   let wrapperElement = document.querySelector('#wrapper');
  //   // wrapperElement.innerHTML = '<' + element + '>' + text + '</' + element + '>';
  //   wrapperElement.innerHTML = `<${element}>${text}</${element}>`;
  // }
  
  if (!text || !elementSelector) {
    return;
  }
  
  let wrapperElement = document.querySelector(elementSelector);
  wrapperElement.innerHTML += `<${element}>${text}</${element}>`;
}

renderHtmlElement('Sveikas', '#wrapper', 'p');
renderHtmlElement('Labas', '.wrapper', 'h3');