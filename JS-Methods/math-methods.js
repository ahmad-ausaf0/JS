// Math is a built-in JS object that allows you to perform mathematical tasks on numbers. There are five methods of math object.

// 1. Math.round() -> Returns a supplied numeric expression rounded to the nearest integer.
// @param x — The value to be rounded to the nearest integer.

var number = 12.8;
console.log(Math.round(number));

var number2 = 3.2;
console.log(Math.round(number2));

var number3 = 7.9999887766;
console.log(Math.round(number3));

// 2. Math.ceil() - ceiling is up
// 3. Math.floor() - floor is down

var number4 = 4.1;
console.log(Math.ceil(number4));

var number5 = 4.1;
console.log(Math.floor(number5));

// 4. Math.min() - Returns the smaller of a set of supplied numeric expressions.
// @param values — Numeric expressions to be evaluated.

// 5. Math.max() - Returns the larger of a set of supplied numeric expressions.
// @param values — Numeric expressions to be evaluated.

console.log(Math.min(4,2,6));

console.log(Math.max(4,2,6));

var array = [3, 2, 5, 7, 5.6, 8, 7.9, 10, 20, 9];
console.log(Math.min(array)); // gives NaN, because it accepts numeric expression means we need to pass arrays to the function params using spread(...array) operator.

// Now,
console.log(Math.min(...array));
console.log(Math.max(...array));


