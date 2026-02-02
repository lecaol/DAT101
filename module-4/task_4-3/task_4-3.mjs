"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Henter input-feltene (bredde og høyde) fra HTML ved å bruke id
const txtRectWidth = document.getElementById("txtRectWidth");
const txtRectHeight = document.getElementById("txtRectHeight");

// Henter knappen 
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");

// Henter <p>-elementet der output skal skrives (resultatet)
const txtTask1Output = document.getElementById("txtTask1Output");

// Legger til en "event listener" som kjører funksjonen når brukeren klikker knappen
cmbTask1Calculate.addEventListener("click", calculateRectangle);

//Leser inputverdier, regner ut omkrets og areal, og skriver det ut på siden.
function calculateRectangle() {
  // Leser verdiene fra inputfeltene og gjør dem om til tall
  const width = Number(txtRectWidth.value);
  const height = Number(txtRectHeight.value);

  // .isFinite sjekker om verdien er et tall (ikke NaN) og at tallet ikke er infinity/-infinity
  if (!Number.isFinite(width) || !Number.isFinite(height) || width < 0 || height < 0) {
    txtTask1Output.innerText = "Please enter valid non-negative numbers for width and height.";
    return; // Stopper funksjonen hvis input ikke er gyldig
  }

  // Omkrets for et rektangel: 
  const circumference = 2 * (width + height);

  // Areal for et rektangel:
  const area = width * height;

  // Skriver resultatet til output-paragrafen
  txtTask1Output.innerText = `Circumference = ${circumference}, Area = ${area}`;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Henter input-feltet der ordene skal skrives
const txtTask2Word = document.getElementById("txtTask2Word");

// Henter <p>-elementet der resultatet skal vises
const txtTask2Output = document.getElementById("txtTask2Output");

//Tom array for alle ordene
const task2Words = [];

// Lytter etter tastetrykk
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

// Funksjonen kjøres hver gang en tast trykkes
function txtTask2WordKeyPress(event) {

  // Sjekker om Enter ble trykt
  if (event.key === "Enter") {

    // Henter teksten fra input-feltet og fjerner mellomrom
    const word = txtTask2Word.value.trim();

    // Legger bare til ordet hvis det ikke er tomt (Unngår å legge til mellomrom som et ord)
    if (word.length > 0) {
      task2Words.push(word);
    }

    // Skriver ut antall ord og alle ordene
    txtTask2Output.innerText =
      "Number of words = " + task2Words.length +
      (task2Words.length > 0
        ? "\n" + task2Words.join(", ")
        : "");

    // Tømmer input-feltet etter at Enter er trykket
    txtTask2Word.value = "";
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/


// Henter knappen som skal trigge sjekken
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");

// Henter <p>-elementet der resultatet skrives ut
const txtTask3Output = document.getElementById("txtTask3Output");

// Legger på en click-event på knappen
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

function cmbTask3CheckAnswerClick() {

 //Finner alle elementer med name = "chkTask3"
  const chkTask3 = document.getElementsByName("chkTask3");

  // Tom array for avhukede svar
  const checkedTexts = [];

  // Går gjennom alle checkboxene i gruppa
  for (let i = 0; i < chkTask3.length; i++) {

    // checked er true/false: true = boksen er huket av
    if (chkTask3[i].checked) {
      
      const labelText = chkTask3[i].parentElement.innerText; //Henter teksten
      checkedTexts.push(labelText);                                 //Legger teksten inn i arrayen
    }
  }

  // Hvis ingen er valgt:
  if (checkedTexts.length === 0) {
    txtTask3Output.innerText = "Du har ikke valgt noen alternativer.";
  } else {
    // Skriver ut alt som er valgt, hver på sin linje
    txtTask3Output.innerText =
      "Du valgte: \n " + checkedTexts.join(" ");
  }
}
//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Henter <div>-elementet der radioknappene skal legges til
const divTask4Cars = document.getElementById("divTask4Cars");

// Henter <p>-elementet der valgt biltype skal vises
const txtTask4Output = document.getElementById("txtTask4Output");


// Går gjennom alle elementene i CarTypes-arrayen
for (let i = 0; i < CarTypes.length; i++) {

  // Lager et nytt <input>-element
  const radio = document.createElement("input");

  // Setter input-typen til radio button
  radio.type = "radio";

  // Setter samme name på alle radio buttons -> Bare én radioknapp kan velges om gangen.
  radio.name = "radTask4Cars";

  //Setter value til tallverdien.
  radio.value = CarTypes[i].value;

  //Legger til en event listener som trigges når brukeren velger en radioknapp.
  radio.addEventListener("change", function (event) {

    // Både value og bilnavn (caption) skrives ut.
    txtTask4Output.innerText = "You selected: " + CarTypes[i].value + ": " + CarTypes[i].caption;
  });

  // Lager en <label> slik at teksten blir klikkbar sammen med radioknappen
  const label = document.createElement("label");

  // Legger radioknappen inn i labelen
  label.appendChild(radio);

  // Legger til teksten (biltypen) etter radioknappen
  label.appendChild(document.createTextNode(" " + CarTypes[i].caption));

  // Legger labelen inn i <div>-elementet i HTML
  divTask4Cars.appendChild(label);

  // Legger til et linjeskift slik at hver radioknapp vises på egen linje
  divTask4Cars.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Henter nedtrekkslisten (select) fra HTML
const selectTask5Animals = document.getElementById("selectTask5Animals");

// Henter <p>-elementet der valgt dyr skal vises
const txtTask5Output = document.getElementById("txtTask5Output");

// Legger til en event listener som trigges når brukeren velger et nytt alternativ
selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);

// Funksjon som kjører hver gang brukeren velger nytt 
function selectTask5AnimalsChange() {

  //selectedIndex er posisjonen til valget i lista 
  const index = selectTask5Animals.selectedIndex;

  // Henter det brukeren har valgt
  const animalName = selectTask5Animals.options[index].text;

  // Skriver ut resultatet
  txtTask5Output.innerText = "You selected: " + animalName;
}

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Henter <select>-elementet hvor navnene skal legges inn
const selectTask6Girls = document.getElementById("selectTask6Girls");

// Henter <p>-elementet hvor valgt navn skal vises
const txtTask6Output = document.getElementById("txtTask6Output");

// Går gjennom alle navnene i GirlsNames-arrayen
for (let i = 0; i < GirlsNames.length; i++) {

  // Lager et nytt <option>-element
  const option = document.createElement("option");


  //Teksten settes i nedrykkslista som vises for brukeren
  option.text = GirlsNames[i];

  //Setter value til samme verdi som teksten.
  option.value = GirlsNames[i];

  // Legger option-elementet inn i <select>-listen
  selectTask6Girls.appendChild(option);
}

// Legger til en event listener som trigges når brukeren velger et nytt navn
selectTask6Girls.addEventListener("change", function () {

  // Henter det navnet brukeren har valgt
  const selectedName = selectTask6Girls.value;

  // Skriver ut resultatet
  txtTask6Output.innerText = "You selected: " + selectedName;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Henter <select>-elementet for sjangre
const selectMovieGenre = document.getElementById("selectMovieGenre");

// Går gjennom alle sjangrene i MovieGenre-arrayen
for (let i = 0; i < MovieGenre.length; i++) {

  // Lager et nytt <option>-element
  const option = document.createElement("option");

  // Setter teksten slik at den vises i nedtrekkslisten
  option.text = MovieGenre[i];

  // Setter value til samme tekst
  option.value = MovieGenre[i];

  // Legger option inn i select-listen
  selectMovieGenre.appendChild(option);
}
// Henter input-feltene
const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");

// Henter knappen
const cmbAddMovie = document.getElementById("cmbAddMovie");

// Henter tabellen der filmene skal legges til
const tblMovies = document.getElementById("tblMovies");

// Teller som holder styr på hvor mange filmer som er lagt til
let movieCount = 0;

// Legger til klikk-event på knappen
cmbAddMovie.addEventListener("click", function () {

  // Øker filmnummeret
  movieCount++;

  // Henter verdier fra input-feltene
  const title = txtMovieTitle.value;
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value;
  const rate = txtMovieRate.value;

  // Lager en ny rad i tabellen
  const row = tblMovies.insertRow();

  // Lager celler i raden
  const cellNr = row.insertCell();
  const cellTitle = row.insertCell();
  const cellGenre = row.insertCell();
  const cellDirector = row.insertCell();
  const cellRate = row.insertCell();

  // Setter inn verdier i cellene
  cellNr.innerText = movieCount;
  cellTitle.innerText = title;
  cellGenre.innerText = genre;
  cellDirector.innerText = director;
  cellRate.innerText = rate;
 
  
});
