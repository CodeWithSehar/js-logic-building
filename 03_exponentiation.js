/*
Problem Statement:
Deposit 10 in a savings account where money doubles (x2) every year.
Calculate the total money after 5 years using the exponentiation operator (**).
*/

let initialAmount = 10;
let multiplier = 2;
let years = 5;

// Using Exponentiation Operator (**)
let totalSavings = initialAmount * (multiplier ** years);

console.log("Total Money after 5 years:", totalSavings);