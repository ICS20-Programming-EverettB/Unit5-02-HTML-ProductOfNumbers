// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function dislays numbers between the users min and max .
 */
function calculate () {
  
  // user num1 and num2 declare
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  
  //declaring product = 0
  let product= 0
  
  // number open string
  for (let counter = 1; counter <= num2; counter++) {
    
    product =  product + num1

  }
  
  //display numbers
  let numbers = num1 + "x" + num2 + "=" + product
  
  // output all intigers between min and max
  document.getElementById('display-multiply').innerHTML = numbers

}
 
