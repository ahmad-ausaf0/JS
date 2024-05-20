// spread operator (...someArray) - The spread operator allows you to pass all array elements into a function without having to type them all individually.

const top3 = ['one', 'two', 'three'];

function showIteratable3(place1, place2, place3) {
    console.log("For 3 places...",);
    console.log("Visited: ", place1);
    console.log("Visited: ", place2);
    console.log("Visited: ", place3);
    console.log("\nFor 7 places...",);

}

showIteratable3(top3[0], top3[1], top3[2]);

// But if there are more places to visit like 7 places, then....

const top7 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];


// function showIteratable7(place1, place2, place3, place4, place5, place6, place7) {
//     console.log("Visited: ", place1);
//     console.log("Visited: ", place2);
//     console.log("Visited: ", place3);
//     console.log("Visited: ", place4);
//     console.log("Visited: ", place5);
//     console.log("Visited: ", place6);
//     console.log("Visited: ", place7);
//     console.log("\nSpread Operator...",);

// }

// -----------Alternatively-----------------

// using rest operator (...takingMultipleArguments) of  a function.
// The rest operator allows you to take items from an array and use them to create a separate sub-array.

function showIteratable7(...places) { //rest operator

    places.forEach((e) => {
        console.log("Visited: ", e);
    });

}

showIteratable7(top7[0], top7[1], top7[2], top7[3], top7[4], top7[5], top7[6]);

// It's really disappointing to type this number of code, for this issue we can use spread operator. Like below...

showIteratable3(...top3);
showIteratable7(...top7);


//More on rest - Using the spread operator, it's easy to concatenate arrays:

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// It's also easy to join objects:  

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// Here's how to use the spread operator to easily add one or more members to an existing array:

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //The output is 201, 200.

// You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2) //['apples'] 'not' ['apples','pears']




