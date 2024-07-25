
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



let car = 'subaru';
let bike = 'honda';
let city = 'New York';
let country = 'Canada';
let number = 10;
let fruits = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is bike != 'yamaha'? I predict True.");
console.log(bike != 'yamaha');

console.log("Is bike != 'honda'? I predict False.");
console.log(bike != 'honda');

// Tests using the lower case function
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

console.log("Is city.toLowerCase() == 'los angeles'? I predict False.");
console.log(city.toLowerCase() == 'los angeles');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number == 10? I predict True.");
console.log(number == 10);

console.log("Is number != 10? I predict False.");
console.log(number != 10);

console.log("Is number > 5? I predict True.");
console.log(number > 5);

console.log("Is number < 5? I predict False.");
console.log(number < 5);

console.log("Is number >= 10? I predict True.");
console.log(number >= 10);

console.log("Is number <= 5? I predict False.");
console.log(number <= 5);

// Tests using "and" and "or" operators
console.log("Is number > 5 && number < 15? I predict True.");
console.log(number > 5 && number < 15);

console.log("Is number > 15 || number < 5? I predict False.");
console.log(number > 15 || number < 5);

// Test whether an item is in an array
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango'));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple'));