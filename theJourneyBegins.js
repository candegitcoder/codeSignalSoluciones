//1. Write a function that returns the sum of two numbers.

function solution(param1, param2){
   return param1+param2 
}

//2. Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function solution(year) {
    return(Math.ceil(year/100));
}

//3. Given the string, check if it is a palindrome.
function solution(inputString){
    //hice un const de una variable nueva que valdria el valor del inputString pero al reves
    const reverseInputString = inputString.split("").reverse().join("");
    //aca lo que hice fue que compare si los resultados son estrictamente igual
    return inputString === reverseInputString
}

