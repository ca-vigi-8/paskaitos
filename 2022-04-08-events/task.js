// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus

let numbers = document.querySelector('#numbers');
let numberDisplay = document.createElement('h3');
let minusButton = document.createElement('button');
let plusButton = document.createElement('button');
let resetButton = document.createElement('button');
let numberInput = document.createElement('input');
let minus2Button = document.createElement('button');
let plus2Button = document.createElement('button');
let saveGrade = document.createElement('button');
let gradesTitle = document.createElement('h4');
let gradesList = document.createElement('ul');

numberInput.setAttribute('type', 'number');
numberInput.setAttribute('max', '10');
numberInput.setAttribute('min', '0');
numberInput.setAttribute('value', '0');
numbers.prepend(numberInput);

// 3. h3 elemento tekstas turėtų būti „0"
numberDisplay.textContent = '0';

// 4. Mygtukų tekstas turėtų būti „+" ir „-"
minusButton.textContent = '-';
minusButton.setAttribute('disabled', true);
plusButton.textContent = '+';

// numbers.append(numberDisplay);
// numbers.append(minusButton);
// numbers.append(plusButton);

resetButton.textContent = 'Reset';

minus2Button.textContent = '-2';
minus2Button.setAttribute('disabled', true);

plus2Button.textContent = '+2';

saveGrade.textContent = 'Įrašyti balą';

gradesTitle.textContent = 'Balai:';

numbers.append(numberDisplay, minusButton, plusButton, resetButton, minus2Button, plus2Button, saveGrade, gradesTitle, gradesList);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtyko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už vieną, tai „-" mygtukas turėtų patapti neveiksnus (disabled) - element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 10, tai „+" myktukas turėtų patapti neveiksnus (disabled)

plusButton.addEventListener('click', () => {
  numberDisplay.textContent++;
  checkData();
});

minusButton.addEventListener('click', () => {
  numberDisplay.textContent--;
  checkData();
});

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

function changeColor() {
  if (numberDisplay.textContent > 4) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
}

changeColor();

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viska atstatoma į pradinę padėtį.

resetButton.addEventListener('click', () => {
  resetForm();
});

function resetForm() {
  numberDisplay.textContent = '0';
  numberInput.value = numberDisplay.textContent;
  changeColor();
  minusButton.setAttribute('disabled', true);
  plusButton.removeAttribute('disabled');

  minus2Button.setAttribute('disabled', true);
  plus2Button.removeAttribute('disabled');
}

// 11. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

numberInput.addEventListener('change', (event) => {
  numberDisplay.textContent = event.target.value;
  checkData();
})

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.

minus2Button.addEventListener('click',() => {
  // numberDisplay.textContent = numberDisplay.textContent - 2;
  numberDisplay.textContent -= 2;
  checkData();
})

plus2Button.addEventListener('click',() => {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 2;
  checkData();
})

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį append'inti prie ul elemento.

saveGrade.addEventListener('click', () => {
  let grade = document.createElement('li');
  grade.textContent = numberDisplay.textContent;
  gradesList.append(grade);

  // 14.3. Išvalyti formą ir atstatyti viską į pradinę padėtį.
  resetForm();
})

function checkData() {
  numberInput.value = numberDisplay.textContent;

  if (numberDisplay.textContent > 9) {
    plusButton.setAttribute('disabled', true);
  } else {
    plusButton.removeAttribute('disabled');
  }

  if (numberDisplay.textContent < 1) {
    minusButton.setAttribute('disabled', true);
  } else {
    minusButton.removeAttribute('disabled');
  }

  if (numberDisplay.textContent < 2) {
    minus2Button.setAttribute('disabled', true);
  } else {
    minus2Button.removeAttribute('disabled');
  }

  if (numberDisplay.textContent > 8) {
    plus2Button.setAttribute('disabled', true);
  } else {
    plus2Button.removeAttribute('disabled');
  }

  changeColor();
}
