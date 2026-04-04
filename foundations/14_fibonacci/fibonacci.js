const fibonacci = function(term) {
	//instead of generating the sequnce just find the nth term in the sequence
	// use the the fibonacci formula
	if (term < 0) {
		return "OOPS";
	} else if (Number(term) != NaN) {
		term = Number(term);
		const phi = (1 + Math.sqrt(5)) / 2;
		const psi = (1 - Math.sqrt(5)) / 2;
		return Math.round((phi ** term - psi ** term) / Math.sqrt(5));
	}
};

// Do not edit below this line
module.exports = fibonacci;
