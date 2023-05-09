console.clear();
//Funkcija pavadinimu “daugyba” - "multiply":
//1. priima du skaičiaus tipo kintamuosius
//2. atskirame kintamajame įsimena sandaugos reikšmę
//3. gražina saudaugos rezultatą
//TESTAI:
//A: console.log( daugyba( skaicius1, skaicius2 ) );
//B: console.log( daugyba( skaicius1, skaicius3 ) );
//C: rezultatas: teisingos reikšmės;


function multiply (a, b) {
    const result = a * b;
    return result;
}

console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, -5));