// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas
//  1.2. population - miesto populiacija
//  1.3. location - objektas
//    1.3.1. continent - žemynas
//    1.3.2. country - šalis
//  1.4. touristAttractions (lankytinos vietos) masyvą

let cities = [{
    name: 'London',
    population: 11120000,
    location: {
      continent: 'Europe',
      country: 'United Kingdom',
    },
    touristAttractions: ['Big Ben'],
    isCapital: true
  },
  {
    name: 'Paris',
    population: 11027000,
    location: {
      continent: 'Europe',
      country: 'France',
    },
    touristAttractions: [],
    isCapital: true
  },
  {
    name: 'New York',
    population: 19294000,
    location: {
      continent: 'North America',
      country: 'United States of America',
    },
    touristAttractions: ['Metropolitan Museum', 'Central Park', 'Modern Art Museum'],
    isCapital: false
  },
  {
    name: 'Moscow',
    population: 17693000,
    location: {
      continent: 'Europe and Asia',
      country: 'Russia',
    },
    touristAttractions: [`St. Basil's Cathedral`, 'Moscow Kremlin', 'Red Square'],
    isCapital: true
  },
  {
    name: 'Dubai',
    population: 6595000,
    location: {
      continent: 'Asia',
      country: 'United Arab Emirates',
    },
    touristAttractions: ['Burj Khalifa', 'Burj Al Arab', 'Dubai Mall'],
    isCapital: false
  },
  {
    name: 'Tokyo',
    population: 39105000,
    location: {
      continent: 'Asia',
      country: 'Japan',
    },
    touristAttractions: ['Senso-ji', 'Tokyo Skytree', 'Meiji Jingu'],
    isCapital: true
  },
  {
    name: 'Singapore',
    population: 5901000,
    location: {
      continent: 'Asia',
      country: 'Singapore',
    },
    touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa'],
    isCapital: true
  },
  {
    name: 'Los Angeles',
    population: 13250000,
    location: {
      continent: 'North America',
      country: 'United States of America',
    },
    touristAttractions: ['Museum of Art', 'Disneyland Park', 'Santa Monica Pie'],
    isCapital: false
  },
  {
    name: 'Barcelona',
    population: 4735000,
    location: {
      continent: 'Europe',
      country: 'Spain',
    },
    touristAttractions: ['La Sagrada Familia', 'Park Guell', 'Casa Batllo', 'Test'],
    isCapital: false
  },
  {
    name: 'Rio de Janeiro',
    population: 6748000,
    location: {
      continent: 'South America',
      country: 'Brazil',
    },
    touristAttractions: ['Christ the Redeemer', 'Sugaloaf Mountain', 'Copacabana Beach', 'test', 'test', 'test'],
    isCapital: false
  },
]

// 2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
//  2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

const citiesWrapper = document.querySelector('#cities-wrapper');
console.log(cities);

cities.map((city, index) => {
  console.log(city);
  console.log('Pavadinimas: ' + city.name);
  console.log('Populiacija: ' + city.population);
  console.log('Lokacija: ' + city.location.country + ', ' + city.location.continent);
  console.log('Yra sostine: ' + city.isCapital);
  console.log('Turistiniai objektai: ' + city.touristAttractions);
  console.log(city.touristAttractions);

    
  // 3.1. Jeigu miestas yra sostinė, tai:
  //  3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
  //  3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
  
  // let capitalText = city.isCapital ? ` ${city.name} is the capital of ${city.location.country}.` : '';
  // let capitalClass = city.isCapital ? ' capital' : '';

  let capitalText = '';
  let capitalClass = '';

  if (city.isCapital) {
    capitalText = ` ${city.name} is the capital of ${city.location.country}.`;
    capitalClass = ' capital';
  }

  // 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
  //  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
  //  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
  //  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

  let touristAttractionsText = '';

  if (city.touristAttractions.length > 0) {
    if (city.touristAttractions.length === 1) {
      touristAttractionsText = `<h4>Main Tourist attraction of ${city.name} is:</h4>`;
    } else {
      touristAttractionsText = `<h4>Main Tourist attractions of ${city.name} are:</h4>`;
    }

    let touristAttractionsElement = '';

    city.touristAttractions.map((place) => {
      touristAttractionsElement += '<li>' + place + '</li>';
    });

    touristAttractionsText += `<ul>${touristAttractionsElement}</ul>`;
  }

  let cityItem = `<div class="city-item${capitalClass}">
                    <h3>${city.name}</h3>
                    <p>${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalText}</p>
                    ${touristAttractionsText}
                  </div>`;
  citiesWrapper.innerHTML += cityItem;


  let cityElement = document.querySelector(`.city-item:nth-of-type(${index + 1})`);
  // let cityElement = document.querySelectorAll('.city-item')[index];
  
  // let cityNameElement = cityElement.querySelector('h3');
  let cityNameElement = document.querySelector(`.city-item:nth-of-type(${index + 1}) h3`);
  let cityParagraphElement = document.querySelector(`.city-item:nth-of-type(${index + 1}) p`);
  
  if (city.isCapital) {
    cityNameElement.textContent += ' (capital)';
    //  6.1. Naudojant tik JavaScript, pakeisti visų sostinių teksto spalvą.
    // cityNameElement.style.color = 'red';

    // cityParagraphElement.textContent += capitalText;
    
    // 6. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
    cityElement.classList.add('capital');
  }

});

//  6.1. Naudojant tik JavaScript, pakeisti visų sostinių teksto spalvą.
let capitalCities = document.querySelectorAll('.capital h3');
capitalCities.forEach((cityName) => {
  cityName.style.color = 'red';
})

// 7. Naudojant tik JavaScript:
//  7.1. Pakeisti kas antro miesto fono spalvą.


let allCities = document.querySelectorAll('.city-item');

// allCities.forEach((city, index) => {
//   if (index % 2 === 0) {
//     city.style.backgroundColor = 'pink';
//   }
// });

let oddCities = document.querySelectorAll('.city-item:nth-child(odd)');

oddCities.forEach((city) => {
  city.style.backgroundColor = 'pink';
});


// 8. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.

allCities.forEach((city, index, array) => {
  city.style.width = 'calc((100% - 15px) / 2)';

  if (array.length === index + 1) {
    if (array.length % 2 === 1) {
      city.style.width = '100%';
    }
  }
});

//  7.2. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
//  7.3. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

document.querySelectorAll('.city-item ul').forEach(ul => {
  ul.querySelectorAll('li').forEach((element, index) => {
    if (index === 0) {
      element.style.color = 'green';
    }

    if (index > 2) {
      element.style.color = 'red';
    }
  })
})