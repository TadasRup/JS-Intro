console.clear();

function numberLength(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Pateikta netinkamo tipo reiksme';
    }

    //number = Math.abs(number) // Numete -3.14 i 3-3
    //number = number < 0 ? -number : number; // Numete -4.14 i 3-3

    const numberAsString = '' + number;

    let count = numberAsString.length;

    if (number % 1 !== 0) {
        count--;

        if (number < 0) {
            count--;
        }
    }

    return count;
}


console.log(numberLength(true));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength([]));
console.log(numberLength({}));
console.log(numberLength(undefined));

console.log(numberLength(5), '->', 1); 
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(3.14), '->', 3);
console.log(numberLength(-3.14), '->', 3);

console.log(numberLength(1000000000000000000000))

