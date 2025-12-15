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

printOut(`${AccountType.Normal}, ${AccountType.Saving}, ${AccountType.Credit}, ${AccountType.Pension}`)

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Definerer en klasse for bankkontoer
class TAccount {

    // Privat felt: # betyr at feltet ikke kan nås utenfor klassen
    #type;  //DEL 2
    #balance; //DEL 3
    #withdrawCount; //DEL 4

     // Constructor kjøres automatisk når man lager en ny konto med `new`
    // accountType er verdien man sender inn (f.eks. "Brukskonto")
    constructor(accountType){
        this.#type = accountType; // this refererer til det nye konto-objektet som blir laget. Lagrer parameter-verdien i det private feltet #type
        this.#balance = 0; //Starter på null
        this.#withdrawCount = 0; //Starter med 0 uttak
    }

  // Metode som returnerer kontotypen som tekst
  // Brukes når vi vil vite hva slags konto dette er
    toString() {
    return this.#type;  // Returnerer den private verdien #type
    }

    // newType er den nye typen vi vil bytte til
    setType(aType) {

        const oldType = this.#type; // Lagrer den gamle typen før vi endrer (for utskrift)
        this.#type = aType; // Endrer den interne kontotypen til ny verdi
        this.#withdrawCount = 0; //Reset teller ved bytte av type

        printOut(`Account type changed: ${oldType} -> ${this.#type}`);
    }

    getBalance(){ // Returnerer saldoen til kontoen
        return this.#balance;

    }

    deposit(aAmount) { // Setter inn penger på kontoen
        this.#balance += aAmount;  // Øker saldoen med beløpet som settes inn
        this.#withdrawCount = 0;  //Resetter teller ved innskudd

        printOut(`Deposit: ${aAmount}  New balance: ${this.#balance}` + newLine);
    }

    withdraw(aAmount){ // Tar ut penger fra kontoen

        switch (this.#type) {  //DEL 4 sjekker regler basert på kontotype med switch

            case AccountType.Pension: //Gjør dette for Pension
                printOut(`You can't withdraw from a ${AccountType.Pension}` + newLine);
                return;

            case AccountType.Saving: //Gjør dette for Saving
                
                if (this.#withdrawCount >= 3) {
                    printOut(`You can't withdraw form a ${AccountType.Saving}` + newLine);
                    return;
                }
                

        // For "lovlige" uttak:
        this.#balance -= aAmount;  //Reduserer saldoen
        this.#withdrawCount += 1;  //Øker antall uttakk med 1

        printOut(`Withdraw: ${aAmount}  New balance: ${this.#balance}` + newLine);

        return;


        default: //Andre kontotyper

        this.#balance -= aAmount; //Trekker fra saldo
        this.#withdrawCount += 1;  //Teller antall uttak

        printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}` + newLine);
        return;
    }
}
}

const myAccount = new TAccount(AccountType.Normal);  //lager et nytt objekt fra oppskriften
printOut(`My account type is: ${myAccount.toString()}`);

myAccount.setType(AccountType.Saving);  // Endrer kontotypen ved å kalle metoden setType
printOut(`My account type is now: ${myAccount.toString()}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut(`Balance is: ${myAccount.getBalance()}` + newLine); // Skriver ut saldo før vi gjør noe

myAccount.deposit(100); //Setter inn 100 på konto
myAccount.withdraw(25);  //Tar ut 25 fra konto
printOut(`Balance is now: ${myAccount.getBalance()}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setType(AccountType.Saving);  // kontoen skal være Saving
myAccount.deposit(100); 

myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);

myAccount.setType(AccountType.Pension); //bytter til Pension, sjekker at man nektes uttak
myAccount.withdraw(10);

myAccount.setType(AccountType.Saving);  //Bytter tilbake til Saving
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
