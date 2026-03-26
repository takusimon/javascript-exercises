const sumAll = function(smallestNum,biggestNum) {
if (smallestNum > biggestNum){
    [biggestNum,smallestNum] = [smallestNum,biggestNum];
}
let n = (biggestNum - smallestNum) + 1;
let sum = (n/2) * (smallestNum + biggestNum);
return sum;
};

// Do not edit below this line
module.exports = sumAll;
