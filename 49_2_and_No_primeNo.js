// 049. Write a program to accept a number and print prime numbers between 2 and n in C language

let i, flag = 1, n = 100, newn;
for (newn = 2; newn <= n; newn++) {
    flag = 1;
    for (i = 2; i <= newn / 2; i++) {
        if (newn % i == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log(newn);
    }
}