// Strict Mode
'use strict'; 

/*
let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive a car')

// const private = 555;   We can not use it, because it is reserved by JS for other purposes
// const iterface = "You can not use it"
*/

// Functions
/*
function logger() {
    console.log("My name is Daniyel");
}
// calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const firstJuice = fruitProcessor(3, 5);
console.log (firstJuice);
console.log(fruitProcessor(2, 3));

const secondJuice = fruitProcessor (9, 1);
console.log(secondJuice);
console.log(firstJuice);
console.log(fruitProcessor(3, 3))
*/

/*

// Function declaration  We can call declared function before the declaration in the code
function calculateAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calculateAge1(2002);
console.log(age1);

// Function expression  We can not call function from function expression before expression in code
// console.log(age1, age2);
const calculateAge2 = function (birthYear) {
    return 2022 - birthYear;
}

console.log(calculateAge2(2001));
const age2 = calculateAge2(2001);
console.log(age1, age2);

*/
/*
// Arrow function. Helpful for the use of simple one-line functions
const calculateAge = birthYear => 2022 - birthYear;
const age = calculateAge(2002);
console.log(age);
*/
/* Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} is going to retire in ${retirement} years`;
}
console.log(yearsUntilRetirement(2002, "Daniyel"));
console.log(yearsUntilRetirement(1997, "Yan"));
*/
/* Leetcode problem 1 - Two Sum
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
