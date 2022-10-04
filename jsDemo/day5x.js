//function that accepts an array as its first parameter, and a number as its second
//have the function return a new array consisting of the items from the given array
//that are divisible by the number given

//example [2, 4, 5, 6, 7, 8], 2
//would return
//[2, 4, 6, 8]

function divisionMachine(theArray, theNumber) {
    var newArray = [];
    for (var i = 0; i < theArray.length; i++) {
        if (theArray[i] % theNumber == 0) {
            newArray.push(theArray[i]);
        }
    }
    console.log(newArray);
    return newArray;
}



divisionMachine([1, 4, 36, 33, 22, 16, 17, 6, 4, 8, 9, 444, 345, 2598], 6);
divisionMachine([2, 4, 6, 8, 10, 12, 14, 15], 2);
