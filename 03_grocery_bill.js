/*
Problem: A customer buys grocery items from a store:
- 2 KG Milk (Rs. 200 per KG)
- 3 Packs of Bread (Rs. 150 per Pack)
- 1 KG Sugar (Rs. 180 per KG)

The store offers a 10% discount on the total bill,
and a flat delivery fee of Rs. 50 is charged.

Calculate and print the following on the console:
1. Total bill before discount (Subtotal)
2. Discount amount (10% of subtotal)
3. Final bill after discount and adding delivery fee
4. Average cost per item type (Subtotal divided by 3)
*/

const milk = 2 * 200;
const bread = 3 * 150;
const sugar = 1 * 180;

let tBill = milk + bread + sugar;
console.log("Subtotal Before Discount: Rs.", tBill);

let discount = (10 / 100) * tBill;
console.log("Discount Amount 10%: Rs.", discount);

const deliveryFee = 50;
let finalBill = tBill - discount + deliveryFee;
console.log("Final Bill After Discount & Delivery: Rs.", finalBill);


/*
.toFixed():
 Used to format a number to a 
specific number of decimal places.
*/


let avgCost = tBill / 3;
console.log("Average Cost Per Item Type: Rs.", avgCost.toFixed(2));