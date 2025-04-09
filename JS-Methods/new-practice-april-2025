
// Challenge 1: Double the Numbers (Using map)
const numbers = [1, 2, 3, 4, 5];
const dNumbers = numbers.map(n => {
	return n * 2;
});

// const nhh = numbers.map(function (n) {
//     return n * 2;
// })

console.log(dNumbers);

// Challenge 2: Filter Even Numbers (Using filter)
const num = [1, 2, 3, 4, 5, 6];
const evenNum = num.filter(n =>{
    return n % 2 === 0;
});

console.log(evenNum);

// Challenge 3: Sum All Numbers (Using reduce)
const num1 = [10, 20, 30, 40];
const sumNum = num1.reduce((acc, element) => {
    return acc + element;
});

console.log(sumNum);

// Challenge 4: Extract Names (Using map)
const persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];

const names = persons.map(person => {
    return person.name;
});

console.log(names);

// Challenge 5: Count Occurrences (Using reduce) -> { apple: 3, banana: 2, orange: 1 }

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Method (1) - using for of loop
const countFruitObj = {};

for (let fruit of fruits) {
    if(countFruitObj[fruit]) {
        countFruitObj[fruit] += 1;
    }
    else {
        countFruitObj[fruit] = 1;
    }
}

console.log(countFruitObj);

// Method (2) - using reduce
const count = fruits.reduce((acc, fruit) => {
    if (acc[fruit]) {
      acc[fruit] += 1; // already exists
    } else {
      acc[fruit] = 1; // first time
    }
    return acc;
  }, {}); // start with an empty object
  
  console.log(count);

//  colors
const colors = ['red', 'blue', 'red', 'green', 'blue', 'red'];

const countColors = colors.reduce((acc, color) => {
    if(acc[color]) {
        acc[color] += 1;
    }
    else {
        acc[color] = 1;
    }
    return acc;
}, {});

console.log(countColors);

