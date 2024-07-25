"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Function to make a sandwich
function make_sandwich(...items) {
    console.log("Preparing your sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
console.log("Order 1:");
make_sandwich("lettuce", "tomato", "cheese");
console.log("\nOrder 2:");
make_sandwich("ham", "turkey", "mayo");
console.log("\nOrder 3:");
make_sandwich("bacon", "egg", "cheddar", "avocado", "spinach");
