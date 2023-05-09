console.clear();

/*
FOR - loop/ciklas
kartojame operacijas tol kol reikia, arba numatyta kieki kartu.
*/

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i = 0;

// sum += marks[i]; //i += 1; paimineja reiksme is naujo
sum += marks[i++];

sum += marks[i++];

sum += marks[i++];

sum += marks[i++];

sum += marks[i++];

console.log(sum);

console.clear();
//i++ atnaujina kintamaji
const pazymiai = [10, 2, 8, 4, 6, 1, 3, 5, 7, 9];
const kasKelintas = 3;
//for sako kelis kartus kartot 
for (let i = 0; i < pazymiai.length; i++) {
    if (i % kasKelintas === 0) {

    }
    console.log(i, '-', pazymiai[i]);
}

//kas trecia i = 2
//-----------------------------------//
console.clear();
//muo -5 iki 7, po +1

for (let i = -5; i < 7; i++) {
    const suapvalintas = +i.toFixed(3);
    console.log(suapvalintas, '-', i);
}
//.toFixed (suapvalina iki vieneto)
//parse (konvertuoti is vieno i kita)

console.log('5', parseInt('5'));
console.log(typeof '5', typeof parseInt('5'));


console.log( 'Infinity',  parseFloat('Infinity'));

console.clear();

const text = 'Labas!';

// vienas po kito LABAS ( ziureti Output )
for (let i=0; i<text.length; i++) {
    console.log(i, '-', text[i])
}
// is kitos puses SABAL (labas)
for (let i = text.length - 1; i >= 0; i--) {
    console.log( i, '-', text[i])
}
// is kitos puses bet numeravimo kaita kita
let atbulas = '';

for (let i = 0; i < text.length; i++) {
    const index = text.length -i -1;
    const symbol = text[index];
    atbulas += symbol
    console.log(i, '-', text[index])
}

console.clear();
console.log('-----------------------');


let atvirkscias = '';

for (let i = 0; i < atvirkscias.length; i++) {
    const index = atvirkscias.length -i -1;
    const symbol = atvirkscias[index];
    atvirkscias += symbol
    console.log(i, '-', atvirkscias[index]);
}