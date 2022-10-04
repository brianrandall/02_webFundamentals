//array is a palindrome - write a function to determine whether it is or not


// comparing two arrays with == will return false value
function arrayIsPalindrome(array) {
    var comparisonArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        comparisonArray.push(array[i]);
    }
    // console.log(comparisonArray);

    for (var i = 0; i < array.length; i++) {
        if (array[i] != comparisonArray[i]) {
            return false;
        }
    }
    return true;
}

console.log(arrayIsPalindrome([1, 2, 3, 4, 5]));
console.log(arrayIsPalindrome([1, 2, 3, 2, 1]));
console.log(arrayIsPalindrome([2, 4, 3, 7, 6, 4, 8]));


