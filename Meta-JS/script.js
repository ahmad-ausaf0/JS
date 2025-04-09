// console.log("Hello JS")

// console.log(x);
// y();

// var x = 9;

// function y() {
//     var val = 2
//     console.log(val);
// }

// var twoSum = function(nums, target) {
    
//     for (let i = 0; i <= nums.length - 1; nums++) {
//         for (let j = i+1; j <= nums.length - 1; j++) {
//             if(nums[i] + nums[j] === target)
//                 console.log(`found at: ${[i, j]} `);
//         }
//     }
 
// };

// twoSum([4,7,2,15], 9);

const minOfTwo = (a, b) => {
    if(a < b) 
        return a;
    else
        return b;
}

// const result = minOfTwo(2, 3);
// console.log(result);



function pow(x, n) {
    let res = x;
    for(let i = 1; i < n; i++) {
        res = res * x;
    }
    console.log(res);
    return res;

}

// pow(4, 2);

user = {
    name : 'John',
    surname : 'Doe'
}

nouser = {}

function isEmpty(obj) {
    for(let key in obj) {
        if(key)
            return true;
        else
            return false;
    }
}

isEmpty(user)