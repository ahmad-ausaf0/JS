// Numbers to Strings
// toString() and String() both convert a number to a string.

// toString() ->
var number = 500;
console.log(typeof number);
var numberToString = number.toString();
console.log(numberToString);
console.log(typeof numberToString);

// String() ->
var numberToString1 = String(number);
console.log(numberToString1);
console.log(typeof numberToString1);

// toFixed() -> does the same thing as toString() but it returns a string representing a number in fixed-point notation. 
// @param fractionDigits — Number of digits after the decimal point.

var money = 3;
var moneyToString = money.toFixed(2);
console.log(typeof moneyToString);
console.log(moneyToString);

var money2 = 3.22;
var moneyToString2 = money2.toFixed(4);
var moneyToString3 = money2.toFixed(0); // for rounding off the number
console.log(typeof moneyToString2);
console.log(moneyToString2);
console.log(moneyToString3);

var money3 = 3.75;
var moneyToString4 = money3.toFixed(0);
console.log(moneyToString4); // rounding off to 4 from 3.75






