console.log('JS OK');

// MILESTONE 1
// Dichiarazione variabili
// Ciclo for
//  - Annidamento if
//  - Se % di tre da resto 0 allora è divisibile
//  - Se % di cinque da resto 0 allora è divisibile
//  - Se % di tre e cinque da resto 0 allora è divisibile
//  - Stampa il risultato

// Dichiarazione variabili
const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzBuzz = 'FizzBuzz';
let textPrint = '';

// Ciclo for
for (i = 1; i <= 100; i++) {
    textPrint = i;

    if ((i % 3) === 0) {
        if ((i % 5) === 0) {
            textPrint = fizzBuzz;
            console.log(textPrint);
        } else {
            textPrint = fizz;
            console.log(textPrint);
        }

    } else if ((i % 5) === 0) {
        if ((i % 3) === 0) {
            textPrint = fizzBuzz;
            console.log(textPrint);
        } else {
            textPrint = buzz;
            console.log(textPrint);
        }

    } else {
        console.log(textPrint);
    }
}
