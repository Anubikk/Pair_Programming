/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array,cb) {
    //return a value that is either the lowest number in the array or the result of the lowest number being passed through a callback arguement if one exists
    //create a value variable
    let result = array[0];
    //iterate through the array, returning the smallest value through the value variable
    for (let i=1;i<array.length; i++) {
       let ele = array[i];
        if (ele < result) {
            result = ele;
        }
    }
    if (cb === undefined) {
    return result;
    }
    return cb(result)
};

    //pass the value through the callback function if it exists - returning result
    // otherwise return smallest value







/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
