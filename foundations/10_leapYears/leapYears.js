const leapYears = function(year) {
if (year % 100 == 0) {
    // if it's divisible by 100 it must also be divisible by 400 to be a leap
    // year
    if (year % 400 == 0) {
        return true;
    }else {
        return false;
    }
} else if (year % 4 == 0) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
