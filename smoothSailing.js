// 9. Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    const array = inputArray.sort((a, b) => b.length - a.length);
    return array.filter(inputArray => inputArray.length >= array[0].length);
}

// 10. Given two strings, find the number of common characters between them.

function solution(s1, s2) {
    let array1 = s1.split(''), array2 = s2.split('');
    common = 0;
    if (array1.length > array2.length) { 
      array2.forEach(element => 
        {if (array1.indexOf(element) > -1 && array1.splice(array1.indexOf(element), 1)) common += 1 })
    } else {
     array1.forEach(element => {if (array2.indexOf(element) > -1 && array2.splice(array2.indexOf(element), 1)) common += 1})
    }
    return common;
}