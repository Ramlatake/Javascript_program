// 054. Write a program to print out ASCII chart on a single screen (all 256 characters from 0 to 255) in a tabular form. The ASCII code should be followed by the corresponding character in C language

let i;
for (i = 0; i <= 255; i++) {
    process.stdout.write(String.fromCharCode(i) + ' ');

}