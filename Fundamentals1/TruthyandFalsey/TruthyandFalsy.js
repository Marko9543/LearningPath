//Truthy and Falsy values.
//Here is a list of Falsy values (Null and Nan as well
//|
//|
//|
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

//Should return the second string. Reason being is that the condition is a number and JS automatically converts all conditions to booleans. 0 Being falsy means that the condition will return as a false condition.
//|
//|
//|
const money = 0;
if (money) {
  console.log("Dont spend it all '>_> ....... lucky.....");
} else {
  console.log("You should  apply for a job!");
}

//Below will return Undefined since height has a unndefined value.
// let height;
// if (height) {
//   console.log("Excellent");
// } else {
//   console.log("Height is UNDEFINED");
//}
