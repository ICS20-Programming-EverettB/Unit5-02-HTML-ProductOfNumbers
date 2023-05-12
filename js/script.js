// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function multiples 2 numbers using for loops.
 */
function calculate () {
  
  // user num1 and num2 declare
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  
  // absolute number 1 and 2 variables  
  let absnum1 = Math.abs(num1);
  let absnum2 = Math.abs(num2);
  
  //declaring product = 0
  let product= 0
  
  // for loop to multiply absnum1 and absnum2
  for (let counter = 1; counter <= absnum2; counter++) {
    
    product =  product + absnum1

  }
  
  // if statments to multiply a negative x a negative number
  // if statment for product times negative 1 if number is less than 0 making it a positive 
  if ((num1 < 0) && (num2>0)) {
  product = product*-1
}
    
  // else if for product times negative 1 if number is less than 0 making it a positive 
  else if ((num2 < 0) && (num1>0)) {
   product = product*-1
}
  
 //declare numbers to include product and formula 
  let numbers = num1 + " x " + num2 + "= " + product
  
  // output numbers to user
  document.getElementById('display-multiply').innerHTML = numbers

}
 

 
