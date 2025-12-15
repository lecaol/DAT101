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

function PrisUtenMVA (Gross, VATgroup){ //funksjon for å finne pris for ulike VAT groups

    let VAT;
    VATgroup = VATgroup.toLowerCase(); //omgjør all input til parameteren "VATgroup" til all lowercase

    if (VATgroup === "normal") {  //skatt ved "normal"
        VAT = 25;
    } else if (VATgroup === "food") { //skatt ved "food"
        VAT = 15;
    } else if (VATgroup === "hotel" || VATgroup === "transport" || VATgroup === "cinema") { //skatt ved "hotel", "cinema", og "transport"
        VAT = 10;
    } else {
        printOut("Unknown VAT group!"); //ved ukjent VAT group
        return NaN;
    }

    const net = (100 * Gross) / (VAT + 100); //regner ut net pris uten skatt
    printOut(Gross + "kr is " + net.toFixed(2) + " without tax");
    return net;
}

PrisUtenMVA(100, "NOrmal"); //testet ulike VAT grupper med store og små bokstaver
PrisUtenMVA(300, "FOOD");
PrisUtenMVA(750, "hoteL");
PrisUtenMVA(500, "furniture");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function SDT (Speed, Distance, Time){
    let ManglerVerdier = 0;  //variabel for å telle antall verdier som er undefined

    if (Speed === undefined) ManglerVerdier++;
    if (Distance === undefined) ManglerVerdier++;   //Disse tre if-ene gjør at variabelen øker med en for hver undefined
    if (Time === undefined) ManglerVerdier++;       

    let resultat;

    if (ManglerVerdier > 1) {  //Er det flere enn 1 undefined så skal det returneres NaN
        printOut("Ugyldig input, for mange mangler");
        return NaN;
    }
    if (Speed === undefined){ //beregne speed
        resultat = Distance / Time;
        printOut("Speed = " + resultat + " km/h");
        printOut("Distance = " + Distance + " km");
        printOut("Time = " + Time + " h" + newLine);
        return resultat;
    }
    if (Distance === undefined) { //beregne distance
        resultat = Speed * Time;
        printOut("Speed = " + Speed + " km/h");
        printOut("Distance = " + resultat + " km");
        printOut("Time = " + Time + " h" + newLine);
        return resultat;
    }
    if (Time === undefined) { // beregne time
        resultat = Distance/Speed;
        printOut("Speed = " + Speed + " km/h");
        printOut("Distance = " + Distance + " km");
        printOut("Time = " + resultat.toFixed(2) + " h" + newLine);
        return resultat;
    }

    return NaN;  //returner NaN for alt annet
}

SDT(undefined, 35, 0.5);
SDT(90, undefined, 2);
SDT(70, 40, undefined);
SDT(undefined, 80, undefined);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Part8(text, maxLength, character, add){ //funksjon med 4 parametere

printOut("Original tekst: " + text); //printer ut text fra parameter

if (text.length < maxLength) { //hvis lengden på teksten er mindre enn maxx lengde gjør dette:
    const mangler = maxLength - text.length; //regner ut differeansern mellom tekst lengde og max lengde
    const fyll = character.repeat(mangler); //konstant som skal brukes til å fylle differansen med character. 


if (add === true) { //hvis add = true så kommer fyll etter teksten
    text = text + fyll;
} else {
    text = fyll + text; //hvis add = false så kommer fyll før teksten
}
}

printOut("Ny text: " + text); //printer ut den nye teksten
return text;

}

Part8("How are you?", 30, "*", false);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function sumFromTo(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum = sum + i;
    }

    return sum;
}

function test(){
    let current = 1;
    
    for (let line = 1; line <= 200; line++) {

        const leftCount = line + 1; // Antall tall på venstre side
        const rightCount = line; //Antall tall på høyre side. Det samme som linjetallet

        //Finner tallene på venstre side:
        const leftStart = current; //finner første tall på venstre side. 
        const leftEnd = current + leftCount - 1; //finner siste tallet på venstre side. starttall + antall tall på venstre side - 1
        const leftSum = sumFromTo(leftStart, leftEnd); //Kaller sumFromTo for å få summen til venstre side

        const rightStart = leftEnd + 1; //finner første tall til høyre side = slutt tall på venstre side + 1
        const rightEnd = rightStart + rightCount - 1; //finner siste tall til høyre. Starttall + antall tall på høyre side - 1
        const rightSum = sumFromTo(rightStart, rightEnd); //regner summen på høyre side

        if (leftSum !== rightSum) { //Sjekker om uttrykkene stemmer. Venstre=Høyre
            printOut(
                "Feil på linje " + line +
                ": " + leftSum + " ≠ " + rightSum
            );
            return;
        }

        // flytt videre til neste tall. Første tall på venstre side = current, som blir en større enn rightend
        current = rightEnd + 1;
    }
    printOut("Maths fun!");
}

test();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) { //funksjon som regner ut fakultet

    if (n === 0 || n === 1) {  //Denne if-en får funksjonen til å stoppe når n=0 eller n=1 fordi 1!=1 og 0!=1
        return 1;
    }

    return n * factorial(n - 1); //Dette regnestykke baserer seg på: n! = n × (n − 1)!
}                                // Funksjonen kaller til seg selv. Når n=4 så får vi factorial(3) 
                                //Fungerer slik: factorial(4) -> 4 * factorial(3), factorial(3) -> 3 * factorial(2), factorial(2) -> 2 * factorial(1), factorial(1) -> return 1

const result = factorial(9);
printOut("Factorial of 9 = " + result);

printOut(newLine);
