// 021. Write a program to accept three numbers from user and print them in ascending and descending order in C language

var a = 15;
var b = 38;
var c = 85;
if ((a >= b) && (a >= c)) {
    if (b >= c) {
        console.log("\n Descending order : ", a, b, c);
        console.log("\n Ascending order : ", c, b, a);
    }
    else {
        console.log("\n Descending order : ", a, c, b);
        console.log("\n Ascending order : ", b, c, a);
    }
}
else if ((b >= a) && (b >= c)) {
    if (a >= c) {
        console.log("\n Descending order : ", b, a, c);
        console.log("\n Ascending order : ", c, a, b);
    }
    else {
        console.log("\n Descending order : ", b, c, a);
        console.log("\n Ascending order : ", a, c, b);
    }
}
else if ((c >= a) && (c >= b)) {
    if (a >= b) {
        console.log("\n Descending order : ", c, a, b);
        console.log("\n Ascending order : ", b, a, c);
    }
    else {
        console.log("\n Descending order : %d %d %d", c, b, a);
        console.log("\n Ascending order : %d %d %d", a, b, c);
    }
}
