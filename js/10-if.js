console.clear();
/*
IF - palyginimas

Kodo Sablonai
if() {}
if () {} else {}

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===, 
naudotini: >, <, >=, <=, ===, 
nenaudotini: ==,

Loginiai operatotiai:
&& (and) , || (or), ! (not)


Visis skaiciai - TRUE isskyrus 0 ir NaN
Undefinied - FALSE
Visi string - TRUE, isskyrus tuscias
Visos functions - TRUE
Visi array - TRUE
Visi object - TRUE
Null - FASLE
Masivai - TRUE

*/

// Jeigu tenkina salyga sita bloka vygdys
if (4 > 2) {
    console.log('taip');
}
//---------------------------------//

if (7 < 10) {
    console.log('7 < 1');
} else {
    console.log('7 ne < uz 1');
}

//---------------------------------//
const userAge = 10;
const ageLimit = 18;

if(userAge >= ageLimit) {
    console.log('uzeik')
 } else {
    console.log(`dar palauk ${ageLimit - userAge} metu...`) // dar palauk 8 metu...
 }

 //---------Else-If----------------------//
// Else if - jeigu yra sakos
//else if, else if, else if, - ant visu variantu
 const diena = 1;

 if (diena === 1) {
    console.log('pirmadienis');
      } else if (diena === 2) {
     console.log('antradienis')
        } else {
         console.log('treciadienis');
 }

 //---------------------------------------//

 //kodo nestinimas (tagas tage)

 const arSvieciaSAule = true; //deginames //false - kodinsim
 const arLyja = false; // kodinsim //true - ziurim i vaivoryksye

 let kaDaryti = 'nezinau';

 if (arSvieciaSAule) {
    kaDaryti = 'eisim i kiema';
        if (arLyja) {
            kaDaryti = 'ziurim i vaivorykste';
        } else {
            kaDaryti = 'deginames';
     }
        } else {
            kaDaryti = 'kodinsim';
     }

 console.log(kaDaryti);

 //-----------------------------------------//

 const day = 1; //day = 2 soka i 'ant' //day = 3 soka i 'trec'

 if (day === 1) {
    console.log('pirm');
 } else {
    if (day === 2) {
        console.log('ant');
    } else {
         (day === 3)
            console.log('trec');
    }
 }

 //---------------------------------------------//

 const dd = 1;
 let kokiaDiena = 'Nezinau';

 if (dd === 1){
    kokiaDiena = 'pirmadienis';
 }

 if (dd === 2){
    kokiaDiena = 'antradienis'
 }

 if (dd === 3){
    kokiaDiena = 'treciadienis';
 }

 console.log(kokiaDiena) // pirmadienis

//------------------------------------------//
//
if (777 !== 777) {
    console.log('nelygu')
} else {
    console.log('lygu')
}

//------------------------------------------//
console.clear();
// Ar 7 yra lygu 7 // Taip
if (7 == 7) {
    console.log('taip')
} else {
    console.log('ne')
}

console.log('labas' * '2') // Outsput: NaN

//-------------LOGINIAI OPERATORIAI-----------//
//abu kodai vienodi skirtingai tik pateikiami
if (4 > 2) {
    if (8 < 20) {
        console.log('and')
    }
}


if (4 > 2 && 8 < 20) {
    console.log('and')
}

//~~~~~~~~~~~~~~~~~~~~~~//
//vienas is ju turi buti tiesa, tada vygdys

if (1 < 0 || 2 < 4) {
    console.log('arba')
}
//vienas is ju turi buti tiesa, tada vygdys

if (1 === 1 && 2 === 3 || 4 === 4) {
    console.log('mix')
}
//(1 === 1 && 2 === 3 || 4 === 4)//

//--------------------------------//
// ! reiskias (ne)

if (!'a') {
    console.log('taip');
} else {
    console.log('ne');
}

const error = true;

if (!error) {
    console.log('ERROR');
} else {
    console.log('All good');
}

//kol yra true tol spauzdins (kazkas) // Visi skaiciai - TRUE, isskyrus 0
//tuscias stringas yra neigiamas, kazka reikia parasyti kad butu pozityvus

const nameInputValue = 5;

if (!nameInputValue)

if (0) {
    console.log('KAZKAS...')
} else {
    console.log('Ne kazka...')
}

const negative = !!nameInputValue; // 2 sauktukai padaro i true, vienas sauktukas padaro i false.
console.log(negative)

//--------------------//

