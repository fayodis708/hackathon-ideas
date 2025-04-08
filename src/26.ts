function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfDigits(num: number): number {
    let sum = 0;
    while (num > 0) {
        sum += Math.floor(num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}
