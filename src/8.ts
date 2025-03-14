function getRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers[getRandomNumber(numbers.length - 1)]);
