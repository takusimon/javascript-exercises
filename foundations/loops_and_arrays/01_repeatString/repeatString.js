const repeatString = function(word,repeatCount) {
    let repeatedString = '';

    if (repeatCount < 0) {
        return "ERROR";
    } else if (word === '') {
        return '';
    } {
        for (let i = 0;i < repeatCount;i++){
            repeatedString += word;
        }

        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
