// 022. Write a program to calculate roots of a quadratic equations in C language

let a = 34;
let b = 20;
let c = 59;
let x, r1, r2;
x = b * b - 4 * a * c;
r1 = (-b + x) / 2 * a;
r2 = (-b - x) / 2 * a;
if (x > 0) {
    console.log("\nRoots are unequal...\n");
}

else if (x < 0) {

    console.log("\nRoots are imaginary...\n");
}
else {

    console.log("\nRoots are same....\n");
}

console.log("R1 = %f", r1);
console.log("R2 = %f", r2);