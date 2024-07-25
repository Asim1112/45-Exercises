"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Array of magician's names
const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Dynamo"];
// Calling the function with the array
show_magicians(magicians);
