/*
Problem: A customer buys 3 items from a store with prices Rs. 450, Rs. 1200, and Rs. 350.
The store offers a discount of Rs. 100 on the total bill. 
Write a program using arithmetic expressions to calculate:
1. The total bill before discount
2. The final bill after discount
3. The average price per item
Print all three results to the console.
*/

let item1 = 450;
let item2 = 1200;
let item3 = 350;


let totalBill = item1 + item2 + item3;

let discount = 100;
let finalBill = totalBill - discount;

let averagePrice = totalBill / 3;

console.log("Total Bill before discount: Rs. " , totalBill);
console.log("Final Bill after discount: Rs. " , finalBill);
console.log("Average Price per item: Rs. " , averagePrice);