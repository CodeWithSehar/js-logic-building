/*
Problem Statement:
1. Food Delivery Cart Quantity (Post-Increment & Post-Decrement):
   - A customer adds a burger to the cart. Display the current quantity on screen 
     first, then increment the total count in the background (itemCount++).
   - The customer removes a burger. Display the current quantity first, 
     then decrement the count in the background (itemCount--).
*/

let itemCount = 1;

let displayedQuantityAdd = itemCount++;
console.log("Cart UI displays quantity as:", displayedQuantityAdd);
console.log("Actual items in cart database:", itemCount);

let displayedQuantityRemove = itemCount--;
console.log("Cart UI displays quantity as:", displayedQuantityRemove);
console.log("Actual items in cart database:", itemCount);

/*
2. Delivery Rider Daily Bonus (Pre-Increment & Pre-Decrement):
   - A rider completes a delivery. Immediately update their completed order count 
     before calculating the bonus payout (++completedOrders).
   - A delivery gets cancelled due to wrong address. Immediately decrease their 
     active order count before processing penalties (--activeOrders).
*/

let completedOrders = 9;
let activeOrders = 3;

let totalOrdersForBonus = ++completedOrders;
console.log("Orders count for bonus calculation:", totalOrdersForBonus);
console.log("Total completed orders variable:", completedOrders);

let remainingActiveOrders = --activeOrders;
console.log("Active orders count for dispatcher:", remainingActiveOrders);
console.log("Total active orders variable:", activeOrders);