// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any; // This allows for additional properties
}

// Function to create a car object
function createCar(manufacturer: string, model: string, additionalInfo: { [key: string]: any } = {}): CarInfo {
    return {
        manufacturer,
        model,
        ...additionalInfo
    };
}

// Example usage
const car1 = createCar("Toyota", "Camry", { color: "red", year: 2024 });
const car2 = createCar("Ford", "Mustang", { color: "blue", feature: "sunroof" });

// Print the objects to verify the information
console.log("Car 1 Info:", car1);
console.log("Car 2 Info:", car2);

