console.log('JS OK');

// MILESTONE 1
// Dichiarazione variabili
// Ciclo for
//  - Annidamento if
//  - Se % di tre da resto 0 allora è divisibile
//  - Se % di cinque da resto 0 allora è divisibile
//  - Se % di tre e cinque da resto 0 allora è divisibile
//  - Stampa il risultato

// MILESTONE 2
// Recupera elementi dal DOM
// Dichiarazione variabili
// Ciclo for
//  - Annidamento if
//  - Se % di tre da resto 0 allora è divisibile
//  - Se % di cinque da resto 0 allora è divisibile
//  - Se % di tre e cinque da resto 0 allora è divisibile
//  - Stampa il risultato
//  - Inietta in pagina


// Recupera elementi dal DOM
const list = document.querySelector('.list');

// Dichiarazione variabili
const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzBuzz = 'FizzBuzz';
let textPrint = '';
let flagFizzBuzz = 0;

// Ciclo for
for (i = 1; i <= 100; i++) {
    textPrint = i;

    if ((i % 3) === 0) {
        if ((i % 5) === 0) {
            flagFizzBuzz = 1;
            textPrint = fizzBuzz;
            console.log(textPrint);
        } else {
            flagFizzBuzz = 0;
            textPrint = fizz;
            console.log(textPrint);
        }

        if (flagFizzBuzz === 1) {
            list.innerHTML += `<li class="fizz-buzz">${textPrint}</li>`;
        } else {
            list.innerHTML += `<li class="fizz">${textPrint}</li>`;
        }

    } else if ((i % 5) === 0) {
        if ((i % 3) === 0) {
            textPrint = fizzBuzz;
            console.log(textPrint);
        } else {
            textPrint = buzz;
            console.log(textPrint);
        }

        if (flagFizzBuzz === 1) {
            list.innerHTML += `<li class="fizz-buzz">${textPrint}</li>`;
        } else {
            list.innerHTML += `<li class="buzz">${textPrint}</li>`;
        }

    } else {
        console.log(textPrint);
        list.innerHTML += `<li class="standard">${textPrint} </li>`;
    }
}
