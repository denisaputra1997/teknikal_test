/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
    { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
    { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
    const cleannedArray = [];
    data.forEach((val) => {
        if (val !== null && typeof val !== "undefined") {
            cleannedArray.push(val);
        }
    });

    return cleannedArray;
}

console.log(result(data));