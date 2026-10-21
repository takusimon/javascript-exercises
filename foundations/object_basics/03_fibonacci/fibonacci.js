const fibonacci = function(nthTerm) {
const GOLDENRATIO = (1 + Math.sqrt(5))/2;

if (typeof nthTerm !== 'number'|| nthTerm <= 0 || Number.isNaN(nthTerm)){
    return "OOPS";
}

return (Math.round(((GOLDENRATIO)**nthTerm - (1-GOLDENRATIO)**nthTerm)/ Math.sqrt(5)));

};

// Do not edit below this line
module.exports = fibonacci;
