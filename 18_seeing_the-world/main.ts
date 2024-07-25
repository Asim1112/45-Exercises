//  18 Seeing the World: Think of at least five places in the world you’d like to visit.
    
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let Locations: string [] = ["Opera House", "Golden Gate Bridge", "Singapore City", "Time Square", "Cape Town"];

//  array in its original order
console.log("original array", Locations);

//  array in alphabetical order
let storeInAlphabetic: string [] = [...Locations].sort();
console.log("array in alphabetical order", storeInAlphabetic);

//  original array still in its original order
console.log("original array in its original order", Locations);


//  array in reverse alphabetical order
let reverseAlphabeticOrder: string [] = [...Locations].sort().reverse()
console.log("array in reverse alphabetical order", reverseAlphabeticOrder);


//  original array still in its original order by printing it again
console.log("again printing original array", Locations);


//  reverse the order of the list
Locations.reverse();
console.log("array in reverse order", Locations);


//  reverse the order of the list to get back to the original order
Locations.reverse();
console.log("reverse the order to get back to the original order", Locations);


//  sort your array so it’s stored in alphabetical order.
Locations.sort()
console.log("array sorted and stored in alphabetical order", Locations);


//  sort to change array so it’s stored in reverse alphabetical order
Locations.sort().reverse();
console.log("ort to change array so it's stored in reverse alphabetical order.", Locations);



