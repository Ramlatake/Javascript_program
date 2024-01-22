// 064. Write a program using recursions for fibbonacci series in C language

function fibbo(pre, cur, x) {
    let temp;
    if (x === 2) {
        console.log(cur);
        process.exit(0);
    }
    temp = cur;
    cur = pre + cur;
    pre = temp;
    console.log(cur + ' ');
    fibbo(pre, cur, x - 1);
}


let n = 10, pre = 1, cur = 1;
console.log(pre + ' ' + cur + ' ');
fibbo(pre, cur, n);

