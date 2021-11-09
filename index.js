/*
console.log ("Hey there 👀");
const age = 10;

if (age >= 18)    {
    console.log("You are allowed to get a driving license!😎");
}
else {
    const yearsLeft = 18 - age;
    console.log("You are not yet allowed to get a driving license :( Wait for another", yearsLeft ,"years");
}
*/
/*
const birthYear = 1889;
const century = (birthYear + 100) / 100;

if (century > 0){
    console.log("You were born in", Math.floor(century) , "century");
}
*/
// Coding challenge #1
/*
var MarkH = 1.69;
var MarkM = 78;
var JohnH = 1.95;
var JohnM = 92;
var MarkBMI = MarkM / MarkH ** 2;
var JohnBMI = JohnM / (JohnH * JohnH);
var BMIisHigher;
console.log(MarkBMI, JohnBMI)
if (MarkBMI >JohnBMI){
    console.log("Mark's BMI is higher");
} 
else {
    console.log("John's BMI is higher");
} 
*/
// Lecture #17
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2021;
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);
*/
// Driving license check
/*
const age = 1;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("Sarah can start driving license 🚗");
}
else {
    console.log("Sarah can not start a driving license ❌🚗");
}
*/
// In what century user was born
/*
const birthYear = 1999;
const century = (birthYear + 100) / 100;
console.log(century);
console.log(Math.floor(century))
*/
// Coding challenge #2
/*
var MarkH = 1.69;
var MarkM = 78;
var JohnH = 1.95;
var JohnM = 92;
var MarkBMI = (MarkM / MarkH ** 2).toFixed(3);
var JohnBMI = (JohnM / (JohnH * JohnH)).toFixed(3);
var BMIisHigher;
console.log(MarkBMI, JohnBMI)
if (MarkBMI >JohnBMI){
    console.log("Mark's BMI is higher");
    console.log(`Mark's BMI is ${MarkBMI} and John's BMI is ${JohnBMI}`);
} 
else {
    console.log("John's BMI is higher");
    console.log(`John's BMI is ${JohnBMI} and Mark's BMI is ${MarkBMI}`);
}
*/
 // Type conversion
 /*
const inputType = "18";
console.log (inputType + 18);
console.log(Number(inputType) + 18); // Important: Number/Boolean/String , starts with capital letter
console.log(Number('number')); // Output: NaN(Not a number, but actually it is an invalid number)
console.log(typeof NaN); // Output: number, so NaN is actually a number
console.log(String(18) + 15);
*/
// Type coercion 
/*
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);  
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
console.log(n);
n += 1;
console.log(n); // '111'
n -= 1;
console.log(n); // 110
let m = 4;
console.log("m = " + m);
console.log(n + m);
*/
// Falsy and Truthy values
// 5 falsy values: 0, '' , undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job!");
}