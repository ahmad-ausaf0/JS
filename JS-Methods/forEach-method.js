// forEach() - Performs the specified action for each element in an array.

var numbers = [5, 4, 3, 2, 1, 0];

numbers.forEach(function(number) {
    console.log(number);
});

var newNumbers = [];
console.log("before: ", newNumbers);
numbers.forEach(number => {
    newNumbers.push(number);
});
console.log("after: ", newNumbers);

function multiple(x) {
    multipleNumber = x * x;
    console.log(multipleNumber);
}
numbers.forEach(multiple);

// Advanced forEach() topic
// Now, hereare the three parameters:
// 1. element - we have looked at this. This is current array element. In our example above it was 'number'; (required).
// 2. index - the array index of the current element (optional).
// 3. arr - the original array object, if needed (optional).


var numbers2 = [5, 4, 3, 2, 1, 0];

numbers.forEach(function(element, index, arr) {
    console.log('Element: ' + element + ' index: ' + index + ' Arr: ' + arr);
})

var fruits = ['kiwi', 'apple', 'banana', 'pear', 'grapes', 'lime', 'orange', 'lemon'];

fruits.forEach((element, index) => {
    console.log(element + ' is in index ' + index);
})