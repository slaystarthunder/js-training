// SIDE QUEST: Number report
// Run in the terminal with: node level-0/sidequest-number-report.js
// Rule: no AI, own hands. Write predictions BEFORE you run.

// 1. Create an array called numbers with these values: 4, 11, 8, 15, 2, 7

let numbers = [4, 11, 8, 15, 2, 7];


// 2. Print a heading: === Number report ===

console.log(" === Number Report === ")

// 3. Print "Count: " followed by how many numbers there are.
//    Use length, don't type 6.

console.log("Count: " + numbers.length);

// 4. Write a function sum(list) that adds up every number in the list
//    with a loop and returns the total.
//    Print "Sum: " followed by the result.

function sum(list) {

    let totalSum = 0;
    for (i = 0; i < list.length; i++) {
        totalSum += list[i];
    }

    return totalSum;
}

let sumOfNumbers = sum(numbers);
console.log("Sum: " + sumOfNumbers);


// 5. Write a function average(list) that returns the average.
//    Reuse your sum function and length instead of writing a new loop.
//    Print "Average: " followed by the result.

function average(list) {
    return sum(list) / list.length;
}

let averageOfNumbers = average(numbers);
console.log("Average: " + averageOfNumbers);


// 6. Write a function countEven(list) that returns how many numbers are even.
//    New tool: x % 2 gives the remainder when x is divided by 2. Even numbers give 0.
//    Print "Even numbers: " followed by the result.

function countEven(list) {

    evenCounter = 0;
    for (i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            evenCounter ++;
        }
    }
    return evenCounter;
}
let numberOfEvenNumbers = countEven(numbers);

console.log("Even numbers: " + numberOfEvenNumbers);

// 7. Loop through numbers and print one line per number, like:
//    4 is even
//    11 is odd

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even");
    } else {
        console.log(numbers[i] + " is odd");
    }
}

// BONUS 8. Write a function biggest(list) that returns the largest number.
//    Hint in plain words: remember the first item as "biggest so far".
//    Look at each item; if it's bigger than "biggest so far", it takes its place.
//    Print "Biggest: " followed by the result.

// PREDICT: before running, write every line you expect to see,
//    as comments here. Make a trace table for sum if it helps.

// TEST 9. Change numbers to an empty array [].
//    Predict first: what will Count, Sum, Average, Even numbers and Biggest print?
//    Then run it. Keep wrong predictions and add // actual: next to them.