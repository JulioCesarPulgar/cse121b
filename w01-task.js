// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah"; // Changed from const to let to allow reassignment
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // Fixed to get the current date and time
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error
let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) { // Changed from 'in' to 'of'
        sum += aNumber;
    }
    return sum;
}
