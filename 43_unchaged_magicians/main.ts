// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.






//  EXERCISE 40 TASK   

function show_magicians(magicians: string[]): void {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}

// Array of magician's names
const magicians1: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Dynamo"];

// Calling the function with the array
show_magicians(magicians1);





// NEW TASK 


function make_great2 (magicians: string[]): string[]{
        const greatMagicians: string[] = [];
    for(let i = 0; i < magicians.length; i++){
        greatMagicians.push(magicians[i]+ " the Great");
    }
        return greatMagicians;
}


const magicians3: string[] = ["Penn Jillette", "Teller", "Dynamo"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);