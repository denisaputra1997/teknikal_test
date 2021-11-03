/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {

    let missNumber = [];

    let minNum = Math.min(...numbers);
    let maxNum = Math.max(...numbers);

    for (let i = minNum; i < maxNum; i++) {
        if (numbers.indexOf(i) < 0) {
            missNumber.push(i);
        }
    }

    return missNumber;
}

console.log(result(numbers));