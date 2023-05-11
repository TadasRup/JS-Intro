console.clear();

const x = 7;
const y = 5;
//function declaration
function sum(a, b) {
    return a + b;
}

console.log(`${x} + ${y} = ${sum(x, y)}`);

//anonymous function
const diff = function (a, b) {
    return a - b;
}

console.log(`${x} - ${y} = ${diff(x, y)}`);

//arrow function
const multi = (a, b) => {
    return a * b;
}

console.log(`${x} * ${y} = ${multi(x, y)}`);

//arrow function
//jeigu yra tik viena procedura
//tai galima nerasyti {return}
const div = (a, b) => a / b;

console.log(`${x} / ${y} = ${div(x, y)}`);

//jeigu yra tik vienas parametras
//galima nerasyti skliasuteliu
const sqr = a => a;

console.log(`${x}^2 = ${sqr(x)}`);

console.clear('----------------------');

const firstLetter = str => str[0];

console.log('Labas', '->', firstLetter('Labas'));

//---------------------------------//

function isOld(age) {
    if (age >= 18) {
        return 'old';
    }
    return 'young';
}

console.log(50, '->', isOld(50));
console.log(5, '->', isOld(5))

//const isOld = age => age >= 18 ? 'old' : 'young';

//---------------------------------//

function doIneedUmbrella(temp) {
    if (temp > 0) {
        return false;
    }
    return true;
}
console.log(18, doIneedUmbrella(18));
console.log(-18, doIneedUmbrella(-18));

//const doIneedUmbrella = temp = => temp > 0 ? false : true

//-----------------------------------//

function shouldIpush(list, number) {
    if (number %2  === 0) {
        return list.push(number)
    }
    return list;
}
console.log([], 4,'->', shouldIpush([], 4));
console.log([4], 3, '->', shouldIpush([], 4));
console.log([10, 20], 14, '->', shouldIpush([10, 20], 14));

//----------------------------------//

console.clear();

function calc(n1, operation, n2) {
  const funcs = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '**': (a, b) => a ** b,
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
  }
  return funcs[operation](n1, n2);
}

console.log(`7 + 5 = ${calc(7, '+', 5)}`)
console.log(`7 - 5 = ${calc(7, '+', 5)}`)
console.log(`7 * 5 = ${calc(7, '+', 5)}`)
console.log(`7 / 5 = ${calc(7, '+', 5)}`)
console.log(`7 ** 5 = ${calc(7, '+', 5)}`)

//grazina pirma raide
//graina paskutine raide
//grazina vidurine raide
//grazina teksto igi

//aboutStr('labas, 'first)
//aboutStr('labas, 'last)
//aboutStr('labas, 'mid)
//aboutStr('labas, 'size)
//aboutStr('labas, 'lowercase)
//aboutStr('labas, 'uppercase)
//aboutStr('labas, 'uppercaseCount)
//aboutStr('labas, 'lowercaseCount)

