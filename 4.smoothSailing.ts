// 11. Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

function solution(n: string): boolean {
    // para asegurarse de que n sea una cadena 
    n = n.toString();
    // una variable count para calcular la cantidad de digitos que hay en cada mitad del array 'n' 
	const count = n.length / 2;
    // cree dos nuevas variables que despues voy a comparar, donde esta el valor de cada mitad del array
	let firstHalf = 0;
	let secondHalf = 0;
	for (let i = 0; i < count; i++) {
        // suma el valor actual de cada array con el valor correspondiente en la otra mitad del array
        // como antes habiamos dicho que 'n' era una cadena, se pone el simbolo '+' para que lo tome como un numero para sumarlo
		firstHalf += +n[i];
		secondHalf += +n[n.length - 1 - i];
	}
    // compara si los valores de la primer mitad y la segunda mitad son estrictamente iguales
	return firstHalf === secondHalf;
}

// 12. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
function solution(a: number[]): number[] {
    //realice dos 'for' uno que recorra el array a traves de 'i' y otro que lo recorra a traves de 'j' comenzando desde la siguiente posicion despues de 'i'
    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
            //verifico si los elementos de 'i' y 'j' son distintos a -1(arboles)
            if(a[i] != -1 && a[j] != -1) {
                // comparo cual es mayor
                if(a[i] > a[j]) {
                    // si es mayor el elemento en 'i' se intercambian los elementos
                    // en la nueva variable 'reArrenge' se guardan los valores de 'i'
                    let reArrange = a[i];
                    // despues se asigna el valor de 'j' al valor de 'i'
                    a[i] = a[j];
                    // se intercambian los valores y queda un nuevo arreglo
                    a[j] = reArrange;
                }
            }
        }
    }
    // ordenado de menor a mayor pero con los elementos -1 en sus posiciones originales
    return a;
}

//13. Write a function that reverses characters in (possibly nested) parentheses in the input string. Input strings will always be well-formed with matching ()s.

function solution(inputString: string): string {
    //inicie un if con un match con '/\([a-z]*\' para que busque un patron que contenga las letras minisculas entre parentesis
    if (inputString.match(/\([a-z]*\)/)) {
        return solution(inputString.replace(/\([a-z]*\)/, 
            // toma el primer patron y elimina los parentesis, por eso el replace, y luego utilice el reverse y join para revertir los caracteres
            Array.from(inputString.match(/\([a-z]*\)/)[0].replace(/\(|\)/g,'')).reverse().join('')));
    }
    else return inputString;
}