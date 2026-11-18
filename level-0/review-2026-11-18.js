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
    console.log("Cold")
}
console.log("Done"); //prediction Mild + Done

