function isPalindrome(str: string): boolean {
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
