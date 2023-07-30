//14. Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on. You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function solution(a: number[]): number[] {
    // primero cree una nueva array para los dos elementos (teams)
    let o: number[] = [0, 0];
    // despues inicie un 'for' para que recorra los elementos 
    // aca como me daba error porque 'i' no era un string, utilice 'parseInt' para que me lo tome como un numero
    // despues puse el '%' para que me determine si es par o impar
    // si es par se suma al primer team de 'o' si es impar al segundo
    for (let i in a) o[parseInt(i) % 2 === 0 ? 0 : 1] += a[parseInt(i)];
    // devuelve la suma de los elementos del team pares e impares
    return o;
}

//15. Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture: string[]): string[] {
    // primero cree una nueva variable que contiene una cadena formada por '*' y que se repita en el largo del array
    let border = "*".repeat(picture[0].length + 2), 
    // despues un nuevo array que contendra el valor de border
    o = [border];
    //luego un for que recorra todo el array original y que este rodeado por '*' al principio y al final 
    for(let e of picture) o.push("*"+e+"*");
    // una ultima linea para que se cierre el borde
    o.push(border);
    return o;
}

