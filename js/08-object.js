console.clear();
/*
OBJECT - objektas
{
    key1: value
    key2: value
    key3: value
}
array - supaprastintas objektas
object - supaprastintas arejus
*/

const petras = ['Petras', 99, true];
const maryte = ['Maryte', 88, false];

// Sveiki, mano vardas VARDAS ir man KAZKIEK metu.
const s1 = `Sveiki mano vardas ${petras[0]} ir man ${petras[1]} metu`;
console.log(s1);

const s2 = `Sveiki mano vardas ${maryte[0]} ir man ${maryte[1]} metu`;
console.log(s2);

const jonas = {
    name: 'Jonas',
    age: 77,
    isMarried: false,
}

const ona = {
    isMarried: true,
    age: 88,
    name: 'Maryte',
}

console.log(jonas);
console.log(ona);
console.log(ona['age']);
console.log(ona['name']);
console.log(ona['isMarried']);

/* ---------------------------------------------------
*/

const random = {
    tekstas: 'Tekstas',
    skaicius: 777,
    arTiesa: true,
    kitas_variantas: 'mhm...'

};

console.log(random['tekstas']);
console.log(random['skaicius']);
console.log(random['arTiesa']);
console.log(random['kitas_variantas']);

/* --------------------------------------------------
 */

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);

console.log(marks[1]);

console.log(marks[2]);

const pazymiai = {
    0: 10,
    1: 2,
    3: 8,
    4: 4,
    5: 6,
}

console.log(pazymiai[0]);
console.log(pazymiai[1]);


console.clear();

const student = {
    name: 'Chuck Noris',
    age: 48,
    movies: [
        {
            titile: 'Walker Texas Ranger',
            year: 2000,
            actors: [
                'Chuck Noris 1',
                'Chack Noris 2',
            ]

        },
        {
            titile: 'Before Me',
            year: 1980,
            actors: [
                'Chuck Noris 3',
                'Chack Noris 4',
            ]
        },
        {
            titile: 'HellRiser',
            year: 2001,
            actors: [
                'Chuck Noris 5',
                'Chack Noris 6',
            ]
        },
    ]
}

console.log(student)
console.log(student['name']);
console.log(student.name);

//kaip suzinoti keliuose filmuose nusifilmavo
console.log(student.movies.length) // output 3

//kaip suzinoti filmu pavadinimus
console.log(student.movies[0].title);
//kaip suinoti visu filmu pavadinimus
console.log(student.movies[0]);

//jeigu metus
console.log(student.movies[0].year);

//aktorius
console.log(student.movies[0].actors);

/* ------------------------------------ */
console.clear();

const auto = {
    marke: "Audi",
};
console.log(auto);
//Laikuui begant galima pakeisti pavadinimus
auto.marke = "Audine"
console.log(auto)

//Galima prideti pavadinimus
auto.kaina = 1000;
console.log(auto);
console.log(auto.kaina) // Output marke: audine, kaina: 1000

auto.color = 'red';
console.log(red);
auto.color = 'blue';
console.log(blue);

//Pasalinti pridetus elementus
deleteAuto.color(),
console.log(auto);


const skaiciai = [10, 2, 8]
console.log(skaiciai);
//pakeisti pirma pavadinima
skaiciai[0] = 1000;
console.log(skaiciai); // Output [1000, 2, 8]


auto.savininkai = [];
console.log(auto);


