// Part A – Reading
// Make a trace table for each loop BEFORE you predict.

// A1

let count = 10;
while (count > 0) {
    console.log(count);  // prediction:
    count -= 3;
}
console.log("After:", count);  // prediction:

// A2
let n = 1;
while (n < 20) {
    n = n * 2;
}
console.log(n);  // prediction:

/*
 * Part B – Writing · No-AI · Power Save Mode on
 * Prediction comment next to every console.log BEFORE you run.
 * Wrong prediction? Keep it and add  // actual:  next to it.
 */


// B1. Use a while loop to count down from 5 to 1, printing each number.
//     After the loop, print "Liftoff!".
//     Think: what do you need BEFORE the loop, in the check, and INSIDE the block?


let i = 5;

while (i > 0) {
    console.log(i); //predict 5, 4, 3, 2, 1
    i --;
}

console.log("Liftoff!"); //predict Liftoff!



// B2. You save 150 kr every week, starting from 0.
//     Use a while loop to keep saving as long as savings are under 1000.
//     Also count how many weeks it takes.
//     After the loop, print the number of weeks and the final savings.
//     Hint: you need TWO variables before the loop.


let savings = 0;
let calendar = 0;
const savingsPerWeek = 150;

while (savings < 1000) {
    savings += savingsPerWeek;
    calendar ++;
}

console.log("After " + calendar + " weeks" + " you have " + savings + " in savings!" )



