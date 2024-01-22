// 045. Write a program to print following outputs in C language
function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let line = ' ';

        for (let j = 0; j < rows - i; j++) {
            line += String.fromCharCode(65 + j);
        }
        for (let k = 0; k < 2 * i; k++) {
            line += ' ';
        }
        for (let j = rows - i; j > 0; j--) {
            line += String.fromCharCode(64 + j);
        }
        console.log(line);
    }
}
printPattern(5);
