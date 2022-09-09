console.log('JS OK')

/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

function numberRandom() {
    const outputRandom = Math.floor(Math.random() * 10);
    return outputRandom;
}

const teamFootball = [
    {
        name: 'Lazio',
        pointsMade: 0,
        falls: 0
    },

    {
        name: 'Inter',
        pointsMade: 0,
        falls: 0
    },

    {
        name: 'Roma',
        pointsMade: 0,
        falls: 0
    },

    {
        name: 'Milan',
        pointsMade: 0,
        falls: 0
    },
];

teamFootball.forEach(element => {
    element.pointsMade = numberRandom();
    element.falls = numberRandom();
    if (element.pointsMade === 1) {
        console.log(`La squadra ${element.name} ha fatto ${element.pointsMade} punto e ha subito ${element.falls} falli.`);
    } else {
        console.log(`La squadra ${element.name} ha fatto ${element.pointsMade} punti e ha subito ${element.falls} falli.`);
    }

});


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

function newArray(array, numA, numB) {
    const rangeArray = [];
    for (let i = 0; i < 100; i++) {
        if (numA <= array[i] && numB >= array[i]) {
            rangeArray.push(array[i]);
        }
    }
    return rangeArray;
}

const initialArray = [];
for (let i = 1; i <= 100; i++) {
    initialArray.push(i);
}

const numberA = 20;
const numberB = 35;

const rangeArray = newArray(initialArray, numberA, numberB);
console.log(rangeArray);



/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */