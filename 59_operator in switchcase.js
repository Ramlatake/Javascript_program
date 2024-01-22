// 059. Write a Program to accept two numbers and a operator (+, -, *, / from user and complete that particular operation only in C language


let rem = 0;
let a = 10;
let b = 80;
let op = "+";
switch (op) {


    case '+': console.log("Result : ", a + b); break;
    case '-': console.log("Result : ", a - b); break;
    case '*': console.log("Result : ", a * b); break;
    case '/': console.log("Result : ", a / b); break;
    default: console.log("invalid operator");
}