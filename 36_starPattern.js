// 036. Write a program to print following outputs in C language/
let n = 5
let star = ""
for (a = 5; a > 0; a--) {
    for (b = 0; b < a; b++) {
        star = star + " *"
    }
    star = star + "\n"
}
console.log(star);
