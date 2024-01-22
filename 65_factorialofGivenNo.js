// 065. Write a program to print factorial of a given number using recursive function in C language

function fact(n) {
    let f;
    if (n === 1) {
        return 1;

    } else {
        f = n * fact(n - 1);
        return f;
    }
}
let num = 5;
let result = fact(num);
console.log(result);