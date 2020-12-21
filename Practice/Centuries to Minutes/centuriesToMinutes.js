function centuriesToMinutes(arg) {
    let centuries = Number(arg);
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes(5)

// 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes