const palindromes = function (word) {
    word = word
        .toLowerCase()
        .split('')
        .filter(letter => {
                return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) || (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57)});
    let wordStrip = word.join('');
    let wordReverse = word.reverse().join('');
    return wordStrip === wordReverse;
};

// Do not edit below this line
module.exports = palindromes;
