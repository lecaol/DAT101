"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function TodaysDate() {
    const DagensDato = new Date(2024, 11, 13);

    const DatoFormatering = {
        weekday: "long",                               // long brukes for verdier som skal skrives som ord
        year: "numeric",                               // numeric brukes for verdier som skal skrives som tall
        month: "long",
        day: "numeric",
    };

printOut("Dagens dato er " + DagensDato.toLocaleDateString("no-NB", DatoFormatering));
return DagensDato;  // Lagt til return for videre bruk i oppgave 2
}

TodaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function DagerTil2XKO(DagensDato) { // ny funksjon som regner ut dager igjen til lansering fra 13. Desember 2024.
    const releaseDate = new Date(2025, 4, 14); //lanseringsdato
    const msPerDag = 1000 * 60 * 60 * 24; // Millisekunder per dag

    return Math.ceil((releaseDate - DagensDato) / msPerDag);
}

const DagensDatoObj = TodaysDate();
const dagerIgjen = DagerTil2XKO(DagensDatoObj);

if (dagerIgjen > 0) {
    printOut("Det er " + dagerIgjen + " dager igjen til 2XKO slippes");
} else if (dagerIgjen === 0) {
    printOut("2XKO slippes i dag!");
} else {
    printOut("2XKO har allerede blitt sluppet!");
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Sirkel(radius) { //funksjon som printer ut verdier for sirkel gitt en radius
    const diameter = 2 * radius;
    const omkrets = 2 * radius * Math.PI;
    const areal = Math.PI * radius * radius;

    printOut("Sirkelens radius er: " + radius);
    printOut("Diameter: " + diameter.toFixed(3));
    printOut("Omkrets: " + omkrets.toFixed(3));
    printOut("Areal: " + areal.toFixed(3) + newLine);
}

Sirkel(5); // tester radius 5
Sirkel(12); // tester radius 12

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const rektangelVerdier = { //Objekt som gir bredde og høyde
    Bredde: 15, 
    Høyde: 10
};

function Utregning (rektangel) { //funksjon som regner ut omkrets og areal
    const omkrets = 2 * (rektangel.Bredde + rektangel.Høyde);
    const areal = rektangel.Bredde * rektangel.Høyde;

    printOut("Bredde er: " + rektangel.Bredde + " Høyde er: " + rektangel.Høyde)
    printOut("Omkrets av rektangelet er: " + omkrets);
    printOut("Areal av rektangelet er: " + areal)
}

Utregning(rektangelVerdier);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function OmgjøringTemp (verdi, type) { //funksjon: verdi = temperatur. type = temperaturtype

    let celsius, fahrenheit, kelvin;

    if (type === "Celsius"){ //Omgjøring fra celsius
        celsius = verdi;
        fahrenheit = verdi * (9/5) + 32;
        kelvin = verdi + 273.15;

        printOut("Convert " + verdi + " Celsius: ");
        printOut("Fahrenheit = " + Math.round(fahrenheit));
        printOut("Kelvin = " + Math.round(kelvin) + newLine);

    } else if (type === "Fahrenheit") { //Omgjøring fra Fahrenheit
        fahrenheit = verdi;
        celsius = (verdi - 32) * (5/9);
        kelvin = ((verdi - 32) * (5/9)) + 273.15;

        printOut("Convert " + verdi + " Fahrenheit: ");
        printOut("Celsius = " + Math.round(celsius));
        printOut("Kelvin = " + Math.round(kelvin) + newLine);

    } else if (type === "Kelvin") { // Omgjøring fra Kelvin
        kelvin = verdi;
        celsius = verdi - 273.15;
        fahrenheit = (verdi - 273.13) * (9/5) + 32;

        printOut("Convert " + verdi + " Kelvin: ");
        printOut("Celsius = " + Math.round(celsius));
        printOut("Fahrenheit = " + Math.round(fahrenheit));

    } else { //tilfelle ved feil temperaturtype
        printOut("Ugyldig temperaturtype")
        return;
    }

}
// 3 forskjellige verdier og typer:

OmgjøringTemp(27, "Celsius");
OmgjøringTemp(63, "Fahrenheit");
OmgjøringTemp(305, "Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
