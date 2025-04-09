// var twoSum = function(nums, target) {
    
//     for (let i = 0; i <= nums.length - 1; i++) {
//        let sum = nums[i] + nums[i+1];
//        if(sum === target) {
//         // console.log(`Target found at: ${[i, i+1]}`);
//         return [i, i+1];
        
//        }
       
//     }
 
// };

// var run = twoSum([3,2,3], 6);
// console.log(run);

//optimized solution---
var twoSum = function(nums, target) {
    
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = i+1; j <= nums.length - 1; j++) {
            if(nums[i] + nums[j] === target)
                console.log(`found at: ${[i, j]} `);
        }
    }
 
};

twoSum([2,7,11,15], 9);
