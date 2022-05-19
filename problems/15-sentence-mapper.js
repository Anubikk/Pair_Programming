/**
Write a function suffixCipher that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The suffixCipher
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
**/

let suffixCipher = function(sentence,object) {
    //return a sentence modified with the callback function corresponding with the suffix each word ends with
    //convert the string to an array
    let newarray = [];
      let words = sentence.split(" ");
    //convert the objects keys and values into a array
    let objkeys = Object.keys(object);                         // < ================ REMEMBER THIS
    let objectvalues = Object.values(object);              // < ================ REMEMBER THIS
    //iterate through the array
      for (let i=0;i < words.length; i++) {
        let word = words[i];
        if (word.endsWith(objkeys[0])) {
          newarray.push(objectvalues[0](word));
        }
        else if (word.endsWith(objkeys[1])) {
          newarray.push(objectvalues[1](word));
      }
      else newarray.push(word)
    }
    return newarray.join(" ");
}





/*DO NOT MODIFY ANYTHING UNDER THIS  LINE**/
module.exports = suffixCipher;
