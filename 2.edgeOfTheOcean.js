//4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    //primero declare una nueva variable que asigne el valor del primer elemento del inputArray
    let result = inputArray[0];
    // luego utilice un for para recorrer todos los elementos del array
    for(let i = 1; i < inputArray.length; i++) {
        // luego multiplique el valor de result por el valor actual del array, para calcular el producto de todos los elementos del array
        result *= inputArray[i];
        
        if (inputArray.length == 1) return 0;
        // aca declare otra variable que seria el valor de los otros dos array ya asignados, para luego compararlo
        let largeProduct = inputArray[0] * inputArray[1];
        
        // aca puse otro for que recorra todo el inputArray menos el ultimo elemento del array para encontrar el producto mas grande
        for(let i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] * inputArray[i+1] > largeProduct) {
                // compara los dos valores
                largeProduct = inputArray[i] * inputArray[i+1];
            }
        }
        return largeProduct;
    }
}

//5. Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

function solution (n) {
    //realice esta operacion para elevar 'n' al cuadrado, y en el segundo calculo al valor de n, se le resta -1
    return Math.pow(n,2) + Math.pow((n-1), 2); 
}

// 6. Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function solution(statues) {
    for (let i = 0; i < statues.length; i++) {
        //utilice el Math.max para encontrar el valor mas alto del array
        // y el Math.min para al contrario encontrar el menor valor del array
        // despues reste estos dos valores para calcular la diferencia entre estos dos, menos el la longitud total del array
        return (Math.max(...statues) - Math.min(...statues) + 1) - (statues.length);
    }
}

// 7. Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function solution(sequence) {
    // declare una nueva variable
    oneElement = 0;
    for (var a=0; a<sequence.length; a++) {
        // compare el array actual con su elemento anterior
        if (sequence[a] <= sequence[a-1]) oneElement++;
        // compare el array actual con su elemento dos lugares anteriores, y el elemento siguiente compare con su elemento anterior
        if (sequence[a] <= sequence[a-2] && sequence[a+1] <= sequence[a-1]) oneElement++;
    }
    // si el elemento en la secuencia sigue un movimiento creciente al ser menor o igual a 1
    return oneElement<=1;
}

// 8. Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots

function solution (matrix) {
    // declare una nueva variable
    let total = 0;
    
    // aca inicie dos 'for' uno para que recorre los valores de la matrix a traves de i y otro para que los recorra a traves de j, osea que recorra el array vertical y horizontalmente 
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            // verificar si estamos en la primera fila de la matrix, porque al fantasma (0) tener que estar arriba no me sirve contar los de arriba pero si si su valor actual es 0 
            if (i == 0) {
                // si no es igual a 0 es un valor que puede ser sumado al total final
                if (matrix[i][j] != 0) {
                    total+=matrix[i][j];
                }
            } else {
                // verificar si no estamos en un valor de 0 y si el valor de la fila anterior tampoco es 0
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