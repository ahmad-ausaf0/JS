// charAt() - returns the the character at the specified index of string.

var position = "I want to search for positions within this string."
console.log(position.charAt(3));

// indexOf() - Returns the position of the first occurrence of a substring. Takes two arguments :
//  1 - search value from a substring
//  2 - starting index from where we want ot start search (optional)

// console.log(position.indexOf("a"));
// console.log(position.indexOf("a", 10));

var sleep = "I am going to go to sleep after this." 
console.log(sleep.indexOf("g"));
console.log(sleep.indexOf("going"));
console.log(sleep.indexOf("to", 5));

// lastIndexOf() - returns the position of the last occurrence of a specifiedvalue in a string.

console.log(sleep.lastIndexOf("to"));
console.log(sleep.lastIndexOf("g"));




