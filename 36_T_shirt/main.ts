// 36  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// Define the function to create a shirt description
function make_shirt(size: string, message: string): string {
    // Create the sentence summarizing the shirt size and the message
    let sentence = `The shirt size is ${size}.`;
    let sentence2 = `The message printed on the shirt is: "${message}".`;

    // Combine the sentences and return the result
    return `${sentence} ${sentence2}`;
}

// Call the function with a size and message
console.log(make_shirt("Large", "This is an Ostrich Brand"));