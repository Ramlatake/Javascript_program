// 030. Write a Program to accept a number and print sum of it’s digits in C language
let rem = 0;
let sum = 0;
let n = 255;
while (n > 0) {
    rem = n % 10;
    sum = sum + rem;
    n = n / 10;

}
console.log("sum of digits ...", sum);