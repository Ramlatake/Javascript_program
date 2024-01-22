// 061.Write a program to accept a number from user and print it’s factorial, check if it prime or not, and print it’s fibbonacci series using different functions in C language

function fact1(x) {
    let fact = 1;
    for (i = 1; i <= x; i++)
        fact = fact * i;
    console.log(fact);
}

function IsPrime(x) {

    for (i = 2; i < x - 1; i++) {
        if (x % i == 0) {

            return 0;
        }
    }

}
function fibbo(x) {
    pre = 1, cur = 1, i;
    let temp;
    console.log(pre, cur);
    for (i = 3; i <= x; i++) {
        temp = cur;
        cur = pre + cur;
        pre = temp;
        console.log(cur);
    }
}
let n = 3;
fact1(n);
fibbo(n);
IsPrime(n);