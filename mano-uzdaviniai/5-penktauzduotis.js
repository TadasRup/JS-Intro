console.clear();

function filterLetters(zodis, kasKelintas) {
if (typeof zodis !== 'string')
    return "Pirmsais kintamasis netinkamo tipo"
}
if (zodis.length > 100 || zodis.length === 0 ) {
    return "Pirmojo kintamojo reiksme yra netinkamo dydzio"
}
if (typeof kasKelintas !== 'number' && kasKelintas > 0) {
    return "Antrasis kintamasis yra netinkamo tipo"
}
if (kasKelintas <= 0) {
    return "Antrasis kintamasis turi buti didesnis uz nuli"
}
if (zodis.length < kasKelintas) {
    return "Antrasis kintamasis turi buti nedidesnis uz pateikto teksto ilgi"
}
let raides = '';
return raides;
comsole.clear();
console.log(filterLetters('BIT', 4))
console.log(filterLetters('abcdefg', 2 ), '->', 'bdf');
console.log(filterLetters('abcdefghijkl', 3), '->', 'cfil');
console.log(filterLetters('abc', 0), '->', 'Antrasis kintamasis turi būti didesnis už nulį.')
console.log(filterLetters('abc', 4), 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.')
console.log(filterLetters(1561, 2), 'Pirmasis kintamasis yra netinkamo tipo.')


console.cleear();