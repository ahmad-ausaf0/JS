// reduce() - reduce() method executes a function for each value of the array, from left to right, and reduces the array to a single value.

// arrayExample.reduce(fuction(acc, element, index, arr) {})

// @params - the callback function has four params
// 1. accumulator - accumulates all of the callbacks' returned values (required).
// 2. element - value of the currrent element (required).
// 3. index - index of the current element (optional).
// 4. arr - the original aaray object (optional).
// Good news is you already know #2, #3, #4, they are same as forEach(), filter(), map(). 

var numbers = [3, 5, 6, 7, 1];
var addNumbers = numbers.reduce(function(acc, element) {
    return acc + element;
})

console.log(addNumbers);

// Now, arrayExample.reduce(fuction(acc, element, index, arr) {}, initialValue)
// initialValue is the value by which the accumulator will start on. 
// If there is no initialValue provided, the accumulator starts as the value of the first array element.
// If there is an initialValue, this will be the initial value of the accumulator from the start.

// Example--->
var numbers2 = [0, 1, 2, 3, 4, 5];
var addNumbers2 = numbers2.reduce(function(acc, element) {
    return acc + element;
}, 8); //initialValue = 8

console.log(addNumbers2);

// Example 2--->
var population = [
    {
        state: 'California',
        pop: 39780000,
    },
    {
        state: 'Virginia',
        pop: 8412000,
    },
    {
        state: 'Florida',
        pop: 20610000,
    },
    {
        state: 'Maine',
        pop: 1331000,
    },
];

var totalPop = population.reduce(function(acc, element) {
    // console.log(acc);
    return acc + element.pop;
}, 0);
console.log(totalPop); 

// reduceRight() is the exact same as reduce() but it reduces the array elements from right to left instead of left to right.

