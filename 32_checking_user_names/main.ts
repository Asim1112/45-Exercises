 
// 32  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.




// Define the list of current usernames
let current_users: string[] = ["Wood", "Russel", "Taufel", "Stuart", "Natasha"];

// Define the list of new usernames
let new_users: string[] = ["Cameron", "Harry", "Natasha", "Maria", "Wood"];

// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

// Loop through the new_users list to check each username
for (let newUser of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let newUserLower = newUser.toLowerCase();
    
    // Check if the new username is in the current_users list
    if (current_users_lower.includes(newUserLower)) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
};