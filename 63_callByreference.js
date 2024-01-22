// 063. Write a program to accept two numbers from user and swap their values using call by reference method in C languageswap(int *x ,int *y)


function swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return [x, y];
}
let a = 10, b = 20;

[a, b] = swap(a, b);

console.log(`\nAfter Swapping a = ${a}, b = ${b}`);


