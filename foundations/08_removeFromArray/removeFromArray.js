const removeFromArray = function(arr,...valuesToRemove) {
let remainingValue = [];
for (let num of arr) {
    if (valuesToRemove.includes(num)){
        continue;
    }else {
        remainingValue.push(num);
    }
}
return remainingValue;
};

// Do not edit below this line
module.exports = removeFromArray;
