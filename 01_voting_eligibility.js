/* 
   PROBLEM STATEMENT 4: Voting Eligibility Checker
   
   Question:
   The legal age to vote in an election is 18 years. A person's 
   age is 20. Write a program to check if the person is eligible 
   to vote or not using a comparison operator. 
   
*/

const legalAge = 18;
let personAge = 20;

if (personAge >= legalAge) {
  console.log("Person is eligible for voting");
} else {
  console.log("Person is NOT eligible for voting");
}
