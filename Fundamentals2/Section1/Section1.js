//All courses or lessons will be trained and consider strict mode in use.
"use strict";

//Functions
//Functions are reusable peices of code. variables hold 1 value while functions hold multiple peices of code.
//functions start formated as below.
//Function being the declaration of the process,
//logger being the name of the function(will be used in callback);
//Followed by parenthesis()
//Followed by curly braces{} content within is known as the function body.
//In coding view looks as seen below

// function logger() {
//   console.log("My name is Markus!");
//}

//To use the function put the functionn and parenthesis.
//Also logically global term for using a function is
//calling, runnning, or envoking.

//logger();

//Parameters are variables specific only to the function. This example will be apples and oranges.

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//when calling the function when the parameters are given values they become, "arguments.
fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
