///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 
    
    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const initialValue = 0;
const summedPrice = cart.reduce((runningTotal, curValue) => runningTotal + curValue.price, initialValue);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal * (1 + tax) - couponValue;
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
A PROPER CART PAGE REQUIRES A LIST OF WHAT THE CUSTOMER WANTS 
TO PURCHASE, THE TOTAL COST OF SAID PURCHASE, COST OF EACH
ITEMS LISTED, QUANTITY CHECK MEANING HOW MANY ITEMS DID
THEY CHOOSE OF EACH. I CHOOSE THESE PROPERTIES BECAUSE WHEN IM
SHOPPING THESE ARE SOME MAIN THINGS I LOOK FOR BEFORE OR WHEN 
I PURCHASE SOMETHING. LIST WILL BE A STRING, TOTAL WILL BE A NUMBER,
COST OF EACH ITEM WILL BE A NUMBER, AND QUANTITY OF EACH ITEM
WILL BE A NUMBER.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    list : 'pizza, breadsticks, soda',
    total : 50.00,
    cost : {pizza : 10.00, breadsticks : 5.00, soda : 4.00},
    quantity : {pizza : 1, breadsticks : 1, soda : 1}   
};

