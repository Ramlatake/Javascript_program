// 048. Write a program to accept a number from user and print if it is prime or not in C language

let n = 97;
let flag = 0;
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        flag++;
    }
}
if (flag == 2) {
    console.log("number is prime");
}
else {
    console.log("number is not prime");
}