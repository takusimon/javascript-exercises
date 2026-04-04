function removePunctuation(cleanedWord){
	return cleanedWord.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
}
const palindromes = function(word) {
	const nopunctuation = removePunctuation(word);
	const cleanedWord = nopunctuation.replaceAll(" ", "").toLowerCase();
	return cleanedWord === cleanedWord.split("").reverse().join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
