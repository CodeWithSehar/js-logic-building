/*
Problem: In a video game, a player has completed a total session time of 7485 seconds.
You need to build the UI display timer logic to convert these raw seconds into 
Hours, Minutes, and Remaining Seconds.

Calculate and print the following on the console:
1. Total Hours (1 hour = 3600 seconds)
2. Total Remaining Minutes (1 minute = 60 seconds)
3. Total Remaining Seconds
*/

const totalSeconds = 7485;

let remainingAfterHours = totalSeconds % 3600;
let hours = (totalSeconds - remainingAfterHours) / 3600;

let remainingSeconds = remainingAfterHours % 60;
let minutes = (remainingAfterHours - remainingSeconds) / 60;

console.log("Total Hours:", hours);
console.log("Total Remaining Minutes:", minutes);
console.log("Total Remaining Seconds:", remainingSeconds);