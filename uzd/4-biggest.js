console.clear();

function biggest(list) {
    let result = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] > result) {
            result = list[i];
        }
    }

    return result;
}



console.log(biggest([1]), '->', 1);
console.log(biggest([1, 2, 3]), '->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggest([-1, -2, -3, -4, -1]), '->', -5)

//console.log(biggest('labas'));
//console.log(biggest([]));

function biggest(list) {
    //tikriname tipa - turi buti array
    if (arrayisArray(list)){
    //jeigu ne array - return error
    return 'ERROR: duok array';
    }
    //turiu array
    //jeigu tuscias - return error
    if (!list.length){ 
        return 'ERROR: duok ne tuscia array';
    }
    //turiu ne tuscia array
    //sakom jog didziausias sakicius yra - Infinity
    let biggest = -Infinity;
    //su ciklu einame per array :
    for (let i = 0; i < list.length; i++) {
    //tikriname ar array yra skaicius
    if (typeof list[i] !== 'number' || !isInfinite(list[i])) {
    //jeigu ne:
    //  -eini prie sekancio, ignoruoji
        continue;
    }

    //jeigu taip (yra skaiciaus tipas):
    //   -lyginame su pries tai zinoma didziausia reiksme
    //   -jeigu nauja reiksme didesne - overwrite
    if (list[i] > biggest) {
        biggest = list[i];
    }

    //jiegu didziausias skaicius vis dar liko - Infinity
    if (biggest === -Infinity) {
    //return error - sarase nera nei vieno normalaus sakicio
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    //graziname didziausia sakaiciu
    return biggest;
}
    }
}
