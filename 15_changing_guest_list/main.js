// 15  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
//     new set of invitations. You’ll have to think of someone else to invite.
var changingGuestList = ["Alex", "Stuart", "Paul"];
var cannotAttend = changingGuestList[0]; // Alex
console.log("\t".concat(cannotAttend, " cannot attend the Dinner\t")); // print statement for the guest who cant make it
changingGuestList.splice(0, 1, "Natasha"); // replace Alex with Natasha (New list modified)
for (var i = 0; i < changingGuestList.length; i++) {
    console.log("Dear " + changingGuestList[i] + ", you are invited to Dinner at my home");
}
;
