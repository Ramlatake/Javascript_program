// 046. Write a program to print following outputs in C language
for (let i = 1; i <= 6; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        if (j === i || i === 1) {
            output += j;
        } else {
            output += "1";
        }
    }
    console.log(output);
}

