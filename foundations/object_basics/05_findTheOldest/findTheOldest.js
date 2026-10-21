const findTheOldest = function(arr) {
    return arr.sort((person1, person2) => {
        return (
            (person2.yearOfDeath ?? new Date().getFullYear()) - person2.yearOfBirth
        ) - (
            (person1.yearOfDeath ?? new Date().getFullYear()) - person1.yearOfBirth
        );
    })[0];
};
// Do not edit below this line
module.exports = findTheOldest;
