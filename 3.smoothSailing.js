// 9. Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    // cree una nueva variable del array que es igual al inputArray, pero que ordena de mayor a menor los valores del array
    const array = inputArray.sort((a, b) => b.length - a.length);
    // utilice 'filter' para que solo me devuelva aquellos elementos que su longitud es mayor o igual al valor del primer elemento del array
    return array.filter(inputArray => inputArray.length >= array[0].length);
}

// 10. Given two strings, find the number of common characters between them.

function solution(s1, s2) {
    // tomando los valores que ya me daba el codesignal cree dos array, y dividi los elementos de su array con 'split' para que despues pueda encontrar el caracter en comun
    let array1 = s1.split(''), array2 = s2.split('');
    // cree una variable que despues me arrojara el caracter en comun
    common = 0;
    // compare los dos nuevos array, primero para ver cual es mayor
    if (array1.length > array2.length) { 
        // utilice el foreach para que vaya verificando cada elemento del array para compararlo
        // si alguno de esos elementos esta en el otro array se suma a common y se elimina del array con el 'splice' para no contar el mismo elemento mas de una vez
        array2.forEach(element => 
        {if (array1.indexOf(element) > -1 && array1.splice(array1.indexOf(element), 1)) common += 1 })
    } else {
     array1.forEach(element => {if (array2.indexOf(element) > -1 && array2.splice(array2.indexOf(element), 1)) common += 1})
    }
    // devuelve la cantidad de caracteres comunes entre las dos cadenas
    return common;
}
