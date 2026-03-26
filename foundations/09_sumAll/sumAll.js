function inputValidation(input) {
    return Number.isInteger(input) && input > 0
}
const sumAll = function(smallestNum,biggestNum) {
    if (inputValidation(smallestNum) && inputValidation(biggestNum)){
        if (smallestNum > biggestNum) {
            [biggestNum,smallestNum] = [smallestNum, biggestNum];
        }
        let n = (biggestNum - smallestNum) + 1;
        let sum = n/2 * (smallestNum + biggestNum);
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
