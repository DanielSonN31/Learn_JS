// Leetcode problem 1 - Two Sum
/* 
var twoSum = function(nums, target, number) {

    for (let i = 0; i < nums.length; i++) {
        for (let b = 1; b < nums.length; b++){
        let a = Number(nums[i] + nums[i+b]);
        console.log(i, b, i+b, nums[i+b])
        if (a === target){
            number = [i, i+b];
            return(number);
        }
    }
    }
    };
    
console.log(twoSum([3,2,3,4,5,6,2], 4))
*/

// Tried doing Leetcode problem #2 Add two numbers, but I did with an arrays 
// instead of linked lists. So this one is useless.
/*
var addTwoNumbers = function(l1, l2) {
    l1.reverse();
    l2.reverse();
    let a;
    let b;
    let c = [];
    let d = [];
    
    for (let i = 0; i < l1.length && l2.length; i++){
        
        a = Number((l1).join(""));
        b = Number((l2).join(""));

    }
    c.push(a + b);
    c = ("" + c).split("");
    for (let i = 0; i < c.length; i++){
        d.push(parseInt(c[i]))
    }
    
    console.log(d)
    
       
};

addTwoNumbers([2,4,3], [5,6,4]);

*/

// LeetCode 9 Palindrome number
/*
var isPalindrome = function(x) {

    let a = Number(String(x).split('').reverse().join(''));
    
    if (x === a){

        return(true);

    }else{
        return(false);
    }
};
console.log(isPalindrome(123));
*/