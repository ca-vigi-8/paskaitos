// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const personName = document.querySelector('input[name=name]').value;
//   const personAge = document.querySelector('input[type=number]').value;
//   const personEmail = document.querySelector('#person-email').value;
//   const color = event.target.elements.color.value;
//   const password = form.querySelector('#password').value;

//   console.log(personName);
//   console.log(personAge);
//   console.log(personEmail);
//   console.log(color);
//   console.log(password);
// })

let studentForm = document.querySelector('#student-form');

const INITIAL_STUDENT_DATA = [
  {
    name: 'Vardas 1',
    surname: 'Pavarde 1',
    age: 20,
    phone: '+370654654654',
    email: 'vardas1@imone.lt',
    itKnowledge: 5,
    group: 10,
    interests: [
      'JavaScript',
      'TypeScript',
      'Node',
      'React Native'
    ]
  },
  {
    name: 'Vardas 2',
    surname: 'Pavarde 2',
    age: 35,
    phone: '+370654654654',
    email: 'vardas2@imone.lt',
    itKnowledge: 5,
    group: 10,
    interests: [
      'JavaScript',
      'TypeScript',
      'Node',
      'React Native'
    ]
  },
  {
    name: 'Vardas 3',
    surname: 'Pavarde 3',
    age: 32,
    phone: '+370654654654',
    email: 'vardas3@imone.lt',
    itKnowledge: 5,
    group: 10,
    interests: [
      'JavaScript',
      'TypeScript',
      'Node',
      'React Native'
    ]
  },
  {
    name: 'Vardas 4',
    surname: 'Pavarde 4',
    age: 25,
    phone: '+370654654654',
    email: 'vardas4@imone.lt',
    itKnowledge: 5,
    group: 10,
    interests: [
      'JavaScript',
      'TypeScript',
      'Node',
      'React Native'
    ]
  },
  {
    name: 'Vardas 5',
    surname: 'Pavarde 5',
    age: 18,
    phone: '+370654654654',
    email: 'vardas5@imone.lt',
    itKnowledge: 5,
    group: 10,
    interests: [
      'JavaScript',
      'TypeScript',
      'Node',
      'React Native'
    ]
  },

];

function renderInitialStudentData(students) {
  students.map((student) => {

    let personName = student.name;
    let personSurname = student.surname;
    let personAge = student.age;
    let personPhone = student.phone;
    let personEmail = student.email;
    let personItKnowledge = student.itKnowledge;
    let personGroup = student.group;
    let interests = student.interests;
  
    let studentsList = document.querySelector('#students-list');
    let studentItem = document.createElement('div');
    studentItem.classList.add('student-item');
  
    let studentNameEl = document.createElement('p');
    studentNameEl.innerHTML = `<strong>Name: </strong>${personName}`;
    
    let studentSurnameEl = document.createElement('p');
    studentSurnameEl.innerHTML = `<strong>Surname: </strong>${personSurname}`;
    
    let studentAgeEl = document.createElement('p');
    studentAgeEl.innerHTML = `<strong>Age: </strong>${personAge}`;
    
    let studentPhoneEl = document.createElement('p');
    studentPhoneEl.innerHTML = `<strong>Phone: </strong><span class="hidden-area">****</span>`;
    
    let studentEmailEl = document.createElement('p');
    studentEmailEl.innerHTML = `<strong>Email: </strong><span class="hidden-area">****</span>`;
    
    let studentItKnowledgeEl = document.createElement('p');
    studentItKnowledgeEl.innerHTML = `<strong>IT Knowledge: </strong>${personItKnowledge}`;
    
    let studentGroupEl = document.createElement('p');
    studentGroupEl.innerHTML = `<strong>Group: </strong>${personGroup}`;
  
    let interestWrapperEl = document.createElement('div');
    let interestTitleEl = document.createElement('h4');
    interestTitleEl.textContent = 'Interests:';
  
    let studentInterestsEl = document.createElement('ul');
  
    interests.forEach((interest) => {
      let interestItem = document.createElement('li');
      interestItem.textContent = interest;
  
      studentInterestsEl.append(interestItem);
    });
  
    interestWrapperEl.append(interestTitleEl, studentInterestsEl);
  
    let privateInfoButton = document.createElement('button');
    privateInfoButton.textContent = 'Rodyti asmens duomenis';
  
    privateInfoButton.addEventListener('click', () => {
      if (privateInfoButton.classList.contains('hide')) {
        studentPhoneEl.querySelector('.hidden-area').textContent = '****';
        studentEmailEl.querySelector('.hidden-area').textContent = '****';
        privateInfoButton.textContent = 'Rodyti asmens duomenis';
      } else {
        studentPhoneEl.querySelector('.hidden-area').textContent = personPhone;
        studentEmailEl.querySelector('.hidden-area').textContent = personEmail;
        privateInfoButton.textContent = 'Slėpti asmens duomenis';
      }
  
      privateInfoButton.classList.toggle('hide');
    });
  
    let deleteStudentButton = document.createElement('button');
    deleteStudentButton.textContent = 'Ištrinti studentą';
  
    deleteStudentButton.addEventListener('click', () => {
      studentItem.remove();
      alertMessage(`Studentas (${personName} ${personSurname}) sėkmingai ištrintas.`);
    });
  
    studentItem.append(studentNameEl, studentSurnameEl, studentAgeEl, studentPhoneEl, studentEmailEl, studentItKnowledgeEl, studentGroupEl, interestWrapperEl, privateInfoButton, deleteStudentButton);
  
    studentsList.prepend(studentItem);
  });
}

renderInitialStudentData(INITIAL_STUDENT_DATA);





function itKnowledgeOutputReset() {
  let itKnowledgeElement = document.querySelector('#student-it-knowledge');
  let itKnowledgeOutput = document.querySelector('#it-knowledge-output');
  
  itKnowledgeOutput.textContent = itKnowledgeElement.value;
  
  itKnowledgeElement.addEventListener('input', () => {
    itKnowledgeOutput.textContent = itKnowledgeElement.value;
  });
}

itKnowledgeOutputReset();



studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // let personNameElement = document.querySelector('input[name=name]');
  // let personNameValue = personNameElement.value;

  let personName = document.querySelector('input[name=name]').value;
  let personSurname = document.querySelector('#student-surname').value;
  let personAge = event.target.elements.age.value;
  let personPhone = studentForm.querySelector('#student-phone').value;
  let personEmail = document.querySelector('#student-email').value;
  let personItKnowledge = event.target.elements['it-knowledge'].value;
  // let personGroup = document.querySelector('[name=group]:checked').value;
  let personGroup = event.target.elements.group.value;
  let interests = document.querySelectorAll('input[name=interest]:checked');

//   1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
//   2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
//     2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
//     2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
//         2.2.1. Turi būti apvestas raudonu rėmeliu.
//         2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".

  // let inputErrorMessage = document.querySelector('.input-error-message');

  // if (inputErrorMessage) {
  //   inputErrorMessage.remove();
  // }

  // let personNameElement = document.querySelector('input[name=name]');
  // personNameElement.classList.remove('input-error');

  // if (!personName) {
  //   personNameElement.classList.add('input-error');
  //   alertMessage('Ne visi laukeliai yra užpildyti.');
  //   let inputError = document.createElement('span');
  //   inputError.textContent = 'Šis laukelis yra privalomas';
  //   // inputError.style.color = 'red';
  //   inputError.classList.add('input-error-message');
  //   personNameElement.after(inputError);

  //   return;
  // }

  let inputErrorMessages = document.querySelectorAll('.input-error-message');
  inputErrorMessages.forEach(message => message.remove());

  // let inputErrors = document.querySelectorAll('input.input-error');
  // inputErrors.forEach(input => input.classList.remove('input-error'));

  document.querySelectorAll('input.input-error').forEach(input => input.classList.remove('input-error'));

  let requiredInputs = document.querySelectorAll('input.required');

  let formInvalid = false;

  requiredInputs.forEach(input => {
    if (!input.value) {
      formInvalid = true;
      input.classList.add('input-error');
      alertMessage('Ne visi laukeliai yra užpildyti.', 'error-alert');
      let inputError = document.createElement('span');
      inputError.textContent = 'Šis laukelis yra privalomas';
      inputError.classList.add('input-error-message');
      input.after(inputError);

      return;
    }
  })

  // if (document.querySelector('.input-error')) {
  //   return;
  // }

  if (formInvalid) {
    return;
  }

  let studentCreatedText = `Student created (${personName} ${personSurname})`;
  alertMessage(studentCreatedText);

  // let text = document.createElement('p');
  // text.textContent = `${personName} ${personSurname} (amžius ${personAge}), tel.nr. ${personPhone}, el. paštas ${personEmail}, IT žinios: ${personItKnowledge}, grupė: ${personGroup}.`;

  // studentForm.after(text);

  let studentsList = document.querySelector('#students-list');
  let studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  let studentNameEl = document.createElement('p');
  studentNameEl.innerHTML = `<strong>Name: </strong>${personName}`;
  
  let studentSurnameEl = document.createElement('p');
  studentSurnameEl.innerHTML = `<strong>Surname: </strong>${personSurname}`;
  
  let studentAgeEl = document.createElement('p');
  studentAgeEl.innerHTML = `<strong>Age: </strong>${personAge}`;
  
  let studentPhoneEl = document.createElement('p');
  studentPhoneEl.innerHTML = `<strong>Phone: </strong><span class="hidden-area">****</span>`;
  
  let studentEmailEl = document.createElement('p');
  studentEmailEl.innerHTML = `<strong>Email: </strong><span class="hidden-area">****</span>`;
  
  let studentItKnowledgeEl = document.createElement('p');
  studentItKnowledgeEl.innerHTML = `<strong>IT Knowledge: </strong>${personItKnowledge}`;
  
  let studentGroupEl = document.createElement('p');
  studentGroupEl.innerHTML = `<strong>Group: </strong>${personGroup}`;

  let interestWrapperEl = document.createElement('div');
  let interestTitleEl = document.createElement('h4');
  interestTitleEl.textContent = 'Interests:';

  let studentInterestsEl = document.createElement('ul');

  interests.forEach((interest) => {
    let interestItem = document.createElement('li');
    interestItem.textContent = interest.value;

    studentInterestsEl.append(interestItem);
  });

  interestWrapperEl.append(interestTitleEl, studentInterestsEl);

//   1. Vietoje asmens duomenų (el. paštas ir tel. nr) rodyti tik žvaigždutes „****".
//   2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
//   3. Paspaudus šį mygtuką:
//     3.1. Parodyti to studento el. paštą ir tel. nr.
//     3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
//   4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
//     4.1. Paslėpti asmens duomenis.
//     4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".

  let privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Rodyti asmens duomenis';

  privateInfoButton.addEventListener('click', () => {
    if (privateInfoButton.classList.contains('hide')) {
      studentPhoneEl.querySelector('.hidden-area').textContent = '****';
      studentEmailEl.querySelector('.hidden-area').textContent = '****';
      privateInfoButton.textContent = 'Rodyti asmens duomenis';
    } else {
      studentPhoneEl.querySelector('.hidden-area').textContent = personPhone;
      studentEmailEl.querySelector('.hidden-area').textContent = personEmail;
      privateInfoButton.textContent = 'Slėpti asmens duomenis';
    }

    privateInfoButton.classList.toggle('hide');
  });

// PENKTA UŽDUOTIS (studento ištrynimas):
// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

  let deleteStudentButton = document.createElement('button');
  deleteStudentButton.textContent = 'Ištrinti studentą';

  deleteStudentButton.addEventListener('click', () => {
    // deleteStudentButton.parentElement.remove();
    studentItem.remove();
    alertMessage(`Studentas (${personName} ${personSurname}) sėkmingai ištrintas.`);
  });

  studentItem.append(studentNameEl, studentSurnameEl, studentAgeEl, studentPhoneEl, studentEmailEl, studentItKnowledgeEl, studentGroupEl, interestWrapperEl, privateInfoButton, deleteStudentButton);

  studentsList.prepend(studentItem);

  studentForm.reset();
  itKnowledgeOutputReset();
});

function alertMessage(text, elementClass = '') {
  let alertElement = document.querySelector('#alert');
  alertElement.textContent = text;

  if (elementClass) {
    alertElement.classList.add(elementClass);
  }

  setTimeout(() => {
    alertElement.textContent = '';
    if (elementClass) {
      alertElement.classList.remove(elementClass);
    }
  }, 5000);
}

