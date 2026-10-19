const sumAll = function(minValue,maxValue) {
    if ((Number.isInteger(minValue) && minValue >=0) && (Number.isInteger(maxValue) && maxValue >= 0)){
        if (minValue > maxValue){
            [minValue,maxValue] = [maxValue,minValue];
        }
        let sum = 0;
        for (let i = minValue; i <= maxValue;i++){
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
