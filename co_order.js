"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Jaedan
   Date:   4/3/23
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function() {
      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date(),toDateString();
      orderForm.elements.model.focus();

//Retrieve the cost of user's protection plan
var pCost = document.querySelector('input[name="protection"]: checked').value*quantity;
orderForm.elements.protectionCost.value = pCost;

//Calculate the order subtotal
orderForm.elements.subtotal.value = initialCost + pCost;

//Calculate the sales tax
var salesTax = 0.05*(initialCost + pCost);
orderForm.elements.salesTax.value = salesTax;

//Calculate the total cost of the order
var totalCost = initialCost + pCost + salesTax;
orderForm.elements.totalCost.value = totalCost;
   }
);


