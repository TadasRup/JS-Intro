console.clear();
/*
TERNARY

klausimas ? teigiama reiksme : neigiama reiskme;

*/
//suprarastintas variantas
const leidimas = 100 >= 18 ? 'pilnametis' : 'nepilnametis';
console.log(leidimas)
//supaprastinto varianto pavizdys
let aprove = '';

if (10 >= 18) {
    aprove = 'pilnametis';
} else {
    approve = 'nepilnametis';
}
console.log(approve)

//--------//

var a = 1
            ? 2
            : 3
console.log(a);


const a = 1 ? 2 : 3;
console.log(a) //Output: 2

const b = 1 ? 2 : 3 ? 4 : 5;
console.log(b) //Output: 2

const c = 1 < 2 ? 3 ? 4 : 5 : 6;
console.log(c) //Output: 4

//-----------------------/
//true -> [1], false -> [2];


