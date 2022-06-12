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
/*
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
*/
// Equality operators: == vs ===
/*
const age = 18;
if (age === 18) console.log("You just became an adult(strict)"); // better to use

if (age == 18) console.log("You just became an adult(loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23){
console.log("23 is a great number")
}   else if (favourite === 9){
    console.log("9 is an awesome number")
}   else if (favourite === 11){
    console.log("11 is a great number as well")
}   else {
    console.log("The number is not 23 ir 9 or 11")
}
if (favourite !== 0){
    console.log("Hi! Good morning!")
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("You are good to go!")
}   else if (!hasDriversLicense && hasGoodVision && isTired){
    console.log("You do not have a drivers license and you are tired, it is better not to drive")
}   else if(hasDriversLicense && !hasGoodVision && !isTired){
    console.log("You may drive, but be careful, because you have problems with your eyelid")
}   else{
    console.log("You better not to drive")
}
*/
// Coding challenge #3
/*
const av_dolphins = ((10 + 10 + 10) / 3);
const av_koalas = ((10 + 10 + 10) / 3);
console.log ("Average score of the team dolphins " + av_dolphins + "\n" + "Average score of the team koalas " + av_koalas)
console.log ("Average score of the team dolphins " + av_dolphins.toFixed(1) + "\n" + "Average score of the team koalas " + av_koalas.toFixed(1))
if (av_dolphins > av_koalas){
    console.log("Team dolphins won!")
}   else if (av_dolphins === av_koalas){
    console.log("Draw!")
}   else{
    console.log("Team koalas won!")
}

console.log("Bonus tasks")

if (av_dolphins > av_koalas && av_dolphins >= 100){
    console.log("Dolphins won!")
}   else if (av_dolphins === av_koalas && av_dolphins >= 100 && av_koalas >= 100){
    console.log("Draw!")
}   else if (av_dolphins < av_koalas && av_koalas >= 100){
    console.log("Koalas won!")
}   else{
    console.log("The score is less than 100")
}

if (av_dolphins > av_koalas && av_dolphins >= 100){
    console.log("Dolphins won!")
}   else if (av_dolphins > av_koalas && av_dolphins < 100){
    console.log("Dolphins have less than 100 point :(")
}   else{

}

if (av_dolphins < av_koalas && av_koalas >= 100){
    console.log("Koalas won!")
}   else if (av_dolphins < av_koalas && av_koalas < 100){
    console.log("Koalas have less than 100 point :(")
}   else{

}

if (av_dolphins === av_koalas && av_koalas >= 100 && av_koalas >= 100){
    console.log("Draw!")
}   else if (av_dolphins === av_koalas && (av_koalas < 100 || av_dolphins < 100)){
    console.log("Teams have less than 100 point :(")
}   else{

}
*/
// Switch statement
/*
const day = "sundayw";

switch (day){
    case "monday":
        console.log("It is Monday")
        break
    case "tuesday":
        console.log("Tuesday song")
        break
    case "wednesday":
    case "thursday":
        console.log("Wednesday or Thursday")
        break
    case "friday":
        console.log("Friday theeeeen")
        break
    case "saturday":
    case "sunday":
        console.log("Saturday family")
        console.log("Sunday funday")
        break
    default:
        console.log("Invalid day")
}
*/

//  If else statement as an analogue of previus switch program
/*
const day = "saturday";
if (day === "monday"){
    console.log("It is Monday")
}   else if (day === "tuesday"){
    console.log("Tuesday song")
}   else if (day === "wednesday"||day === "thursday"){
    console.log("Wednesday or Thursday")
}   else if (day === "friday"){
    console.log("Friday theeeen")
}   else if (day === "saturday" || day === "sunday"){
    console.log("Saturday family")
    console.log("Sunday funday")
}   else{
    console.log("Invalid number")
}
*/
// 28. The conditional (Ternary) Operator
/*
const age = 19;
age >= 18 ? console.log("You are 18 or older") :
console.log("You are younger than 18");

const drink = age >= 18 ? "You are allowed to drink" : "You are not allowed to drink";
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = "You are allowed to drink2";
}   else{
    drink2 = "You are not allowed to drink2";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "beer" : "water"}`);
*/
// Coding challenge #4
/*
// My first try
const bill = Number(prompt("What is the total?"));
console.log("Total in the bill is: " + bill + "$");
var tip;
bill >= 50 && bill <= 300 ? tip = (bill * 0.15) : tip = (bill * 0.2);
console.log("Tip is : " + tip + "$");
console.log(`Total bill + tip is : ${bill + tip} $`);
console.log(typeof(bill))
console.log(typeof(tip))

// Better way
const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill is ${bill1} and the tip is ${tip}. The total is ${bill + tip}`)
*/

