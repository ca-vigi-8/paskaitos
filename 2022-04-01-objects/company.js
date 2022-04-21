let company1 = new Object();
company1['company name'] = 'Company ABC';
company1.opened = 1995;
company1.companyCode = 41231231321;
company1.employees = 15;
company1.ceo = 'John Doe'
company1.nvo = false;
company1.workingLocations = ['Lithuania', 'Latvia', 'Estonia'];
company1.activityAreas = ['Marketing', 'Tourism'];
company1.contacts = {};
company1.contacts.phone = 37066667786;
company1.contacts.email = 'info@abc.lt';
company1.contacts.address = {
  country: 'Lithuania',
  city: 'Vilnius',
  street: 'Vilniaus st.',
  apartment: 15,
};
company1.subsidiary = [];


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
    this.workingLocations = this.workingLocations.filter(location => location !== locationToRemove);
  }
}

company1.subsidiary.push(company2);

company1.getAddress = function() {
  let outputText = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
  return outputText;
}

company1.setNVO = function() {
  this.nvo = true;
}

company1.setNonNVO = function() {
  this.nvo = false;
}

company1.switchNVO = function() {
  this.nvo = !this.nvo;
}

company1.getWorkingLocations = function() {
  return this.workingLocations.join(', ');
}

company1.getActivityAreas = function() {
  let outputText = this.activityAreas.reduce((allLocations, currentLocation) => {
    return allLocations + ', ' + currentLocation;
  });

  return outputText;
}

company1.addWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation);
};

company1.removeWorkingLocation = function(locationToRemove) {
  let updatedWorkingLocations = this.workingLocations.filter((location) => {
    return location !== locationToRemove;
  });

  this.workingLocations = updatedWorkingLocations;
};

const companyName = document.querySelector('.company-name');
const companyAddress = document.querySelector('.company-address');
const companyPhone = document.querySelector('.company-phone');
const companyInfo = document.querySelector('.company-info');
const workingLocationsTitle = document.querySelector('.working-locations h2');
const workingLocationsList = document.querySelector('.working-locations ul');
const activityAreas = document.querySelector('.activity-areas');
const subsidiaries = document.querySelector('.subsidiaries');

companyName.textContent = company1['company name'];
companyName.style.textTransform = 'uppercase';
companyName.style.border = '2px solid red';
companyName.style.padding = '5px 10px';

companyAddress.textContent = 'Adresas: ' + company1.getAddress();

if (company1.contacts.email) {
  const companyEmail = document.querySelector('.company-email');

  companyEmail.innerHTML = `El. paštas: <a href="mailto:${company1.contacts.email}">${company1.contacts.email}</a>`;
}

if (company1.contacts.phone) {
  companyPhone.innerHTML = `Telefono numeris: <a href="tel:${company1.contacts.phone}">${company1.contacts.phone}</a>`;
} else {
  companyPhone.textContent = `Telefono numeris nenurodytas`;
}

if (company1.opened) {
  companyInfo.innerHTML = `<li>Atidarymo metai: ${company1.opened}</li>`;
}

if (company1.companyCode) {
  companyInfo.innerHTML += `<li>Įmonės kodas: ${company1.companyCode}</li>`;
}

if (company1.employees) {
  companyInfo.innerHTML += `<li>Darbuotojų skaičius: ${company1.employees}</li>`;
}

if (company1.ceo) {
  companyInfo.innerHTML += `<li>Įmonės savininkas: ${company1.ceo}</li>`;
}

if (!company1.nvo) {
  companyInfo.innerHTML += `<li>Vyriausybinė organizacija</li>`;
}

if (company1.workingLocations.length > 0) {
  workingLocationsTitle.textContent = 'Įmonės veiklos šalys:';

  company1.workingLocations.map((location) => {
    workingLocationsList.innerHTML += `<li>${location}</li>`;
  });
}

if (company1.activityAreas.length > 0) {
  activityAreas.innerHTML = `<h2>Veiklos sritys:</h2>`;

  // let activitiesList = company1.activityAreas.map((activity) => {
  //   return `<li>${activity}</li>`;
  // });

  // let activitiesList = company1.activityAreas.map((activity) => `<li>${activity}</li>`);

  // activityAreas.innerHTML += `<ul>${activitiesList.join('')}</ul>`;

  let activitiesList = company1.activityAreas.reduce((all, current) => {
    return all + `<li>${current}</li>`;
  }, '');

  activityAreas.innerHTML += `<ul>${activitiesList}</ul>`;
}

if (company1.subsidiary.length > 0) {
  let subsidiariesList = '';

  company1.subsidiary.map((subsidiaryCompany) => {
    subsidiariesList += '<li>' + subsidiaryCompany['company name'] + '</li>';
  })

  subsidiaries.innerHTML = `<h2>Dukterinės įmonės:</h2>
                            <ul>${subsidiariesList}</ul>`;
}