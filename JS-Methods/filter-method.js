// filter() - it creates a new array from the original array elements that have passed a certain condition, leaving out the ones that fail.

// Simply put, it filters through an array, choosing the ones that pass the test (which provided by a function).

// filter() method takes the same params as the forEach() method.

var age = [35, 14, 52, 21, 11, 80, 28, 17, 18];

var adult = age.filter(function(element) {
    return element >= 18;
});

console.log(adult);

// Challenge - ages btw 18 and 60

function checkAge(age) {
    return age > 18 && age < 60;
}
var workingAges = age.filter(checkAge);
console.log(workingAges);

var age2 = [35, 14, 52, 21, 11, 80, 28, 17, 18, 20];
age2.filter(function(element, index) {
    if(element > 18) {
        console.log(element + ' age -> index: ' + index);
    }
})

// Challenge - all days after the 15th day.

var daysOfTheMonth = [3, 15, 22, 2, 8, 30, 23];
daysOfTheMonth.filter((element, index) => {
    if(element > 15) {
        console.log(element + " has an index of " + index);
    }
})