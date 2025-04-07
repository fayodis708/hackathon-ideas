function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function generatePrimes(limit: number): number[] {
  const primes: number[] = [];
  let number = 2;
  while (primes.length < limit) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }
  return primes;
}
