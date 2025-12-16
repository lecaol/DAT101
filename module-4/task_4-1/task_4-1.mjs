"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const AccountType = { //Objekt med kontotyper DEL1
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};

// Objekt for DEL 5:
const CurrencyTypes = {
    NOK: {value: 1.0000, name: "Norske kroner",         denomination: "kr"},
    EUR: {value: 0.0985, name: "Europeiske euro",       denomination: "€"},
    USD: {value: 0.1091, name: "United States dollar",  denomination: "$"},
    GBP: {value: 0.0847, name: "Pound sterling",        denomination: "£"},
    INR: {value: 7.8309, name: "Indiske rupee",         denomination: "₹"},
    AUD: {value: 0.1581, name: "Australske dollar",     denomination: "A$"},
    PHP: {value: 6.5189, name: "Filippinske peso",      denomination: "₱"},
    SEK: {value: 1.0580, name: "Svenske kroner",        denomination: "kr"},
    CAD: {value: 0.1435, name: "Canadiske dollar",      denomination: "C$"},
    THB: {value: 3.3289, name: "Thai baht",             denomination: "฿"}
};

printOut(`${AccountType.Normal}, ${AccountType.Saving}, ${AccountType.Credit}, ${AccountType.Pension}`)

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Definerer en klasse for bankkontoer. Oppskrift på hvordan bankkontoer skal fungere
class TAccount {

    // Privat felt: # betyr at feltet ikke kan nås utenfor klassen
    #accountType;       //DEL 2: Kontotyper
    #balance;           //DEL 3: Saldo for kontoen
    #withdrawCount;     //DEL 4: Antall uttakk
    #currency;          //DEL 5: Valuta-Objekt


    // Constructor kjøres automatisk når man lager en ny konto med `new`
    // accountType er verdien man sender inn (f.eks. "Brukskonto")
    constructor(accountType){
        this.#accountType = accountType;    //Setter start kontotype 
        this.#balance = 0;                  //Starter med 0 i saldo
        this.#withdrawCount = 0;            //Starter med 0 uttak
        this.#currency = CurrencyTypes.NOK; //Standard valuta er NOK
    }

    //For DEL 6: Privat metode som gir en konverteringsfaktor. Brukes når kontoens valuta endres
    #currencyConvert(newCurrency) {
        return (CurrencyTypes.NOK.value / this.#currency.value * newCurrency.value);
    }

    //For DEL 7: Konverterer et beløp FRA en transaksjonsvaluta TIL kontoens valuta
    #convertToAccountCurrency(amount, fromCurrency) {
         const factor = (CurrencyTypes.NOK.value / fromCurrency.value) * this.#currency.value;
        return amount * factor;
  }

    // Returnerer kontotypen som tekst
    toString() {
    return this.#accountType; 
    }

    // Endrer kontotype og resetter uttaksteller
    setType(newAccountType) {

        const oldType = this.#accountType;      // Lagrer den gamle typen før vi endrer (for utskrift)
        this.#accountType = newAccountType;     // Endrer den interne kontotypen til ny verdi
        this.#withdrawCount = 0;                //Reset teller ved bytte av type

        printOut(`Account type changed: ${oldType} -> ${this.#accountType}` + newLine);
    }


    //DEL 3: Henter Saldo
    getBalance(){ // Returnerer saldoen til kontoen
        return this.#balance;

    }


    //DEL 5 OG 6: Endrer kontoens valuta
    setCurrencyType(newCurrency) {

        if (this.#currency === newCurrency){  // Hvis valutaen er den samme, gjøres ingenting
            return;
        }

        //Refererer til gammel valuta
        const oldCurrency = this.#currency;

        // Konverter eksisterende saldo til ny valuta
        this.#balance = this.#balance * this.#currencyConvert(newCurrency);

        // Bytter valuta
        this.#currency = newCurrency; 

        printOut(`Currency changed: ${oldCurrency.name} -> ${this.#currency.name}` + newLine);
        printOut(`Balance is now ${this.#balance.toFixed(2)} ${this.#currency.denomination}`);
    }


    //DEL 3 OG 7: Setter inn penger på konto
    deposit(amount, transactionCurrency = CurrencyTypes.NOK) { // Setter inn penger på kontoen

        // Konverter beløpet til kontoens valuta
        const amountInAccountCurrency = this.#convertToAccountCurrency(amount, transactionCurrency);

        this.#balance += amountInAccountCurrency;       // Øker saldoen med beløpet som settes inn
        this.#withdrawCount = 0;                        //Resetter teller ved innskudd

        const txDenom = transactionCurrency.denomination;
        const accDenom = this.#currency.denomination;


        printOut(`Deposit: ${amount.toFixed(2)} ${txDenom}  New balance: ${this.#balance.toFixed(2)} ${accDenom}` + newLine); //Printer innskudd med valuta
    }

    //DEL 4 OG 7: Tar ut penger fra kontoen
    withdraw(amount, transactionCurrency = CurrencyTypes.NOK){ // Tar ut penger fra kontoen

        switch (this.#accountType) {  //DEL 4 sjekker regler basert på kontotype med switch

            case AccountType.Pension: {//Gjør dette for Pension
                printOut(`You can't withdraw from a ${AccountType.Pension}` + newLine);
                return;
            }
            case AccountType.Saving: { //Gjør dette for Saving
                
                if (this.#withdrawCount >= 3) {
                    printOut(`You can't withdraw from a ${AccountType.Saving}` + newLine);
                    return;
                }

        const amountInAccountCurrency = this.#convertToAccountCurrency(amount, transactionCurrency);
                

        // "Lovlig" uttak for saving:
        this.#balance -= amountInAccountCurrency; //Reduserer saldoen
        this.#withdrawCount += 1;  //Øker antall uttakk med 1

        const txDenom = transactionCurrency.denomination;
        const accDenom = this.#currency.denomination;

         printOut(`Withdraw: ${amount.toFixed(2)} ${txDenom} New balance: ${this.#balance.toFixed(2)} ${accDenom}` + newLine);

        return;

        }

        default: {//Lovlige uttakk for andre kontotyper

        const amountInAccountCurrency = this.#convertToAccountCurrency(amount, transactionCurrency);

        this.#balance -= amountInAccountCurrency;   //Trekker fra saldo
        this.#withdrawCount += 1;                   //Teller antall uttak

        const txDenom = transactionCurrency.denomination;
        const accDenom = this.#currency.denomination;

        printOut(`Withdraw: ${amount.toFixed(2)} ${txDenom} New balance: ${this.#balance.toFixed(2)} ${accDenom}` + newLine);
        return;
        }
    }
}
}

//Lager ny konto:
const myAccount = new TAccount(AccountType.Normal); 
printOut(`My account type is: ${myAccount.toString()}`);

//Endrer kontotype:
myAccount.setType(AccountType.Saving); 
printOut(`My account type is now: ${myAccount.toString()}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Starter med 0 i saldo
printOut(`Balance is: ${myAccount.getBalance().toFixed(2)} ${CurrencyTypes.NOK.denomination}` + newLine); 

//Setter inn og tar ut penger
myAccount.deposit(100); 
myAccount.withdraw(25); 
printOut(`Balance is now: ${myAccount.getBalance().toFixed(2)} ${CurrencyTypes.NOK.denomination}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setType(AccountType.Saving);  // kontoen skal være Saving
myAccount.deposit(100); 

//Maks 3 uttakk på sparekonto. Fjerde uttak skal stoppes
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);

//Pension: ingen uttak
myAccount.setType(AccountType.Pension); 
myAccount.withdraw(10);

// Bytt type -> teller resettes
myAccount.setType(AccountType.Saving);  
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//DEL 5 test
myAccount.deposit(150);     //skal printe med kr

myAccount.setCurrencyType(CurrencyTypes.EUR);   //Bytter til Euro
myAccount.deposit(150);                         //Skal printe med "€"
myAccount.setCurrencyType(CurrencyTypes.EUR);   //Skal gjøre ingenting ved lik valuta
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Tester valutabytte og konvertering av saldo
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
myAccount.setCurrencyType(CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// For å unngå 3-uttak-grensen under Part 7: sett type til Normal
myAccount.setType(AccountType.Normal);
myAccount.setCurrencyType(CurrencyTypes.NOK);

// Deposit 12 USD 
myAccount.deposit(12, CurrencyTypes.USD);

// Withdraw 10 GBP
myAccount.withdraw(10, CurrencyTypes.GBP);

// Bytt kontovaluta litt (som oppgaven sier)
myAccount.setCurrencyType(CurrencyTypes.EUR);
myAccount.setCurrencyType(CurrencyTypes.NOK);
myAccount.setCurrencyType(CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.NOK);

// Trekk ut resten av saldoen med en annen valuta enn kontoen har (konto er NOK nå)
const restInNok = myAccount.getBalance();               // saldo i NOK
const restInEur = restInNok * CurrencyTypes.EUR.value;  // NOK -> EUR-beløp som vil gi 0.00 etter konvertering tilbake
myAccount.withdraw(restInEur, CurrencyTypes.EUR);

printOut(`Final balance: ${myAccount.getBalance().toFixed(2)} ${CurrencyTypes.NOK.denomination}` + newLine);


printOut(newLine);
