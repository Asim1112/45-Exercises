// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var Animals = ["cat", "lion", "dog"];
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var animal = Animals_1[_i];
    console.log(animal);
}
console.log("\n");
for (var _a = 0, Animals_2 = Animals; _a < Animals_2.length; _a++) {
    var animal = Animals_2[_a];
    console.log("A ".concat(animal, " has a tail"));
}
console.log("\n all of these are great pets! but i love cats more");
