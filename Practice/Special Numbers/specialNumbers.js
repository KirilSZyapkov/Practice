function specialNumbers(arg) {
    let n = Number(arg);
    let sum = 0;
    for (let a = 1; a <= n; a++) {
        sum = Math.trunc(a / 10) + (a % 10);
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${a} -> True`);
        } else {
            console.log(`${a} -> False`);
        }
    }

}

specialNumbers(15)