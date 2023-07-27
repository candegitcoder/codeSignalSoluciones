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
    const reverseInputString = inputString.split("").reverse().join("");
    return inputString === reverseInputString
}

