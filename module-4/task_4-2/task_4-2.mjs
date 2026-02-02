"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Array med tall 1-20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


for (let i = 0; i < numbers.length; i++) {
  printOut(numbers[i]);          // numbers[i] henter elementet som ligger på indeks i
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// join() slår sammen alle elementene i arrayet til én streng. "," settes mellom hvert element
printOut(numbers.join(", "))

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const setning = "Hei på deg, hvordan har du det?";

// split(" ") deler teksten hver gang den finner et mellomrom
const ord = setning.split(" ");

for (let i = 0; i < ord.length; i++) { //Vi starter på 0, Så lenge i er mindre enn lengden på array så skal i økes med 1
  printOut(`Ord nummer #${i + 1} | Index ${i} | ${ord[i]}`); // ord[i] er selve ordet på indeks i 
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Array med jentenavn
const girlNames = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid",
  "Liv", "Eva", "Berit", "Astrid", "Bjørg",
  "Hilde", "Anna", "Solveig", "Marianne",
  "Randi", "Ida", "Nina", "Maria",
  "Elisabeth", "Kristin"
];

// Parameter 1: arrayet vi skal fjerne fra
// Parameter 2: navnet som skal fjernes
function FjernNavn(Array, NavnSomFjernes){

    // indexOf finner indeksen til elementet i arrayet
    // Hvis elementet ikke finnes, returnerer indexOf -1
    const index = Array.indexOf(NavnSomFjernes);

    //Sjekker om navn finnes i array
    if (index != -1) {

        Array.splice(index, 1);     // splice fjerner 1 element fra arrayet på posisjon "index"
        printOut(NavnSomFjernes + " ble fjernet fra listen.");
    } else {
        printOut(NavnSomFjernes + " eksisterer ikke i listen.")
    }
}

//Tester ved å fjerne navn
FjernNavn(girlNames, "Eva");
FjernNavn(girlNames, "Sofie"); //Tester ikke eksisterende navn

printOut(girlNames.join(", "))

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Bruker liste fra DEL 4 og denne listen:
const boyNames = [
  "Jakob", "Lucas", "Emil", "Oskar", "Oliver",
  "William", "Filip", "Noah", "Elias", "Isak",
  "Henrik", "Aksel", "Kasper", "Mathias", "Jonas",
  "Tobias", "Liam", "Håkon", "Theodor", "Magnus"
];

//Lager en tom array
const alleNavn = [];

//En linje som legger sammen listene. Puttes inn i den tomme array-en. 
//"..." tar ut ett og ett element fra arrayene og sette de inn i den nye. Unngar en array inni en array
alleNavn.push(...girlNames, ...boyNames);

printOut(alleNavn.join(", "));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {

    // Constructor kjøres automatisk når vi lager et nytt objekt av klassen.
    // Den brukes til å gi objektet startverdier.
    constructor(title, author, isbn) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }

    // Public metode som returnerer en tekstlig representasjon av boka
    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

// Array som skal inneholde flere TBook-objekter
const books = [];


//Oppretter 3 objekter til TBook
const book1 = new TBook("The Hobbit", "J.R.R. Tolkien", "763-09373654");
const book2 = new TBook("The Hunger Games", "Suzanne Collins", "763-08365893");
const book3 = new TBook("Pride and Prejudice", "Jane Austen", "763-52739587");


// Legger bok-objektene inn i arrayet
books.push(book1, book2, book3);


//Går gjennom hvert element i array og skriver ut hver bok
for (let i = 0; i < books.length; i++) {

  // books[i] er et TBook-objekt
  printOut(books[i] + newLine);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Statisk objekt: hver ukedag har en unik hex-verdi (bitmask)
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

//Lager en array med alle keys i EWeekDays
const keys = Object.keys(EWeekDays);

// Går gjennom alle keys og skriver ut innholdet
for (let i = 0; i < keys.length; i++) {

  const key = keys[i];
  const item = EWeekDays[key];

  printOut(
    `Key: ${key}, Name: ${item.name}, Value: ${item.value}`
  );
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Array som skal fylles med 35 tilfeldige tall:
const randomNumbers = [];

// 2) Fyller arrayet med 35 tall mellom 1 og 20 (inkludert)
for (let i = 0; i < 35; i++) {
  const number = Math.floor(Math.random() * 20) + 1;
  randomNumbers.push(number);                       //Sender tallene inn i array-en
}

// Skriver ut original-arrayet (usortert)
printOut("Original (usortert):" + randomNumbers.join(", "));

//.slice() lager kopi av array, .sort()sorterer array-en
// Hvis a - b er negativt: a kommer før b
// Hvis a - b er positivt: b kommer før a
const ascending = randomNumbers.slice().sort((a, b) => a - b);
printOut("Stigende (ascending):" + ascending.join(", "));

// Lager en kopi og sorterer synkende (descending)
// b - a gir synkende sortering
const descending = randomNumbers.slice().sort((a, b) => b - a);
printOut("Synkende (descending):" + descending.join(", "));


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Tomt objekt
const frequencyMap = {};

// Traverserer arrayet med tilfeldige tall
for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i];

  // Hvis tallet finnes fra før, øker vi telleren
  if (frequencyMap[number]) {
    frequencyMap[number]++;
  } else {
    // Hvis tallet ikke finnes, starter vi tellingen på 1
    frequencyMap[number] = 1;
  }
}

printOut("Tall og deres frekvens:");

for (const number in frequencyMap) {
  // number er nøkkelen (tallet)
  // frequencyMap[number] er hvor mange ganger det forekommer
  printOut(`${number}: ${frequencyMap[number]}`);
}

// Object.entries lager et array av [tall, frekvens]-par
// Eksempel: [ ["3", 4], ["7", 2], ["12", 6] ]
const frequencyArray = Object.entries(frequencyMap);

// Sorterer arrayet
frequencyArray.sort((a, b) => {
  const freqA = a[1];
  const freqB = b[1];

  //Sorter på frekvens (høyest først)
  if (freqB !== freqA) {
    return freqB - freqA;
  }

  //Hvis frekvensen er lik: sorter på tallet (lavest først)
  //negativ verdi: a kommer før b og motsatt
  return Number(a[0]) - Number(b[0]);
});

printOut("Frekvens og tilhørende tall:");

for (let i = 0; i < frequencyArray.length; i++) {
  const number = frequencyArray[i][0];
  const frequency = frequencyArray[i][1];

  printOut(`${frequency}: ${number}`);
}


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Tom array som skal bli "rader"-array
const table = [];

// Antall rader og kolonner
const rows = 5;
const cols = 9;


// Ytterset løkke lager rader
for (let r = 0; r < rows; r++) {

  // Lager en ny rad (et tomt array som skal fylles med kolonner)
  const row = [];

  // Indre løkke som lager kolonner
  for (let c = 0; c < cols; c++) {

    // Legger inn en tekst i hver celle: "Row 0, Col 0"
    row.push(`Row ${r}, Col ${c}`);
  }

  // Legger den ferdige raden inn i table
  table.push(row);
}


printOut("Utskrift av 2D-array (5x9):");

// Ytre løkke går gjennom hver rad
for (let r = 0; r < table.length; r++) {

  // Bygger en streng for hele raden slik at den kommer på én linje
  let line = "";

  // Indre løkke: går gjennom hver kolonne i raden
  for (let c = 0; c < table[r].length; c++) {

    // Legger til celleverdien i linjen
    // Legger til " | " for å skille cellene visuelt
    line += table[r][c] + " | ";
  }

  // Printer én og én rad (så det blir tydelig rader/kolonner)
  printOut(line);
} 


printOut(newLine);
