let personName: string = "Mark Alexander"

// lower case
console.log("lower case:", personName.toLowerCase());

// upper case
console.log("upper case:", personName.toUpperCase());

// title case
console.log("title case:" ,personName.replace(/\b\w/g, c=> c.toUpperCase()));