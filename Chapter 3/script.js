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

//36. Functions calling other functions

/*
function fruitSliser(fruits)    {
    return(fruits * 4);
}
function fruitProcessor(apples, oranges)    {
    const applePieces = fruitSliser(apples);
    const orangePieces = fruitSliser(oranges);
    console.log(`Juice made of ${applePieces} apple pieces and ${orangePieces} orange pieces.`)
}

fruitProcessor(3, 4);
*/

// or

/*
function fruitSliser(fruits)    {
    return(fruits * 4);
}
function fruitProcessor(apples, oranges)    {
    const applePieces = fruitSliser(apples);
    const orangePieces = fruitSliser(oranges);
    const juice = `Juice made of ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(3, 4));
*/

// 37. Reviewing functions

/*
function calculateAge (birthYear){
    return (2022 - birthYear);
}

function yearsUntilRetirement (birthYear, firstName){

    const age = calculateAge(birthYear);
    const yearsLeft = 65 - age;
    
    if (yearsLeft > 1){
        return(`${firstName}, you have ${yearsLeft} years until the retirement`)
    }else if (yearsLeft === 1){
        return(`${firstName}, you have ${yearsLeft} year until the retirement`)
    }else if (yearsLeft === 0){
        return(`${firstName}, your retirement just started`)
    }else if (yearsLeft === -1){
        return(`${firstName}, you are already ${Math.abs(yearsLeft)} year on your retirement`)
    }else{
        return(`${firstName}, you are already ${Math.abs(yearsLeft)} years on your retirement`)
    }
    
}


console.log(yearsUntilRetirement(1955, "George"));

*/

// 38. Coding challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(){

    const dolphinsAverage = calcAverage(85, 54, 41);
    const koalasAverage = calcAverage(23, 34, 27);
    if (dolphinsAverage > koalasAverage && (dolphinsAverage / 2) >= koalasAverage){
        return(`Dolphins team won ${dolphinsAverage} vs ${koalasAverage}`);
    }else if (dolphinsAverage > koalasAverage){
        return(`Draw`);
    }else if (koalasAverage > dolphinsAverage && (koalasAverage / 2) >= dolphinsAverage){
        return(`Koalas team won ${koalasAverage} vs ${dolphinsAverage}`);
    }else{
        return(`Draw`);
    
    }
}

console.log(checkWinner());