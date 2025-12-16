"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Strenger som skal inneholde tallrekkene
let OnetoTen = "";
let TentoOne = "";


//Løkke som teller fra 1 til 10
for (let i = 1; i <= 10; i++) {
    OnetoTen += i.toString() + " ";
}


// Løkke som teller ned fra 10 til 1
for (let i = 10; i >= 1; i--) {
    TentoOne += i.toString() + " ";
}

printOut(OnetoTen + newLine + TentoOne);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number = 45;                              //Tallet som skal gjettes
let guess = Math.floor(Math.random() * 60) + 1; //Første gjett


//Løkke som fortsetter helt til tallet er gjettet
while (guess !== number) {
    guess = Math.floor(Math.random() * 60) + 1;
} 

printOut("Congratulations! You guessed the correct number:" + guess);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Fasit = 45000;                                //Tallet som skal gjettes
let attempts = 0;                                   //Antall gjetninger
let gjett = Math.floor(Math.random() * 1000000) + 1;//Tilfeldig gjett


//Starter tidsmåling
let startTime = Date.now();


//Løkke som kjører til riktig tall er gjettet
while (gjett !== Fasit) {
    gjett = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
} 


//Stopper tidsmåling
let endTime = Date.now();


//Skriver ut resultatene
printOut("Congratulations! You guessed the correct number:" + gjett);
printOut("Number of attempts: " + attempts);
printOut("Time taken (ms): " + (endTime - startTime));


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let txt= "";


//Går gjennom alle tall fra 2 til 199
for (let i = 2; i < 200; i++){
 let divisor = 2;

 // Tester om tallet kan deles på andre tall enn 1 og seg selv
 while (i % divisor !== 0 && divisor < i){
   divisor++;
 }


 //Hvis eneste divisor er tallet selv, er det et primtall
 if (divisor === i){
   txt += i + ", ";
 }
}

printOut(txt);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


//Ytre løkke for rader
for (let r = 1; r <= 9; r++) {

    let Linje = "";

    //Indre løkke for kolonner
    for (let k= 1; k <= 7; k++) {

        Linje += "K" + k + "R" + r + " ";
    
    }

    // Skriver ut én rad om gangen
    printOut(Linje);
} 


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


//Tom streng
let gradePrint = "";


// Løkke som simulerer 5 studenter
for (let grade = 1; grade <= 5; grade++) {

    // Tilfeldige poeng mellom 1 og 236
    let points = Math.floor(Math.random() * 236) + 1;
    let percent = (points / 236) * 100;

    let gradeLetter = "";

    // Bestemmer karakter basert på prosent
    if (percent >= 89) { gradeLetter = "A"; 
    
    } else if (percent >= 77) { gradeLetter = "B";
    } else if (percent >= 65) { gradeLetter = "C";
    } else if (percent >= 53) { gradeLetter = "D";
    } else if (percent >= 41) { gradeLetter = "E";
    } else { gradeLetter = "F"; }

    // Samler utskrift i én streng
    gradePrint += "Points: " + points + ", Percent: " + percent.toFixed(2) + "%, Grade: " + gradeLetter + newLine;;
}

printOut(gradePrint);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Straight

let Kast = 0;


// Uendelig løkke som avsluttes når Straight oppstår
while (true) {
    Kast++;

    //6 Terninger:
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const d4 = Math.floor(Math.random() * 6) + 1;
    const d5 = Math.floor(Math.random() * 6) + 1;
    const d6 = Math.floor(Math.random() * 6) + 1;

    const dice = [d1, d2, d3, d4, d5, d6].sort();
    
    // Sjekker om vi har 1–6 i riktig rekkefølge
    if (dice.join(",") === "1,2,3,4,5,6") {
        printOut("You rolled a straight after " + Kast + " attempts!");
        break;
    }
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// 3 pairs

let pairThrows = 0;

//Kaster 6 terninger til vi får 3 par.
while (true) {
  pairThrows++;

  const dice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ].sort();


  //Sjekker om vi har 3 par
  if (
    dice[0] === dice[1] &&
    dice[2] === dice[3] &&
    dice[4] === dice[5]
  ) {
    printOut(dice.join(","));
    printOut("3 par");
    printOut("På " + pairThrows + " kast!");
    break;
  }
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// 2 of a kind and 4 of a kind (tower)

let towerThrows = 0;


//Kaster 6 terninger til vi får tårn:
while (true) {
  towerThrows++;

  const dice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ].sort();


  // To mulige plasseringer av 4 like og 2 like
  const case1 = dice[0] === dice[3] && dice[4] === dice[5];
  const case2 = dice[0] === dice[1] && dice[2] === dice[5];

  if (case1 || case2) {
    printOut(dice.join(","));
    printOut("Tårn");
    printOut("På " + towerThrows + " kast!");
    break;
  }
}


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//All the same

let yatzeeThrows = 0;


//Kaster terninger til vi får yatzee
while (true) {
  yatzeeThrows++;

  const dice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];

  let isYatzee = true;

  // Sjekker om alle terninger er like
  for (let index = 0; index < dice.length; index++) {

    // Hvis én av terningene ikke har samme verdi som den første = false
    if (dice[index] !== dice[0]) {
      isYatzee = false;
    }
  }

  if (isYatzee) {
    printOut(dice.join(","));
    printOut("Yatzi");
    printOut("På " + yatzeeThrows + " kast!");
    break;
  }
}


printOut(newLine);
