console.clear();
/*
TYPEOF - operatorius duomens tipo nustatymui
*/

const a = typeof 5; //Output: 5
console.log(5);

const b = typeof ''; //Output: String
console.log(b);

const c = typeof true; //Output: Boolean
console.log(c);

function sum(a,b) {
    return a + b;
}

const d = typeof sum; 
console.log(d);             // Output: Function

const e = typeof []; 
console.log(e);             // Output: Object

const f = typeof typeof 5; 
console.log(f);             // Putput String

const g = typeof undefined; // Output: Undefinied
console.log(g);             // Output: Undefinied

function example() {
    return undefined
}

console.log('>>>', typeof example()); // Output: >>> Undefinied
