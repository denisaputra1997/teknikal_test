/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
    if (!words || words.length === 0) return "";

    var sortedArr = words.sort((a, b) => a.length - b.length);

    var shortestString = sortedArr[0];

    while (!words.every((string) => string.startsWith(shortestString))) {
        if (shortestString.length === 0) return;

        shortestString = shortestString.slice(0, -1);
    }

    return shortestString;
}

console.log(result(words));