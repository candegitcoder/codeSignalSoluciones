//4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    let result = inputArray[0];
    for(let i = 1; i < inputArray.length; i++) {
        result *= inputArray[i];
        
        if (inputArray.length == 1) return 0;
        let largeProduct = inputArray[0] * inputArray[1];
        
        for(let i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] * inputArray[i+1] > largeProduct) {
                largeProduct = inputArray[i] * inputArray[i+1];
            }
        }
        return largeProduct;
    }
}

//5. Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

function solution (n) {
    return Math.pow(n,2) + Math.pow((n-1), 2); 
}

// 6. Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function solution(statues) {
    for (let i = 0; i < statues.length; i++) {
        return (Math.max(...statues) - Math.min(...statues) + 1) - (statues.length);
    }
}

// 7. Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function solution(sequence) {
    oneElement = 0;
    for (var a=0; a<sequence.length; a++) {
        if (sequence[a] <= sequence[a-1]) oneElement++;
        if (sequence[a] <= sequence[a-2] && sequence[a+1] <= sequence[a-1]) oneElement++;
    }
    return oneElement<=1;
}

// 8. Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots

function solution (matrix) {
    let total = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (i == 0) {
                if (matrix[i][j] != 0) {
                    total+=matrix[i][j];
                }
            } else {
                if (matrix[i][j] !=0 && matrix[i-1][j] !=0) {
                    total+=matrix[i][j];
                }
                if (matrix[i-1][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }  
    return total;
}