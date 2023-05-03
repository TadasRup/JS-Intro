console.clear();

const marks = [];
console.log(marks);

//------------Push-----------
// Itraukimas (manipuliuojja informacija sarase)
marks.push(10)
marks.push(2)
marks.push(8)
console.log(marks)

//----------Unshift-----------
//Vis labiau i prieki itraukia
marks.unshift(9)
marks.unshift(8)
marks.unshift(7)
console.log(marks)

//-----------Shift-----------
//Pasalina pati pirma irasa
marks.shift();
console.log(marks)

//----------Pop---------------
//Pasalina is galo
marks.pop();
console.log(marks);

//------------At---------------
//paimti paskutine pozicija
const paskutinePozicija = marks.lengt - 1;
console.log(marks[paskutinePozicija]);
console.log(marks.at(paskutinePozicija)); // arba // console.log(marks.at(-1));

//Atsako true arba false, ar egzistuoja tai ko ieskai
marks.includes(1, marks.includes(1));
marks.includes(2, marks.includes(2));
marks.includes(3, marks.includes(3));
marks.includes(5, marks.includes(5));
marks.includes('Labas', marks.includes('Labas'));

const masyvasObjektu =  [
    { a: 'a' },
    { b: 'b' },
    { c: 'c' },
]
console.log(masyvasObjektu.includes({ b: 'b' })); //Sakys kad neturi tokio

// -------------Index of---------------
//Jeigu ieskai elemento masive ir jo nera grazina (-1), IndexOf grazina ne reiksme o pozicijos numeri
console.log(marks);
console.log(marks.indexOf)
console.log(marks.indexOf(9));
console.log(marks.indexOf(8));
console.log(marks.indexOf(777));


//---------------Join-------------------
//Sujungti (Viska sujungia i vientisa teksto gabala)
const visiPazymiai = marks.join()
console.log(visiPAzymiai);
//Viska be kablelio sujungia
const visiPazymiai2 = marks.join('')
console.log(visiPazymiai2);
//kaip pvz
const visiPazymiai3 = marks.join (' -===- ')

//-----------------reverse--------------
//Apvercia skaiciius kita seka
//Apvercia visam laikui
const skaiciai = [1, 2, 3, 4, 5];
console.log(skaiciai);

skaiciai.reverse();
console.log(skaiciai);

//---------------Slice--------------------
//Is originalaus masyvo grazina kopijos gabala pasirinktos pradzios ir pabaigos
console.log(skaiciai);
//Paimti tris paskutinius narius
console.log(skaiciai.slice(-3));
//Nuo-iki
console.log(skaiciai.slice(2, 4));

//--------------Splice---------------------
//Kai i viduri ideti elemetus
//
console.log(skaiciai)
console.log(skaiciai.splice(2, 0, 'X'))
//jiegu viena reiksme pakeisti
skaiciai[0] = 10; // easiest way

