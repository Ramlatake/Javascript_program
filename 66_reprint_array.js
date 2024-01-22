// 066. Write a program to accept a number n from user and then accept n array elements from user and reprint them in C language

let n = 10;
let i;
let a = [20];

for (i = 0; i < n; i++) {
    console.log("Enter element " + (i + 1) + " : ");
    a[i] = parseInt(prompt());
}
for (i = 0; i < n; i++) {
    console.log("Element " + (i + 1) + " : " + a[i]);
}