const removeFromArray = function(arr,...removeFromList) {
    return arr.filter((number)=> !(removeFromList.includes(number)));
};

// Do not edit below this line
module.exports = removeFromArray;
