// 029. Write a Program to accept a number and print the number in reverse order. E.g. if 1324 is the number then the output will be 4231 in C language

let number = 258;
let result = 0;

while (number > 0) {

    rem = number % 10;
    result = result * 10 + rem;
    number = Math.floor(number / 10);
}
console.log("Reversed number is : " + result)

