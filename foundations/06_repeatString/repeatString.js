const repeatString = function(word,multiplier) {
let newWord = '';
// Check if multiplier is valid
if (multiplier < 0) {
    return 'ERROR';
}
//loop multiplier amount of times
let i = 0;
while (i < multiplier) {
     // add word to word
    newWord = newWord + word;
    i++;
}
   
//return string
return newWord;
};
// Do not edit below this line
module.exports = repeatString;
