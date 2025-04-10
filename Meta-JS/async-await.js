// async function always return a promise no matter what value is being returned (either a value or promise itself)

// 1. returning a value wrapped into promise.
// async function getData() {
//     return "info";
// }

// const promiseData = getData();
// console.log(promiseData);
// promiseData.then(function (resData) {
//     console.log(resData);
// })


// 2. returning a promise itself.
// async function getData1() {
//     return promise;
// }

// const promise = new Promise((resolve, reject) => {
//     resolve("Promise resolved value.")
// });


// const promiseData1 = getData1();
// console.log(promiseData1);
// promiseData1.then(function (resData) {
//     console.log(resData);
// })


// async with await used to handle promises.
// const promiseUsingAwait = new Promise((resolve, reject) => {
//     resolve("Promise resolved value.")
// })

// async function handlePromise() {
//     const value = await promiseUsingAwait;
//     console.log(value);
// }

// handlePromise();


// Scenario 1: handle promise with normal .then() method -> JS engine will not wait for promise to be resolved.
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         (resolve("Promise resolved value."))
//     }, 5000);  
// });

// async function getData1() {
//     promise.then((res) => console.log(res));
//     console.log("Javascript");
// }

// getData1();


//Scenario 2: handle promise with await keyword -> JS engine was waiting for the promise to resolve.
// const promiseUsingAwait = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         (resolve("Promise resolved value."))
//     }, 5000);  
// })

// async function handlePromise() {
//     const value = await promiseUsingAwait;
//     console.log("Javascript");
//     console.log(value);
// }

// handlePromise();

// using fetch() to get a promise data
const API_URL = 'https://api.github.com/users/ahmad-ausaf0';

async function getProfile(){

    try {

        const data = await fetch(API_URL);
        const jsonData = await data.json();
        console.log(jsonData);
        
    } catch (error) {
        console.log(error);
        
    }

}

getProfile();
// using catch handling error ->
// getProfile().catch((err) => console.log(err));