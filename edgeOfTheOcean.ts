// 11. Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

function solution(n: string): boolean {
    n = n.toString();
	const count = n.length / 2;
	let firstHalf = 0;
	let secondHalf = 0;
	for (let i = 0; i < count; i++) {
		firstHalf += +n[i];
		secondHalf += +n[n.length - 1 - i];
	}
	return firstHalf === secondHalf;
}

// 12. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
function solution(a: number[]): number[] {
    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
            if(a[i] != -1 && a[j] != -1) {
                if(a[i] > a[j]) {
                    let reArrange = a[i];
                    a[i] = a[j];
                    a[j] = reArrange;
                }
            }
        }
    }
    
    return a;
}


