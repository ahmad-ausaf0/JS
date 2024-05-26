// map() -> map() method creates a new array with the results of calling a function for every array element.

// That sounds sort of like forEach method right? Well, there is a subtle, yet important, difference.

// The forEach() method does not actually return anything but 'undefinded'. It mutates each array element and is done, discarding the return value. An example may be something like iterating over each array element and saving the mutated values to a database... and done.

// On the other hand, the map() method iterates over an array, transforms each array element of the array and returns a new array with the transformed values!! This new array is the same size and does not discard any element like filter() method does.

var numbers = [0, 1, 2, 3, 4, 5];
// multiplying each element with 2
var newNumbers = numbers.map(function(element) {
    return element * 2;
})

console.log(newNumbers);

// Challenge - square root of give array for each element

var numbers2 = [9, 16, 25, 400,900];
var squareRootArray = numbers2.map(function(element) {
    return Math.sqrt(element);
});
console.log(squareRootArray); 

// OR

var squareRootArray2 = numbers2.map(Math.sqrt);
console.log(squareRootArray2); 

// New
var people = [
    {firstName: 'Jimmy', lastName: 'Brown'},
    {firstName: 'Cindy', lastName: 'Malcom'},
    {firstName: 'Timothy', lastName: 'Stumps'},
    
];

function listNames(element, index) {
    var fullNames = [element.firstName, element.lastName];
    return fullNames; 
}

var fullNamesArray = people.map(listNames);
console.log(fullNamesArray);

// Challenge -show like this -> [[ '0: Jimmy Brown' ],[ '1: Cindy Malcom' ],[ '2: Timothy Stumps' ]]


function listNames2(element, index) {
    var fullNames = [];
    var joinFullNames = index + ' : ' + element.firstName + ' ' + element.lastName
    fullNames.push(joinFullNames);
    return fullNames;
}

var fullNamesArray2 = people.map(listNames2);
console.log(fullNamesArray2);

// OR---------

function listNames3(element, index) {
    var fullNames = [index + ' : ' + element.firstName + ' ' + element.lastName];
    return fullNames;
}

var fullNamesArray3 = people.map(listNames3);
console.log(fullNamesArray3);