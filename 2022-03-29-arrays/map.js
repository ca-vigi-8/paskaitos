// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.
let moviesList2 = [`filmas1`, `filmas2`, `filmas3`, `filmas4`, `filmas5`, `filmas6`, `filmas7`, `filmas8`, `filmas9`, `filmas10`, 'filmas11'];

// function listMovies1(arr) {
//   let moviesListElement = document.querySelector('ul');
  
//   for (let i = 0; i < arr.length; i++) {
//     moviesListElement.innerHTML += `<li>${i+1}. ${arr[i]}</li>`;
//   }
// }

// listMovies1(moviesList2);

function listMoviesMap1(arr) {
  let moviesListElement = document.querySelector('ul');

  arr.map((movie, index) => {
    moviesListElement.innerHTML += `<li>${index + 1} ${movie}</li>`;
  });
}

// listMoviesMap1(moviesList2);


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
// function listMoviesWithYear(moviesList, moviesYear) {
//   let moviesListElement = document.querySelector('ul');
  
//   if (moviesList.length === moviesYear.length) {
//     for (let i = 0; i < moviesList.length; i++) {
//       moviesListElement.innerHTML += `<li>${i+1}. ${moviesList[i]} (${moviesYear[i]})</li>`;
//     }
//   } else {
//     console.error('Filmu pavadinimų sąrašo ilgis nesutampa su filmų metų sąrašo ilgiu');
//   }
// }

// listMoviesWithYear(moviesNameList, moviesYearList);

function listMoviesMapWithYear(moviesList, moviesYear) {
  let moviesListElement = document.querySelector('ul');
  if (moviesList.length === moviesYear.length) {
    moviesList.map((movie, index) => {
      moviesListElement.innerHTML += `<li>${index + 1} ${movie} (${moviesYear[index]})</li>`;
    });
  } else {
    console.error('Filmu pavadinimų sąrašo ilgis nesutampa su filmų metų sąrašo ilgiu');
  }
}

// listMoviesMapWithYear(moviesNameList, moviesYearList);

// ANTRAS BŪDAS

// function listMoviesWithYear2(moviesArr) {
//   let moviesListElement = document.querySelector('ul');
  
//   for (let i = 0; i < moviesArr.length; i++) {
//     let year = moviesArr[i][1];
//     let movieYear = year ? `(${year})` : '';

//     moviesListElement.innerHTML += `<li>${i+1}. ${moviesArr[i][0]} ${movieYear}</li>`;
//   }
// }

// listMoviesWithYear2(moviesWithYearList);

function listMoviesMapWithYear2(moviesArr) {
  let moviesListElement = document.querySelector('ul');
  
  moviesArr.map((movieArr, index) => {
    let year = movieArr[1];
    let movieYear = year ? `(${year})` : '';

    moviesListElement.innerHTML += `<li>${index + 1} ${movieArr[0]} ${movieYear}</li>`;
  });
}

// listMoviesMapWithYear2(moviesWithYearList);
  
// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

let movies1 = [`filmas1`, `filmas2`, `filmas3`, `filmas4`, `filmas5`, `filmas6`, `filmas7`, `filmas8`, `filmas9`, `filmas10`, 'filmas11'];
let movies2 = ['filmas12', 'filmas13', 'filmas14'];
let movies3 = ['filmas15', 'filmas16', 'filmas17', 'filmas18'];

let allMovies = [movies1, movies2, movies3];

// function nestedMovies(moviesArr) {
//   let moviesListElement = document.querySelector('ul');
//   let moviesNumber = 1;

//   for (let i = 0; i < moviesArr.length; i++) {
//     // for (let j = 0; j < moviesArr[i].length; j++) {
//       // moviesListElement.innerHTML += `<li>${moviesNumber}. ${moviesArr[i][j]}</li>`;
//       // moviesNumber++;
//     // }

//     let array = moviesArr[i];

//     for (let j = 0; j < array.length; j++) {
//       moviesListElement.innerHTML += `<li>${moviesNumber}. ${array[j]}</li>`;
//       moviesNumber++;
//     }
//   }
// }

function nestedMoviesMap(moviesArr) {
  let moviesListElement = document.querySelector('ul');
  let moviesNumber = 1;

  moviesArr.map((innerMoviesArr) => {
    innerMoviesArr.map((movie) => {
      moviesListElement.innerHTML += `<li>${moviesNumber} ${movie}</li>`;
      moviesNumber++;
    })
  });
}

nestedMoviesMap(allMovies);
