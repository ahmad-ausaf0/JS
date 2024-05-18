// shift() method->
// shift() method removes the first array element and "shifts" all the other elements to a lower index.
// shift() method returns the element which is removed. we can also store the element like below example.

var array = ['one', 'two', 'three'];
var element1 = array.shift();
console.log(array);
console.log(element1);

// unshift()  - adds elements to the front (start) of the array and returns the new length of the array.

array.unshift("one");
console.log(array);
console.log(array.unshift()); // returns length of the array.

// pop() and push() methods are used to update array from the end of the array.

// pop() is used to remove last element from the array and returns it.

var array1 = [1, 2, 3 , 4];
var element1 = array1.pop()
console.log(element1);

// push() - Appends new elements to the end of an array, and returns the new length of the array.

var addE = array1.push(5);
console.log(addE);
console.log(array1);

