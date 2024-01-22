// 031. Write a program to accept a number from user and check if it is Armstrong number or not i.e. 153 = 1^3 + 5^3 + 3^3 = 153 in C language
let temp, rem, sum = 0;
let n = 153;
temp = n;
while (n != 0) {
    rem = n % 10;
    sum = sum + rem * rem * rem;
    n = Math.floor(n / 10);
}
if (temp == sum) {
    console.log("Number is armstrong");
}
else {
    console.log("Number is not armstrong");
}