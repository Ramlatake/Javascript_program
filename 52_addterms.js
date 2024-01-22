// 052. Write a program to accept a number n from user and Add n terms of the series in C language


let i, j;
let sum = 0, fact = 1;
let num = 5;

for (i = 1; i <= num; i++) {

    fact = 1;

    for (j = 1; j <= i + 1; j++) {

        fact = fact * j;
        console.log(fact);

        sum = sum + i / fact;
    }


}
console.log("sum of the series....", sum);