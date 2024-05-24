// Strings to Numbers
// Number() converts a string to a number, opposite of String().

var string = "10";
var stringToNumber = Number(string);
console.log(stringToNumber);
console.log(typeof stringToNumber); 

// parseInt() -> parses a string and returns a whole number with lower value means floor value always.

var decimal = "3.22";
var parseIntoWhole = parseInt(decimal);
console.log(parseIntoWhole);
console.log(typeof parseIntoWhole);

var decimal2 = "3.75";
var parseIntoWhole2 = parseInt(decimal2);
console.log(parseIntoWhole2); // parses to whole number with floor value (3) not (4)
console.log(typeof parseIntoWhole2);

// parseFloat() -> Converts a string to a floating-point number.
// if we want to convert string to a number and keep your decimal places.
// @param string — A string that contains a floating-point number.

var decimal3 = "3.75";
var parseIntoWhole3 = parseFloat(decimal3);
console.log(parseIntoWhole3);
console.log(typeof parseIntoWhole3);


