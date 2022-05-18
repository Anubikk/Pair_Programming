/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

let myEvery = function(array, cb) {
    //return a boolean that is true if all ele are true if passed through the callback args
    for (let i = 0; i < array.length; i++) {
            let ele = array[i];
            if (cb(ele)===false) {
                return false;
            }
    }
    return true;
    //otherwise return false
    //iterate through the array
    //evaluate if the ele is true or false if pased through the callback arg
    // if any ele is false return false otherwise return true

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
