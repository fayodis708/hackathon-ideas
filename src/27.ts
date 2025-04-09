function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array is empty.");
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4]));
