// // 035. Write a program to print following outputs in C language


let n = 5
let star = ""
for (a = 1; a <= n; a++) {
    for (b = 0; b < a; b++) {
        star = star + " *"
    }
    star = star + "\n"
}
console.log(star);
