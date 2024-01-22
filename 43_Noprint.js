
// 043. Write a program to print following outputs in C language
let rows = 4;
let char = "";
for (let i = 1; i <= rows; i++) {

    for (let j = 1; j <= i; j++) {
        char += i;
    }
    char += "\n";
}
console.log(char);