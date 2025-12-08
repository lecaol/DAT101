"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
const wakeUpTime = 8;
printOut("Wake up time is: " + wakeUpTime);
if (wakeUpTime == 7) {
  printOut("I can catch the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const integer = -2;

if (integer > 0) {
  printOut(" The number = " + integer);
  printOut(" The value is positive");
} else if (integer < 0) {
  printOut(" The number = " + integer);
  printOut(" The value is negative");
} else {
  printOut("The number = " + integer);
  printOut(" The value is Zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const RandomNumber = Math.floor(Math.random() * 8) + 1;

if (RandomNumber >= 4) {
  printOut("Photo size = " + RandomNumber);
  printOut("Thank you");
} else {
  printOut("Photo size = " + RandomNumber);
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const RandomNumberTwo = Math.floor(Math.random() * 8) + 1;

if (RandomNumberTwo >=4 && RandomNumberTwo < 6) {
  printOut("Photo size = " + RandomNumberTwo);
  printOut("Thank you");
} else if (RandomNumberTwo >= 6) {
  printOut("Photo size = " + RandomNumberTwo);
  printOut("The image is too large");
} else {
  printOut("Photo size = " + RandomNumberTwo);
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut("The month is = " + monthName);
  printOut("You must take vitamin D");
} else {
  printOut("The month is = " + monthName);
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch (monthName) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    printOut("It is 31 days in " + monthName);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    printOut("It is 30 days in " + monthName);
    break;
  case "February":
    printOut("It is 28 days (29 days in leap year) in " + monthName);
    break;
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch (monthName) {
  case "January":
  case "February":
  case "June":
  case "July":
  case "August":
  case "September":
  case "October":
  case "November":
  case "December":
    printOut("The Art gallery is open in " + monthName + ", Welcome!");
    break;
  case "March":
  case "May":
    printOut("The Art Gallery is closed in " + monthName);
    break;
  case "April":
    printOut("The Art Gallery is open in the building next door in " + monthName + ", Welcome!");
    break;
}

printOut(newLine);
