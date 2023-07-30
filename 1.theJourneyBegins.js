//1. Write a function that returns the sum of two numbers.

function solution(param1, param2){
   return param1+param2 
}

//2. Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function solution(year) {
    return(Math.ceil(year/100));
    // realice esto para que divida el año entre 100 y luego redondee hacia arriba el numero entero mas cercano, que es lo que hace math.ceil
}

//3. Given the string, check if it is a palindrome.
function solution(inputString){
    //cree una nueva variable para despues compararla con la original
    //primero, use un 'split' para dividir cada caracter del array
    //despues, utilice el 'reverse' para invertir el orden del array
    //por ultimo use 'join' para volver a unir los elementos sin separadores del array
    const reverseInputString = inputString.split("").reverse().join("");
    // despues compare las dos cadenas, la original y la invertida 
    return inputString === reverseInputString
    // si son estrictamente iguales la funcion devuelve un true, lo que indicaria que si es un palindromo
}

