function exactSumOfRealNumbers(input) {
    let n = Number(input.shift());
    let sum = 0;
    for (let a = 0; a < n; a++) {
        sum += Math.fround(Number(input[a]));
    }
    console.log(parseInt(sum));
}

exactSumOfRealNumbers(['2', '0.0000001', '600000000'])