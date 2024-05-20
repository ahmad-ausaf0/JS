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



