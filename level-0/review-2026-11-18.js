// Part 1
let a = 10;
let b = a;
a = 50;
console.log(a, b); //prediction 50, 10

console.log("7" + 3); //prediction 73
console.log(7 + 3); //prediction 10

let temp = 15;
if (temp > 20) {
    console.log("Warm");
} else if (temp > 10) {
    console.log("Mild");
} else {
    console.log("Cold");
}
console.log("Done"); //prediction Mild + Done


// Part 2A
function greet(name) {
    console.log("Hi " + name);
}

function addTwo(n) {
    return n + 2;
}

const triple = (n) => { n * 3; };
const half = (n) => n / 2;

let x = addTwo(3);
console.log(x);                     // A: predict 5
console.log(addTwo(addTwo(1)));  // B: predict 5
let r = greet("Sara");        // C: predict Hi Sara
console.log(r);                     // D: predict Hi Sara, undefined
console.log(triple(4));          // E: predict undefined
console.log(half(10));           // F: predict 5


// Part 2B

/*A function isAdult that takes an age and returns
true if the age is 18 or more, otherwise false. Print the result for 17 and for 30.
 */

function isAdult(age) {

    if(age >= 18) {
        return true;
    }
    return false;
}

console.log(isAdult(18)); //predict true
console.log(isAdult(30)); //predict true

/*An arrow function greeting that takes a name
and returns the text Hello, <name>! (use + to join). Print the result for “Ali”.
 */

const greeting = (name) => "Hello, " + name +"!";

console.log(greeting("Ali")); //predict Hello, Ali!

/*A function total that takes two prices and returns their sum.
Use it to add 10 and 5, then add 20 to that result, in a single line, and print the answer.
 */

function total(a, b) {

    return a + b;
}

console.log(total(10, 5)); //predict 15

let result = total(10,5) + 20;

console.log(result); //predict 35

// Part 3A

let fruits = ["apple", "banana"];
fruits.push("kiwi");
fruits[0] = "mango";

console.log(fruits.length);             //A: predict 3
console.log(fruits[0]);                 //B: predict mango
console.log(fruits[fruits.length - 1]); //C: predict kiwi
console.log(fruits[5]);                 //D: predict undefined

let empty = [];
console.log(empty.length);              //E: predict 0

// 3B

let numbers = [4, 8, 15];
numbers.push(16);
numbers[1] = 10;

const firstItem = (array) => array[0];

console.log(firstItem(numbers)); //predict 4
console.log(numbers);             //predict 4, 10, 15, 16



console.log(2 < 3);   // prediction:  true
console.log(3 < 3);   // prediction:  false
console.log(4 < 3);   // prediction:  false
console.log(3 <= 3);  // prediction:  true



