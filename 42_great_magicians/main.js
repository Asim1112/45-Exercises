"use strict";
// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// COPY OF PREVIOUS EXERCISE
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Array of magician's names
const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Dynamo"];
// Calling the function with the array
show_magicians(magicians);
//======================================================
// NEW TASK
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
const magicians2 = ["tom", "willson", "jerry"];
make_great(magicians2);
show_magicians(magicians2);
