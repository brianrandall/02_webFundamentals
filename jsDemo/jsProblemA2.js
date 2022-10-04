function arrayIsPalindrome(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] != array[array.length - (1 + i)]) {
            return false;
        }
    }
    return true;
}

console.log(arrayIsPalindrome([1, 2, 3, 4, 5]));
console.log(arrayIsPalindrome([1, 2, 3, 2, 1]));