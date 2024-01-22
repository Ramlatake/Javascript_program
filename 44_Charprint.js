function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            line += String.fromCharCode(64 + i);
        }
        console.log(line);
    }
}
printPattern(4);
