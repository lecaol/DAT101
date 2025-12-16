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

// Henter knappen som skal trigge beregningen
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");

// Henter <p>-elementet der vi skal skrive output (resultatet)
const txtTask1Output = document.getElementById("txtTask1Output");

// Legger til en "event listener" som kjører funksjonen når brukeren klikker knappen
cmbTask1Calculate.addEventListener("click", calculateRectangle);

/**
 * Leser inputverdier, regner ut omkrets og areal, og skriver det ut på siden.
 */
function calculateRectangle() {
  // Leser verdiene fra inputfeltene (kommer inn som tekst) og gjør dem om til tall
  const width = Number(txtRectWidth.value);
  const height = Number(txtRectHeight.value);

  // Sjekker om brukeren har skrevet inn gyldige tall (ikke NaN) og at de ikke er negative
  if (!Number.isFinite(width) || !Number.isFinite(height) || width < 0 || height < 0) {
    txtTask1Output.innerText = "Please enter valid non-negative numbers for width and height.";
    return; // Stopper funksjonen hvis input ikke er gyldig
  }

  // Omkrets (circumference) for et rektangel: 2 * (width + height)
  const circumference = 2 * (width + height);

  // Areal (area) for et rektangel: width * height
  const area = width * height;

  // Skriver resultatet til output-paragrafen
  txtTask1Output.innerText = `Circumference = ${circumference}, Area = ${area}`;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
