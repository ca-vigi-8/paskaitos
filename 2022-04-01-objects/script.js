// Masyvo sukūrimas
let studentai = ['Jonas', 'Petras', 'Ona'];

// Masyvo narių pasiekimas
console.log(studentai[1]);

// Kaip iteruojama/loop'inama per masyvą?
// for, map, forEach, for...of

for (let i = 0; i < studentai.length; i++) {
  console.log('For ciklas: ' + studentai[i]);
}

studentai.map((studentas) => {
  console.log('Map: ' + studentas);
})

studentai.forEach((studentas) => {
  console.log('For Each: ' + studentas);
})

for (let studentas of studentai) {
  console.log('For Of: ' + studentas);
}

// Vardas, Pavarde, amzius, grupe, miestas
let studentas1 = ['Jonas', 'Jonaitis', 25, 21, 'Vilnius'];

/*
  Objekto sintaksė:

  let object = {
    key: 'value'
  }

Studentas 1:
  - Vardas: Jonas,
  - Pavarde: Jonaitis,
  - Amzius: 25,
  - Grupe: 21,
  - Miestas: Vilnius.

*/

// Objekto sukūrimas
let studentObj = {
  vardas: 'Jonas', // Property (key: value)
  pavarde: 'Jonaitis', // Ypatybe (pavadinimas: reiksme)
  amzius: 25,
  grupe: 21,
  miestas: 'Vilnius',
  aktyvus: false,
  deaktyvuoti: function() {
    this.aktyvus = false;
  },
}

let propertyName = 'miestas';

console.log(studentObj)

// Objekto properties pasiekimas
console.log(studentObj['vardas']);
console.log(studentObj['amzius']);
console.log(studentObj[propertyName]);

console.log(studentObj.miestas);
console.log(studentObj.pavarde);

// Objekto properties keitimas
studentObj.amzius = 26;
console.log(studentObj.amzius);

studentObj['miestas'] = 'Kaunas';
console.log(studentObj['miestas']);

// Objekto properties sukurimas
studentObj.antrasVardas = 'Petras';
console.log(studentObj.antrasVardas);

studentObj['gimtasis miestas'] = 'Klaipeda';
console.log(studentObj);

console.log(studentObj['gimtasis miestas']);
let gimtine = 'gimtasis miestas';
console.log(studentObj[gimtine]);

let studentoHobiai = ['Krepsinis', 'Siuvinejimas', 'Joga'];
studentObj.hobiai = studentoHobiai;
console.log(studentObj);
console.log(studentObj['hobiai'][1])
console.log(studentObj.hobiai)

studentObj.hobiai.map(hobis => console.log(hobis));

delete studentObj.amzius;
console.log(studentObj);

let studentsList = [
  {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 25,
    grupe: 21,
    miestas: 'Vilnius',
    hobiai: ['Pirmas hobis', 'antras hobis', 'trecia hobis'],
  },
  {
    vardas: 'Petras',
    pavarde: 'Petraitis',
    amzius: 28,
    grupe: 21,
    miestas: 'Kaunas',
    hobiai: ['Pirmas hobis', 'antras hobis', 'trecia hobis'],
  },
  {
    vardas: 'John',
    pavarde: 'Doe',
    amzius: 28,
    grupe: 21,
    miestas: 'Kaunas',
    hobiai: ['Pirmas hobis', 'antras hobis', 'trecia hobis'],
  },
  {
    vardas: 'Doe',
    pavarde: 'John',
    amzius: 32,
    grupe: 19,
    miestas: 'Klaipeda',
    hobiai: ['Pirmas hobis', 'antras hobis', 'trecia hobis'],
  },
];

console.log(studentsList);

console.log(studentsList[0].vardas);
console.log(studentsList[1].vardas);
console.log(studentsList[2].vardas);
console.log(studentsList[3].vardas);

console.log('------FOR CIKLAS------');
for (let i = 0; i < studentsList.length; i++) {
  console.log(studentsList[i].vardas);
  console.log(studentsList[i].amzius);
}

console.log('------MAP------');
// studentsList.map((student) => {
//   console.log(student.vardas);
//   console.log(student.pavarde);
//   console.log(student.amzius);
//   student.amzius++;
//   console.log(student.amzius);
// });

let studentsAge = studentsList.map((student) => {
  return student.amzius + 2;
});

console.log(studentsList);
console.log(studentsAge);

studentsList.forEach((student) => {
  console.log(student.hobiai);
  student.hobiai.map((hobis) => {
    console.log(hobis);
  });
});

// adresas: {
//   miestas: 'Vilnius',
//   gatve: 'Vilniaus',
//   namoNumeris: 10,
//   butoNumeris: 10
// }

studentsList.map((student) => {
  // Pirmas budas
  // let adresasObj = {
  //   miestas: 'Vilnius',
  //   gatve: 'Vilniaus',
  //   namoNumeris: 10,
  //   butoNumeris: 10
  // }

  // student.adresas = adresasObj;

  // Antras budas
  // student.adresas = {};
  // student.adresas.miestas = 'Vilnius';
  // student.adresas.gatve = 'Vilniaus';
  // student.adresas.namoNumeris = 10;
  // student.adresas.butoNumeris = 10;

  // Trecias budas
  student.adresas = {
    miestas: 'Vilnius',
    gatve: 'Vilniaus',
    namoNumeris: 10,
    butoNumeris: 10
  };

  console.log(student);
});

studentsList.map((studentas) => {
  console.log(studentas.adresas.miestas);
  console.log(studentas.adresas.gatve);
  console.log(studentas.adresas.namoNumeris);
  console.log(studentas.adresas.butoNumeris);

  let adresoTekstas = `${studentas.adresas.gatve} g. ${studentas.adresas.namoNumeris}-${studentas.adresas.butoNumeris}, ${studentas.adresas.miestas}.`

  console.log(adresoTekstas);
})

// Iteraracija/loop'inimas per objekto properties
console.log(studentObj);

// for (let studentas of studentai) {
//   console.log('For Of: ' + studentas);
// }

// for in ciklas - leidžia iteruoti per objekto properties
for (let key in studentObj) {
  console.log('Key: ' + key);
  console.log('Value: ' + studentObj[key]);
}

studentObj.aktyvus = true;

console.log(studentObj);

studentObj.deaktyvuoti();

console.log(studentObj.aktyvus);

console.log('-----------COMPANIES------------');
// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.

// let company1 = {
//   name: 'asdasd',
// }

// let company1 = {};
// company1.name = 'asdasd';

let company1 = new Object();

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC';

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 1995;

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 41231231321;

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 15;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe'

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Latvia'];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['Marketing', 'Tourism'];

// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// PIRMAS BŪDAS
// company1.contacts = {
//   phone: 37066667785,
//   email: 'info@abc.lt',
//   address: {
//     country: 'Lithuania',
//     city: 'Vilnius',
//     street: 'Vilniaus st.',
//     apartment: 15,
//   }
// }

// ANTRAS BŪDAS
// company1.contacts = {
//   phone: 37066667785,
//   email: 'info@abc.lt',
// }

// company1.contacts.address = {
//   country: 'Lithuania',
//   city: 'Vilnius',
//   street: 'Vilniaus st.',
//   apartment: 15,
// }

// TREČIAS BŪDAS
company1.contacts = {};
company1.contacts.phone = 37066667785;
company1.contacts.email = 'info@abc.lt';
company1.contacts.address = {
  country: 'Lithuania',
  city: 'Vilnius',
  street: 'Vilniaus st.',
  apartment: 15,
};

// 2.10. Property „subsidiary", kurio reikšmė bus naujas objektas.
company1.subsidiary = [];

// 3.1 Sukurti naują kintamąjį pagal tą patį modelį. Tai bus dukterinė įmonę.
let company2 = {
  'company name': 'Company XYZ',
  opened: 2000,
  companyCode: 4564321316,
  employees: 200,
  ceo: 'Vardenis Pavardenis',
  nvo: true,
  workingLocations: ['Lithuania', 'Poland'],
  activityAreas: ['Marketing', 'B2B'],
  contacts: {
    phone: 37066667786,
    email: 'info@xyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 16,
    }
  },
  subsidiary: [],
  getAddress() {
    let outputText = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
    return outputText;
  },
  setNVO() {
    this.nvo = true;
  },
  setNonNVO: function() {
    this.nvo = false;
  },
  switchNVO() {
    this.nvo = !this.nvo;
  },
  getWorkingLocations() {
    return this.workingLocations.join(', ');
  },
  getActivityAreas() {
    let outputText = this.activityAreas.reduce((allLocations, currentLocation) => {
      return allLocations + ', ' + currentLocation;
    });
    
    return outputText;
  },
  addWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation);
  },
  removeWorkingLocation(locationToRemove) {
    // let updatedWorkingLocations = this.workingLocations.filter((location) => {
    //   return location !== locationToRemove;
    // });
  
    // this.workingLocations = updatedWorkingLocations;

    // this.workingLocations = this.workingLocations.filter((location) => {
    //   return location !== locationToRemove;
    // });

    this.workingLocations = this.workingLocations.filter(location => location !== locationToRemove);
  }
}

// 3.2 Šį objektą priskirti prie „subsidiary" reikšmės pirmame objekte.
// 4. BONUS: property „subsidiaries" sukurti kaip masyvą, kuriame gali būti ir daugiau dukterinių įmonių.

company1.subsidiary.push(company2);

console.log(company1);
console.log(company2);

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

company1.getAddress = function() {
  let outputText = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
  return outputText;
}

console.log(company1.getAddress());

// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.

company1.setNVO = function() {
  this.nvo = true;
}

console.log(company1.nvo);
company1.setNVO();
console.log(company1.nvo);

//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function() {
  this.nvo = false;
}

company1.setNonNVO();
console.log(company1.nvo);

//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.

company1.switchNVO = function() {
  // if (this.nvo === true) {
  //   this.nvo = false;
  // } else {
  //   this.nvo = true;
  // }

  this.nvo = !this.nvo;

  console.log('Dabartine reiksme: ' + this.nvo);
  console.log('Priesinga reiksme: ' + !this.nvo);
}
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.

company1.getWorkingLocations = function() {
  return this.workingLocations.join(', ');
}

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.

company1.getActivityAreas = function() {
  let outputText = this.activityAreas.reduce((allLocations, currentLocation) => {
    return allLocations + ', ' + currentLocation;
  });

  return outputText;
}

console.log(company1.getActivityAreas());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.

company1.addWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation);
};

company1.addWorkingLocation('Germany');
company1.addWorkingLocation('France');
console.log(company1.workingLocations);

//        8.2. Naują veiklos rūšį prie vaiklų masyvo.


// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.

company1.removeWorkingLocation = function(locationToRemove) {
  let updatedWorkingLocations = this.workingLocations.filter((location) => {
    return location !== locationToRemove;
  });

  this.workingLocations = updatedWorkingLocations;
};

company1.removeWorkingLocation('Germany');
console.log(company1.workingLocations);

//        9.2. Veiklos rūšį iš vaiklų masyvo.


console.log(company2.getActivityAreas());


console.log(company1.subsidiary);

document.querySelector('h1').textContent = company1['company name'];
document.querySelector('p').textContent = 'Įmonės adresas ' + company1.getAddress();