"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const original = 2 + 3 * 2 - 4 * 6;
const modified= 2+(3 * (2 - 4) * 6);
printOut("Original expression: 2+3*2-4*6= " + original);
printOut("Modified expression: 2+(3*(2-4)*6)= " + modified);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters = 25;
const cm = 34;
const mm = 25.4; 
const OneInch = mm;
const TotalCm = (meters * 100) + cm;
const TotalInches = (TotalCm * 10) / OneInch;
printOut("25 meter og 34 cm er = " + TotalInches.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;
const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60)
printOut("3 days, 12 hours, 14 minutes and 45 seconds =" + totalMinutes.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const FromMinutes = 6322.52;
const d = Math.floor(FromMinutes / (24 *60));
const h = Math.floor(FromMinutes % (24 *60) / 60);
const m = Math.floor(FromMinutes % 60);
const s = Math.floor((FromMinutes * 60) % 60);
printOut("6233.52 minutes = " + d + " days " + h + " hours " + m + " minutes " + s + " seconds"); 
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const DollarVerdiIKroner = 76 / 8.6;
const KronerverdiIDollar = 8.6 / 76;
const Kroner = 54 * DollarVerdiIKroner;
const Dollar = Kroner * KronerverdiIDollar;
printOut("54 USD er = " + Kroner.toFixed(0) + " NOK");
printOut("477 NOK er = " + Dollar.toFixed(0) + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "Det er mye mellom himmel og jord som vi ikke forstår.";
let Characters = text.length;
let CharIndex = text.at(19);
let substring = text.substring(34, 43);
let jordIndex = text.indexOf("jord");
printOut(text);
printOut("Number of characters in the string: " + Characters);
printOut("Character at index 19: " + CharIndex);
printOut("Substring from 35 and 8 places is: " + substring);
printOut("The word 'jord'starts at position: " + jordIndex);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const One = 5 > 3;
const Two = 7 >= 7;
const Three = "a" > "b";
const Four = "1" < "a";
const Five = "2500" < "abcd";
const Six = "arne" != "thomas"; 
const Seven = (2 === 5) === true;
const Eight = ("abcd" > "bcd") === false;

printOut("5 > 3 is " + One);
printOut("7 >= 7 is " + Two);
printOut('"a" > "b" is ' + Three);
printOut('"1" < "a" is ' + Four);
printOut("Fasiten sier at '1' < 'a' is false, men jeg får true. Jeg tror det enten er det feil i fasiten hvor koden er skrevet uten anførselstegn eller så står det feil i oppgaven og vi skal egentlig ikke bruke anførselstegn i koden. Alle de andre er korrekte og jeg  ser ikke at jeg har gjort feil på akkurat denne.");
printOut('"2500" < "abcd" is ' + Five);
printOut('"arne" != "thomas" is ' + Six);
printOut('(2 === 5) === true is ' + Seven);
printOut('("abcd" > "bcd") === false is ' + Eight);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let stringOne = "254";
let stringTwo = "57.23";
let stringThree = "25 korner";

let numOne = Number(stringOne);
let numTwo = Number(stringTwo);
let numThree = parseInt(stringThree);

printOut(" \"254\" = " + numOne);
printOut(" \"57.23\" = " + numTwo);
printOut(" \"25 korner\" = " + numThree);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("Math.floor(Math.random() * 360) + 1 =" + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const TotalDays = 131;
const Weeks = Math.floor(TotalDays / 7);
const Days = TotalDays % 7;

printOut("131 days is " + Weeks + " weeks and " + Days + " days");
printOut(newLine);