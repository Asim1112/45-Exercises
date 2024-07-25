//  17  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//      and you have space for only two guests.
//      • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
//        only two people for dinner.
//      • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//        from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//      • Print a message to each of the two people still on your list, letting them know they’re still invited.
//      • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
//        have an empty list at the end of your program.
var changingGuestList = ["Broad", "Natasha", "Whistle", "Stuart", "Paul", "Russel"];
var haveSpaceForTwoGuests = "The big dinner table is not arrived in time, i have a small dinner table with the space for two guests, therefore i can only invite two guests";
console.log(haveSpaceForTwoGuests);
//  letting guests know that they are not being invite
var popName = changingGuestList.pop();
console.log("".concat(popName, ", I am sorry i cannot invite you on Dinner"));
var popName2 = changingGuestList.pop();
console.log("".concat(popName2, ", I am sorry i cannot invite you on Dinner"));
var popName3 = changingGuestList.pop();
console.log("".concat(popName3, ", I am sorry i cannot invite you on Dinner"));
var popName4 = changingGuestList.pop();
console.log("".concat(popName4, ", I am sorry i cannot invite you on Dinner"));
// letting remaining guests know that they are still invited
var remainingOne = changingGuestList[1];
console.log(remainingOne + "," + " " + "You are still invited");
var remainingTwo = changingGuestList[0];
console.log(remainingTwo + "," + " " + "You are still invited");
//  removing last two names from the list
changingGuestList.pop();
changingGuestList.shift();
console.log(changingGuestList); //  EMPTY LIST
