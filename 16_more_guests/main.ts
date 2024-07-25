// 16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
//     guests to invite to dinner.

//     • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//       that you found a bigger dinner table.

//     • Add one new guest to the beginning of your array.

//     • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//     • Print a new set of invitation messages, one for each person in your list




const changingGuestList: string[] = ["Alex", "Stuart", "Paul"];
const cannotAttend: string = changingGuestList[0];

console.log(`\t${cannotAttend} cannot attend the Dinner\t`);


changingGuestList.splice(0,1,"Natasha");


//  NEW TASK
const informingPeople: string = "That's fantastic!! We h've got a Big Table for Dinner, there is lot of space with extra chairs";
console.log(informingPeople);

changingGuestList.unshift("Broad");         //  Adding new guest to the beginning of array
changingGuestList.splice(2,0,"Whistle");    //  Adding new guest in the middle of the array
changingGuestList.push("Russel");           //  Adding new guest to the end of the array

changingGuestList.map((elements) => {
    console.log(`Dear ${elements}, You are invited to a Dinner at Highway, it would be honour for me if you accept my invitation`)
});
