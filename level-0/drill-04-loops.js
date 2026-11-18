/*
 * Drill 04 – Loops
 * Level 0 · No-AI · Power Save Mode on
 * Write a prediction comment next to every console.log BEFORE you run.
 * Wrong prediction? Keep it and add  // actual:  next to it.
 */


// 1. Use a for loop to print the numbers 1 to 5, one per line.
//    Think first: where does i start, and what should the check be,
//    so the last number printed is 5?

for(let i = 1; i < 6; i++) {
    console.log(i); //predict 1, 2, 3, 4, 5
}



// 2. Create an array called colors with three colors of your choice.

let colors = ["blue", "red", "white"];


// 3. Use a for loop with i and colors.length to print each color, one per line.

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); //predict blue, red, white
}


// 4. Print the same colors again, this time with a for...of loop.

for (const color of colors) {
    console.log(color); //predict blue, red, white
}


// 5. Bonus: use a for loop to print only the index of each color
//    (0, 1, 2), followed by the color on the same line.
//    Example output line: 0 red

for (let i = 0; i < colors.length; i++) {
    console.log(i + " " + colors[i]); //predict 0 blue, 1 red, 2 white
}